import { AWSError } from 'aws-sdk/lib/error';
import { v4 as uuid } from 'uuid';
import S3 from 'aws-sdk/clients/s3';
import SES from 'aws-sdk/clients/ses';
import admin from 'firebase-admin';
import to from 'await-to-js';
import { SearchResponse } from '@algolia/client-search';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

import {
  FirebaseApp,
  FirebaseError,
  FirebaseAuth,
  UserRecord,
  MailEvent,
  SESNotification,
  DocumentSnapshot,
  DocumentReference,
  ApptSearchHit,
  Attendee,
} from './types';

/**
 * Initializes a new `firebase.admin` instance with limited database/Firestore
 * capabilities (using the `databaseAuthVariableOverride` option).
 * @see {@link https://firebase.google.com/docs/reference/admin/node/admin.AppOptions#optional-databaseauthvariableoverride}
 * @see {@link https://firebase.google.com/docs/database/admin/start#authenticate-with-limited-privileges}
 *
 * Also note that we use [UUID]{@link https://github.com/uuidjs/uuid} package to
 * generate a unique `firebaseAppId` every time this API is called.
 * @todo Lift this Firebase app definition to a top-level file that is imported
 * by all the `/api/` endpoints.
 *
 * We have a workaround for the `FIREBASE_ADMIN_KEY` error we were encountering
 * on Vercel a while ago.
 * @see {@link https://github.com/tutorbookapp/covid-tutoring/issues/29}
 * @see {@link https://stackoverflow.com/a/41044630/10023158}
 * @see {@link https://stackoverflow.com/a/50376092/10023158}
 */
const firebase: FirebaseApp = admin.initializeApp(
  {
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: (process.env.FIREBASE_ADMIN_KEY as string).replace(
        /\\n/g,
        '\n'
      ),
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    }),
    projectId: process.env.FIREBASE_PROJECT_ID,
    serviceAccountId: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: { uid: 'server' },
  },
  uuid()
);
const s3: S3 = new S3();
const ses: SES = new SES();
const auth: FirebaseAuth = firebase.auth();
const db: DocumentReference = firebase
  .firestore()
  .collection('partitions')
  .doc('default');
const whitelist: RegExp[] = [/@tutorbook\.org$/];
const bucketId = 'tutorbook-mail';
const client: SearchClient = algoliasearch(
  process.env.ALGOLIA_SEARCH_ID as string,
  process.env.ALGOLIA_SEARCH_KEY as string
);
const index: SearchIndex = client.initIndex('default-appts');

/**
 * An AWS Lambda function that is invoked every time we receive an email. This
 * function:
 * 1. Looks up the sender and recipient of the email in our Firestore database.
 * 2. Updates the `From` and `Reply-To` headers to be the sender's anonymized
 * email address (i.e. their `@mail.tutorbook.org` email address).
 * 3. Fetches the email content from AWS S3 and forwards it to the intended
 * recipient.
 *
 * @todo Catch errors and use the SES Node.js SDK to send the error mesage email
 * to the original sender (e.g. "This appt no longer exists").
 */
/* eslint-disable-next-line import/prefer-default-export */
export function handler(event: MailEvent): void {
  
  const { messageId, recipientEmails } = parseEvent(event);
  const emailData: string = await getEmailData(messageId, bucketId);

  s3.getObject(
    { Bucket: bucketId, Key: notification.mail.messageId },
    (err: AWSError, data: S3.Types.GetObjectOutput) => {
      void callback(err, data);
    }
  );


  async function callback(
    err: AWSError,
    data: S3.Types.GetObjectOutput
  ): Promise<void> {
    if (err) {
      throw new Error(`${err.name} accessing S3 (${bucketId}): ${err.message}`);
    } else if (!data.Body) {
      throw new Error(`Email (${notification.mail.messageId}) was empty.`);
    } else {
      console.log('Processing email body:', data.Body.toString());

      // We reject the email if there are anonymous email address for multiple
      // appointments in the same email.
      // TODO: Use the SES SDK to reject the email with this error message.
      const handles: string[] = notification.receipt.recipients.map(
        (anonEmail: string) => anonEmail.split('@')[0]
      );
      const appt: ApptSearchHit = await getApptByHandles(handles);

      // Abort this operation if the Firestore document already exists (because
      // AWS Lambda functions can be invoked multiple times; the queue is
      // *eventually* consistent).
      // @see {@link https://amzn.to/38IqQ8S}
      const apptDoc: DocumentSnapshot = await db
        .collection('appts')
        .doc(appt.objectID)
        .get();
      if (!apptDoc.exists) throw new Error(`Appt ${apptDoc.id} doesn't exist.`);
      const mailDoc: DocumentSnapshot = await apptDoc.ref
        .collection('emails')
        .doc(notification.mail.messageId)
        .get();
      if (mailDoc.exists) throw new Error(`Email (${mailDoc.id}) processed.`);

      // Update the recipients (convert the anonymized emails to actual emails).
      // Anonymized emails are formatted as: `<handle>@mail.tutorbook.org`
      const recipients: Record<string, string> = {};
      await Promise.all(
        notification.receipt.recipients.map(async (anonEmail: string) => {
          recipients[anonEmail] = await getRealEmail(anonEmail, apptDoc);
        })
      );

      // Store the email (with all email addresses anonymized) in the appt's
      // `emails` Firestore subcollection.
      await mailDoc.ref.set({ ...notification.mail, raw: `${headers}${body}` });

      // For each anonymized recipient, replace their (anonymized) email address
      // (with their real one) and relay the updated message.
      Object.entries(recipients).map(([anon, real]: string[]) =>
        ses.sendRawEmail(
          {
            Destinations: [real],
            RawMessage: { Data: `${headers.split(anon).join(real)}${body}` },
          },
          (error: AWSError, res: SES.Types.SendRawEmailResponse) => {
            console.log(`Replacing anonymous (${anon}) with real (${real})...`);
            console.log('Raw:', `${headers.split(anon).join(real)}${body}`);
            if (error) {
              throw new Error(`${error.name} sending email: ${error.message}`);
            } else {
              console.log('Sent email:', JSON.stringify(res, null, 2));
            }
          }
        )
      );
    }
  }
}
