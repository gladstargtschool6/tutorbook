import Link from 'lib/intl/link';
import Router from 'next/router';
import Avatar from 'components/avatar';

import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { mutate } from 'swr';
import { useUser, useOrgs } from 'lib/account';
import { MenuSurfaceAnchor, MenuSurface } from '@rmwc/menu';
import { OrgJSON, User, AccountInterface } from 'lib/model';
import { IntercomAPI } from 'components/react-intercom';
import { Ripple } from '@rmwc/ripple';
import { Icon } from '@rmwc/icon';

import styles from './pop-over.module.scss';

interface PopOverLinkProps {
  href: string;
  as?: string;
  children: string;
  icon?: string;
}

export function PopOverLink({
  href,
  as,
  children,
  icon,
}: PopOverLinkProps): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <Ripple>
      <div className={styles.item}>
        {icon && (
          <div className={styles.icon}>
            <Icon icon={icon} />
          </div>
        )}
        <Link href={href} as={as}>
          <a className={styles.itemLink}>{children}</a>
        </Link>
      </div>
    </Ripple>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

interface PopOverButtonProps {
  onClick: () => void;
  children: string;
  icon?: string;
}

export function PopOverButton({
  onClick,
  children,
  icon,
}: PopOverButtonProps): JSX.Element {
  return (
    <Ripple>
      <button type='button' onClick={onClick} className={styles.item}>
        {icon && (
          <div className={styles.icon}>
            <Icon icon={icon} />
          </div>
        )}
        <span className={styles.label}>{children}</span>
      </button>
    </Ripple>
  );
}

interface PopOverAccountProps {
  account: AccountInterface;
  checked?: boolean;
}

export function PopOverAccountButton({
  account,
  onClick,
  checked,
}: { onClick: () => void } & PopOverAccountProps): JSX.Element {
  return (
    <Ripple>
      <button type='button' onClick={onClick} className={styles.item}>
        {checked && (
          <div className={styles.icon}>
            <Icon icon='account_circle' />
          </div>
        )}
        <div className={styles.avatar}>
          <Avatar src={account.photo} />
        </div>
        <span className={styles.label}>{account.name}</span>
      </button>
    </Ripple>
  );
}

export function PopOverAccountHeader({
  account,
}: PopOverAccountProps): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <div className={`${styles.item} ${styles.header}`}>
      <div className={styles.avatar}>
        <Avatar src={account.photo} />
      </div>
      <span className={styles.label}>{account.name}</span>
    </div>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

export function PopOverAccountLink({
  account,
  href,
  as,
  checked,
}: { href: string; as?: string } & PopOverAccountProps): JSX.Element {
  return (
    /* eslint-disable jsx-a11y/anchor-is-valid */
    <Ripple>
      <div className={styles.item}>
        <Link href={href} as={as}>
          <a className={styles.itemLink}>
            {checked && (
              <div className={styles.icon}>
                <Icon icon='account_circle' />
              </div>
            )}
            <div className={styles.avatar}>
              <Avatar src={account.photo} />
            </div>
            <span className={styles.label}>{account.name}</span>
          </a>
        </Link>
      </div>
    </Ripple>
    /* eslint-enable jsx-a11y/anchor-is-valid */
  );
}

interface PopOverMenuProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export default function PopOverMenu({
  open,
  onClose,
  children,
}: PopOverMenuProps): JSX.Element {
  const { t, lang: locale } = useTranslation();
  const { orgs } = useOrgs();
  const { user } = useUser();

  const [loggingOut, setLoggingOut] = useState<boolean>(false);

  return (
    <MenuSurfaceAnchor>
      {children}
      <MenuSurface open={open} onClose={onClose}>
        <div className={styles.picker}>
          <PopOverAccountHeader account={user} />
          <PopOverLink href='/'>{t('common:home')}</PopOverLink>
          <PopOverLink href='/search'>{t('common:search')}</PopOverLink>
          <PopOverLink href='/signup'>{t('common:profile')}</PopOverLink>
          <PopOverLink href='/dashboard'>{t('common:dashboard')}</PopOverLink>
          {orgs.map((org: OrgJSON) => (
            <>
              <div className={styles.line} />
              <PopOverAccountHeader account={org} />
              <PopOverLink href='/[org]' as={`/${org.id}`}>
                {t('common:home')}
              </PopOverLink>
              <PopOverLink href='/[org]/search' as={`/${org.id}/search`}>
                {t('common:search')}
              </PopOverLink>
              <PopOverLink href='/[org]/people' as={`/${org.id}/people`}>
                {t('common:people')}
              </PopOverLink>
              <PopOverLink href='/[org]/appts' as={`/${org.id}/appts`}>
                {t('common:appts')}
              </PopOverLink>
              <PopOverLink href='/[org]/settings' as={`/${org.id}/settings`}>
                {t('common:settings')}
              </PopOverLink>
            </>
          ))}
          <div className={styles.line} />
          <PopOverButton
            icon='add'
            onClick={() =>
              IntercomAPI('showNewMessage', t('common:new-org-msg'))
            }
          >
            {t('common:new-org-btn')}
          </PopOverButton>
          <div className={styles.line} />
          <PopOverButton
            onClick={async () => {
              setLoggingOut(true);
              const { default: firebase } = await import('lib/firebase');
              await import('firebase/auth');
              await firebase.auth().signOut();
              await mutate('/api/account', new User().toJSON(), false);
              await Router.push('/[locale]/login', `/${locale}/login`);
            }}
          >
            {t(loggingOut ? 'common:logging-out' : 'common:logout')}
          </PopOverButton>
        </div>
      </MenuSurface>
    </MenuSurfaceAnchor>
  );
}
