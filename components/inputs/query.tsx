import React, { useEffect, useState, useCallback } from 'react';
import LangSelect from 'components/lang-select';
import SubjectSelect from 'components/subject-select';

import dynamic from 'next/dynamic';
import useTranslation from 'next-translate/useTranslation';

import { Option, Availability, UsersQuery } from 'lib/model';
import { TimesSelectProps } from 'components/times-select';
import { InputsProps, InputsConfig } from './types';

const TimesSelect = dynamic<TimesSelectProps>(async () =>
  import('components/times-select')
);

type Input = 'subjects' | 'availability' | 'langs';

export default function UsersQueryInputs({
  value,
  onChange,
  focused: focusTarget,
  renderToPortal,
  className,
  subjects,
  availability,
  langs,
}: InputsProps<UsersQuery, Input> & InputsConfig<Input>): JSX.Element {
  const onSubjectsChange = useCallback(
    (s: Option<string>[]) => {
      onChange(new UsersQuery({ ...value, subjects: s }));
    },
    [onChange, value]
  );
  const onLangsChange = useCallback(
    (l: Option<string>[]) => {
      onChange(new UsersQuery({ ...value, langs: l }));
    },
    [onChange, value]
  );
  const onAvailabilityChange = useCallback(
    (a: Availability) => {
      onChange(new UsersQuery({ ...value, availability: a }));
    },
    [onChange, value]
  );

  const { t } = useTranslation();
  const [focused, setFocused] = useState<Input | undefined>(focusTarget);

  const focusSubjects = useCallback(() => setFocused('subjects'), []);
  const focusLangs = useCallback(() => setFocused('langs'), []);
  const focusAvailability = useCallback(() => setFocused('availability'), []);
  const focusNothing = useCallback(() => setFocused(undefined), []);

  useEffect(() => setFocused(focusTarget), [focusTarget]);

  return (
    <>
      {subjects && (
        <SubjectSelect
          focused={focused === 'subjects'}
          label={t('query:subjects')}
          onFocused={focusSubjects}
          onBlurred={focusNothing}
          onSelectedChange={onSubjectsChange}
          selected={value.subjects}
          placeholder={t(`query:subjects-${value.aspect}-placeholder`)}
          aspect={value.aspect}
          renderToPortal={renderToPortal}
          className={className}
          outlined
        />
      )}
      {availability && (
        <TimesSelect
          focused={focused === 'availability'}
          label={t('query:availability')}
          onFocused={focusAvailability}
          onBlurred={focusNothing}
          onChange={onAvailabilityChange}
          value={value.availability}
          renderToPortal={renderToPortal}
          className={className}
          outlined
        />
      )}
      {langs && (
        <LangSelect
          focused={focused === 'langs'}
          label={t('query:langs')}
          onFocused={focusLangs}
          onBlurred={focusNothing}
          onSelectedChange={onLangsChange}
          selected={value.langs}
          renderToPortal={renderToPortal}
          className={className}
          outlined
        />
      )}
    </>
  );
}
