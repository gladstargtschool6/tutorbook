import { FormEvent, memo, useCallback, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IconButton } from '@rmwc/icon-button';
import { TextFieldHelperText } from '@rmwc/textfield';
import to from 'await-to-js';
import useTranslation from 'next-translate/useTranslation';
import { v4 as uuid } from 'uuid';

import { MatchInputs } from 'components/inputs';
import Loader from 'components/loader';
import Button from 'components/button';

import { useUser } from 'lib/account';
import Utils from 'lib/utils';
import {
  Availability,
  ApiError,
  TimeslotJSON,
  Match,
  MatchJSON,
  RequestJSON,
  UserJSON,
  Person,
} from 'lib/model';

import styles from './request-page.module.scss';

export interface RequestPageProps {
  value: UserJSON;
  matching: RequestJSON[];
  openDisplay: () => Promise<void>;
}

export default memo(function RequestPage({
  value,
  matching,
  openDisplay,
}: RequestPageProps): JSX.Element {
  const { user } = useUser();
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // TODO: Refactor the request inputs component such that we can fully control
  // the labels (i.e. the names) of each user. Right now, we're running extra
  // fetch requests to get those names (when we already have them here). Perhaps
  // just add a `name` property to the `Person` object and get it over with.
  const [match, setMatch] = useState<Match>(() => {
    const people: Person[] = [
      {
        id: value.id,
        name: value.name,
        photo: value.photo,
        roles: ['tutor'],
        handle: uuid(),
      },
    ];
    const subjects: Set<string> = new Set();
    const times: TimeslotJSON[] = [];
    let message = '';
    matching.forEach((m: RequestJSON) => {
      m.people.forEach((person: Person) => {
        if (people.findIndex((p) => p.id === person.id) >= 0) return;
        people.push(person);
      });
      m.subjects.forEach((subject: string) => subjects.add(subject));
      if (m.times) m.times.forEach((time: TimeslotJSON) => times.push(time));
      message +=
        !m.message.endsWith(' ') && !message ? `${m.message} ` : m.message;
    });
    return new Match({
      people,
      message,
      subjects: [...subjects],
      times: Availability.fromJSON(times),
      creator: {
        id: user.id,
        name: user.name,
        photo: user.photo,
        roles: [],
        handle: uuid(),
      },
    });
  });

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);
      const [err] = await to<AxiosResponse<MatchJSON>, AxiosError<ApiError>>(
        axios.post('/api/matches', match.toJSON())
      );
      if (err && err.response) {
        setLoading(false);
        setError(
          `An error occurred while sending your request. ${Utils.period(
            err.response.data.msg || err.message
          )}`
        );
      } else if (err && err.request) {
        setLoading(false);
        setError(
          'An error occurred while sending your request. Please check your ' +
            'Internet connection and try again.'
        );
      } else if (err) {
        setLoading(false);
        setError(
          `An error occurred while sending your request. ${Utils.period(
            err.message
          )} Please check your Internet connection and try again.`
        );
      } else {
        setChecked(true);
      }
    },
    [match]
  );

  return (
    <div className={styles.wrapper}>
      <Loader active={loading} checked={checked} />
      <div className={styles.nav}>
        <IconButton className={styles.btn} icon='close' onClick={openDisplay} />
      </div>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={onSubmit}>
          <MatchInputs
            value={match}
            onChange={setMatch}
            renderToPortal
            className={styles.field}
            tutors
            tutees
            mentors
            mentees
            subjects
            times
            message
          />
          <Button
            className={styles.btn}
            label={t('match:send-btn')}
            disabled={loading}
            raised
            arrow
          />
          {!!error && (
            <TextFieldHelperText
              persistent
              validationMsg
              className={styles.error}
            >
              {error}
            </TextFieldHelperText>
          )}
        </form>
      </div>
    </div>
  );
});
