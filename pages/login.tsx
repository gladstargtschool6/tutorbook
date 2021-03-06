import Login from 'components/login';
import Footer from 'components/footer';
import Intercom from 'components/react-intercom';
import { EmptyHeader } from 'components/navigation';

import { withI18n } from 'lib/intl';

import login from 'locales/en/login.json';
import common from 'locales/en/common.json';

function LoginPage(): JSX.Element {
  return (
    <>
      <EmptyHeader />
      <Login />
      <Footer />
      <Intercom />
    </>
  );
}

export default withI18n(LoginPage, { common, login });
