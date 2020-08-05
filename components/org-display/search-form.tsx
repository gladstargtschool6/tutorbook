import { Aspect, UsersQuery, Availability, OrgJSON } from 'lib/model';
import { QueryInputs } from 'components/inputs';

import React, { useState, useEffect, useCallback } from 'react';
import Router from 'next/router';
import Button from 'components/button';

import useTranslation from 'next-translate/useTranslation';
import styles from './search-form.module.scss';

interface SearchFormProps {
  aspect: Aspect;
  org: OrgJSON;
}

export default function SearchForm({
  aspect,
  org,
}: SearchFormProps): JSX.Element {
  const { t, lang: locale } = useTranslation();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [query, setQuery] = useState<UsersQuery>(
    new UsersQuery({
      aspect: aspect || 'mentoring',
      langs: [], // TODO: Pre-fill with current locale language.
      subjects: [],
      availability: new Availability(),
    })
  );

  useEffect(() => {
    setQuery((prev: UsersQuery) => {
      if (!aspect || aspect === prev.aspect) return prev;
      return new UsersQuery({ ...prev, aspect });
    });
  }, [aspect]);

  useEffect(() => {
    void Router.prefetch(
      '/[locale]/[org]/search/[[...slug]]',
      `/${locale}/${org.id}${query.url}`
    );
  }, [query, locale, org.id]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setSubmitting(true);
      await Router.push(
        '/[locale]/[org]/search/[[...slug]]',
        `/${locale}/${org.id}${query.url}`
      );
    },
    [query, locale, org.id]
  );
  const onChange = useCallback((qry: UsersQuery) => setQuery(qry), []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <QueryInputs
        value={query}
        onChange={onChange}
        className={styles.field}
        availability={query.aspect === 'tutoring'}
        subjects
      />
      <Button
        className={styles.btn}
        label={t(`org:search-${query.aspect}-btn`, { name: org.name })}
        disabled={submitting}
        raised
        arrow
      />
    </form>
  );
}
