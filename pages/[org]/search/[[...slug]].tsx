import { ParsedUrlQuery } from 'querystring';

import * as admin from 'firebase-admin';
import { v4 as uuid } from 'uuid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

import { QueryHeader } from 'components/navigation';
import Search from 'components/search';
import Footer from 'components/footer';
import Intercom from 'components/react-intercom';
import RequestDialog from 'components/request-dialog';

import {
  Availability,
  Option,
  Timeslot,
  User,
  UserJSON,
  UsersQuery,
  UsersQueryJSON,
} from 'lib/model';
import { withI18n } from 'lib/intl';
import Utils from 'lib/utils';

import match3rd from 'locales/en/match3rd.json';
import query3rd from 'locales/en/query3rd.json';
import search from 'locales/en/search.json';
import common from 'locales/en/common.json';

type App = admin.app.App;
type Firestore = admin.firestore.Firestore;
type DocumentReference = admin.firestore.DocumentReference;
type DocumentSnapshot = admin.firestore.DocumentSnapshot;

interface SearchPageProps {
  initialQuery: UsersQueryJSON;
  initialResults: UserJSON[];
  initialViewing?: UserJSON;
}

function onlyFirstAndLastInitial(name: string): string {
  const split: string[] = name.split(' ');
  return `${split[0]} ${split[split.length - 1][0]}.`;
}

/**
 * We search our Algolia index from the server-side before we even respond to
 * an HTTP request.
 * @todo Remove the `JSON.parse(JSON.stringify(ob))` workaround.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  async function getUser(params?: ParsedUrlQuery): Promise<UserJSON | null> {
    if (!params || !params.slug || !params.slug.length) return null;

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
    const firebase: App = admin.initializeApp(
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
    const firestore: Firestore = firebase.firestore();
    const db: DocumentReference =
      process.env.NODE_ENV === 'development'
        ? firestore.collection('partitions').doc('test')
        : firestore.collection('partitions').doc('default');

    firestore.settings({ ignoreUndefinedProperties: true });

    const userDoc: DocumentSnapshot = await db
      .collection('users')
      .doc(params.slug[0])
      .get();
    if (!userDoc.exists) return null;
    const user: User = User.fromFirestore(userDoc);
    return {
      name: onlyFirstAndLastInitial(user.name),
      photo: user.photo,
      bio: user.bio,
      availability: user.availability.toJSON(),
      mentoring: user.mentoring,
      tutoring: user.tutoring,
      socials: user.socials,
      langs: user.langs,
      id: user.id,
    } as UserJSON;
  }

  const query: UsersQuery = UsersQuery.fromURLParams(context.query);
  const url = `http://${context.req.headers.host as string}/api/users`;

  query.visible = true;
  if (context.params && context.params.org)
    query.orgs = [{ label: '', value: context.params.org as string }];

  return {
    props: {
      initialQuery: JSON.parse(JSON.stringify(query)) as UsersQueryJSON,
      initialResults: JSON.parse(
        JSON.stringify((await query.search(url)).users)
      ) as UserJSON[],
      initialViewing: JSON.parse(
        JSON.stringify(await getUser(context.params))
      ) as UserJSON | null,
    },
  };
};

function SearchPage({
  initialQuery,
  initialResults,
  initialViewing,
}: SearchPageProps): JSX.Element {
  const [searching, setSearching] = useState<boolean>(false);
  const [results, setResults] = useState<ReadonlyArray<User>>(
    initialResults.map((result: UserJSON) => User.fromJSON(result))
  );
  const [query, setQuery] = useState<UsersQuery>(
    UsersQuery.fromJSON(initialQuery)
  );
  const [viewing, setViewing] = useState<User | undefined>(
    initialViewing ? User.fromJSON(initialViewing) : undefined
  );

  const handleQueryChange = async (newQuery: UsersQuery) => {
    // TODO: Store the availability filters in the tutoring aspect and then
    // re-fill them when we go back to that aspect. Or, just keep them in the
    // query and ignore them when searching for mentors (i.e. in `api/users`).
    const updatedQuery: UsersQuery =
      newQuery.aspect === 'mentoring'
        ? new UsersQuery({ ...newQuery, availability: new Availability() })
        : newQuery;
    setQuery(updatedQuery);
    setSearching(true);
    setResults((await updatedQuery.search()).users);
    setSearching(false);
  };

  const { query: params } = useRouter();
  const org = useMemo(() => params.org as string, [params.org]);
  useEffect(() => {
    setQuery((prev: UsersQuery) => {
      return new UsersQuery({ ...prev, orgs: [{ label: '', value: org }] });
    });
  }, [org]);
  useEffect(() => {
    const url = query.getURL(`/${org}/search/${viewing ? viewing.id : ''}`);
    void Router.push('/[org]/search/[[...slug]]', url, { shallow: true });
  }, [org, query, viewing]);
  useEffect(() => {
    if (query.visible !== true) {
      setQuery(new UsersQuery({ ...query, visible: true }));
    }
  }, [query]);

  const onClosed = useCallback(() => setViewing(undefined), []);
  const subjects = useMemo(() => {
    if (!viewing) return [];
    return Utils.intersection<string, Option<string>>(
      viewing[query.aspect].subjects,
      query.subjects,
      (a: string, b: Option<string>) => a === b.value
    );
  }, [viewing, query.aspect, query.subjects]);
  const times = useMemo(() => {
    if (!viewing) return new Availability();
    const possible = Utils.intersection<Timeslot, Timeslot>(
      query.availability,
      viewing.availability,
      (a: Timeslot, b: Timeslot) => a.equalTo(b)
    );
    if (!possible.length) return new Availability();
    const start = possible[0].from;
    let end = possible[0].to;
    if (end.valueOf() - start.valueOf() >= 3600000) {
      end = new Date(start.valueOf() + 3600000);
    }
    return new Availability(new Timeslot(start, end));
  }, [viewing, query.availability]);

  return (
    <>
      <QueryHeader query={query} onChange={handleQueryChange} />
      {viewing && (
        <RequestDialog
          user={viewing}
          aspect={query.aspect}
          onClosed={onClosed}
          subjects={subjects}
          times={times}
        />
      )}
      <Search
        query={query}
        results={results}
        searching={searching}
        onChange={handleQueryChange}
        setViewing={setViewing}
      />
      <Footer />
      <Intercom />
    </>
  );
}

export default withI18n(SearchPage, { common, search, query3rd, match3rd });
