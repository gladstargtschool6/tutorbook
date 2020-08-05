import React, { useMemo } from 'react';
import ErrorPage from 'next/error';
import Intercom from 'components/react-intercom';
import Footer from 'components/footer';

import { Overview } from 'components/dashboard';
import { TabHeader } from 'components/header';
import { useRouter } from 'next/router';
import { useUser } from 'lib/account';
import { withI18n } from 'lib/intl';

import useTranslation from 'next-translate/useTranslation';

import common from 'locales/en/common.json';
import overview from 'locales/en/overview.json';

function DashboardPage(): JSX.Element {
  const { orgs, loggedIn } = useUser();
  const { query } = useRouter();
  const { t } = useTranslation();

  const org = useMemo(() => {
    const idx = orgs.findIndex((o) => o.id === query.org);
    if (idx < 0) return;
    return orgs[idx];
  }, [orgs, query.org]);
  const error = useMemo(() => {
    if (loggedIn === undefined) return;
    if (loggedIn === false) return 'You must be logged in to access this page';
    if (!org) return 'You are not a member of this organization';
    return;
  }, [loggedIn, org]);

  return (
    <>
      {!!error && <ErrorPage statusCode={401} title={error} />}
      {!!org && (
        <>
          <TabHeader
            tabs={[
              {
                label: t('common:overview'),
                active: true,
                href: '/[org]/dashboard',
                as: `/${query.org as string}/dashboard`,
              },
              {
                label: t('common:people'),
                active: false,
                href: '/[org]/people',
                as: `/${query.org as string}/people`,
              },
              {
                label: t('common:appts'),
                active: false,
                href: '/[org]/appts',
                as: `/${query.org as string}/appts`,
              },
            ]}
          />
          <Overview account={org} />
          <Footer />
          <Intercom />
        </>
      )}
    </>
  );
}

export default withI18n(DashboardPage, { common, overview });
