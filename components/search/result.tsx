import { SyntheticEvent } from 'react';
import { ChipSet, Chip } from '@rmwc/chip';
import { Ripple } from '@rmwc/ripple';
import cn from 'classnames';

import Avatar from 'components/avatar';

import { TCallback, User } from 'lib/model';

import styles from './result.module.scss';

interface Props {
  user?: User;
  className?: string;
  onClick?: TCallback<SyntheticEvent<HTMLElement>>;
  loading?: boolean;
  avatar?: boolean;
}

export default function Result({
  user,
  className,
  onClick,
  loading,
  avatar = true,
}: Props): JSX.Element {
  return (
    <Ripple disabled={loading || !onClick} onClick={onClick}>
      <li
        className={cn(styles.listItem, className, {
          [styles.disabled]: loading || !onClick,
          [styles.loading]: loading,
          [styles.avatar]: avatar,
        })}
      >
        {avatar && (
          <div className={styles.img}>
            <Avatar loading={loading} src={(user || {}).photo} />
          </div>
        )}
        <div className={styles.rows}>
          <div className={styles.name}>{user && user.name}</div>
          <div className={styles.bio}>{user && user.bio}</div>
          <div className={styles.subjectsScroller}>
            <ChipSet className={styles.subjects}>
              {!!user &&
                user.mentoring.subjects.map((subject: string) => (
                  <Chip className={styles.subject}>{subject}</Chip>
                ))}
            </ChipSet>
          </div>
        </div>
      </li>
    </Ripple>
  );
}
