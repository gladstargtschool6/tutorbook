/**
 * Takes a user's actual email and returns their anonymized email (i.e. their
 * `<uid>-<appt>@mail.tutorbook.org` email address).
 *
 * If a user doesn't already exist, we create that user and add them to the
 * appointment's `attendees` field.
 *
 * @todo Get the user's name (from the original `From:` header) and use it when
 * creating new users.
 *
 * @todo Create the user's Firestore profile document as well (and populate it
 * with the default `User` data model values).
 */
async function getAnonEmail(
  realEmail: string,
  apptDoc: DocumentSnapshot
): Promise<string> {
  if (whitelist.some((rgx: RegExp) => rgx.test(realEmail))) return realEmail;
  let [err, user] = await to<UserRecord, FirebaseError>(
    auth.getUserByEmail(realEmail)
  );
  if (err && err.code === 'auth/user-not-found') {
    console.log(`Creating new user (${realEmail})...`);
    [err, user] = await to<UserRecord, FirebaseError>(
      auth.createUser({ email: realEmail })
    );
    if (err) throw new Error(`${err.name} creating user: ${err.message}`);
  } else if (err) {
    throw new Error(`${err.name} fetching user (${realEmail}): ${err.message}`);
  }
  const id: string = (user as UserRecord).uid;
  const handle: string = uuid();
  const attendees = (apptDoc.data() || {}).attendees as Attendee[];
  const idx: number = attendees.findIndex((a: Attendee) => a.handle === handle);
  if (idx < 0) {
    const attendee: Attendee = { id, handle, roles: [] };
    await apptDoc.ref.update({ attendees: [...attendees, attendee] });
  }
  return `${handle}@mail.tutorbook.org`;
}
