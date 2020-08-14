import {
  RefObject,
  useCallback,
  useMemo,
  useLayoutEffect,
  useState,
} from 'react';
import { Dialog } from '@rmwc/dialog';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import to from 'await-to-js';
import cn from 'classnames';
import useSWR, { mutate } from 'swr';
import useTranslation from 'next-translate/useTranslation';
import useWebAnimations from '@wellyshen/use-web-animations';

import { RequestJSON, FCallback, User, UserJSON, UsersQuery } from 'lib/model';
import { ListRequestsRes } from 'lib/api/list-requests';
import { useUser } from 'lib/account';
import { usePrevious } from 'lib/hooks';

import DisplayPage from './display-page';
import EditPage from './edit-page';
import RequestPage from './request-page';
import styles from './user-dialog.module.scss';

type Page = 'edit' | 'display' | 'request';

// Animation durations and easing from the MWC spec and Sass implementation.
// @see {@link https://material.io/design/motion/the-motion-system.html#shared-axis}
// @see {@link https://material.io/develop/web/components/animation}
// @see {@link https://bit.ly/2EHiyDj}
const duration = 300;
const easing = 'cubic-bezier(.4, 0, .2, 1)';

// Animation for incoming page (i.e. the nested page) when navigating downward
// from parent page to a nested page.
const incomingFadeIn = {
  keyframes: [
    { opacity: 0, transform: 'scale(0.8)' },
    { opacity: 1, transform: 'scale(1.0)' },
  ],
  timing: { duration, easing },
};

// Animation for outgoing page (i.e. the parent page) when navigating downward
// from parent page to a nested page.
const outgoingFadeIn = {
  keyframes: [
    { opacity: 1, transform: 'scale(1.0)' },
    { opacity: 0, transform: 'scale(1.1)' },
  ],
  timing: { duration, easing },
};

// Animation for incoming page (i.e. the parent page) when navigating from a
// nested page to it's parent page. This is the exact inverse of the
// `outgoing-fade-in` keyframes.
const incomingFadeOut = {
  keyframes: [
    { opacity: 0, transform: 'scale(1.1)' },
    { opacity: 1, transform: 'scale(1.0)' },
  ],
  timing: { duration, easing },
};

// Animation for outgoing page (i.e. the nested page) when navigating from a
// nested page to it's parent page. This is the exact inverse of the
// `incoming-fade-in` keyframes.
const outgoingFadeOut = {
  keyframes: [
    { opacity: 1, transform: 'scale(1.0)' },
    { opacity: 0, transform: 'scale(0.8)' },
  ],
  timing: { duration, easing },
};

export interface UserDialogProps {
  id?: string;
  setQuery: FCallback<UsersQuery>;
  initialData?: UserJSON;
  initialPage?: Page;
  onClosed: () => void;
}

// This wrapper component merely manages the navigation transitions between it's
// children. The default visible page is the `DisplayPage` but that can be
// configured via the `page` prop.
export default function UserDialog({
  onClosed,
  setQuery,
  initialData = new User().toJSON(),
  initialPage = 'display',
}: UserDialogProps): JSX.Element {
  // Temporary ID that is used to locally mutate SWR data (without calling API).
  // We have to use a stateful variable for our ID to support user creation.
  // @see {@link https://github.com/vercel/swr/issues/576}
  if (!initialData.id) initialData.id = `temp-${uuid()}`;
  const [id, setId] = useState<string>(initialData.id);
  const { data } = useSWR<UserJSON>(`/api/users/${id}`, { initialData });
  const user = data as UserJSON;

  const onChange = useCallback(async (updated: UserJSON) => {
    setId(updated.id);
    await mutate(`/api/users/${updated.id}`, updated, false);
  }, []);

  const { ref: displayRef, animate: animateDisplay } = useWebAnimations();
  const { ref: editRef, animate: animateEdit } = useWebAnimations();
  const { ref: requestRef, animate: animateRequest } = useWebAnimations();

  const [active, setActive] = useState<Page>(initialPage);
  const prevActive = usePrevious<Page>(active);

  useLayoutEffect(() => {
    // Don't animate the initial page (we only want to animate when the user is
    // performing navigations **within** this dialog... not when opening it).
    if (!prevActive) return;
    // TODO: Why is this being called multiple times for each page transition?
    switch (active) {
      case 'edit':
        animateEdit(incomingFadeIn);
        animateDisplay(outgoingFadeIn);
        break;
      case 'request':
        animateRequest(incomingFadeIn);
        animateDisplay(outgoingFadeIn);
        break;
      default:
        animateDisplay(incomingFadeOut);
        if (prevActive === 'edit') animateEdit(outgoingFadeOut);
        if (prevActive === 'request') animateRequest(outgoingFadeOut);
        break;
    }
  }, [active, prevActive, animateDisplay, animateEdit, animateRequest]);

  const openEdit = useCallback(() => {
    setActive('edit');
    return new Promise<void>((resolve) => setTimeout(resolve, duration));
  }, []);
  const openRequest = useCallback(() => {
    setActive('request');
    return new Promise<void>((resolve) => setTimeout(resolve, duration));
  }, []);
  const openDisplay = useCallback(() => {
    setActive('display');
    return new Promise<void>((resolve) => setTimeout(resolve, duration));
  }, []);

  const { user: currentUser } = useUser();
  const openMatch = useCallback(async () => {
    const request: RequestJSON = {
      id: `temp-${uuid()}`,
      subjects: user.tutoring.searches,
      people: [{ id: user.id, roles: ['tutee'], handle: uuid() }],
      creator: { id: currentUser.id, roles: [], handle: uuid() },
      message: 'Request auto created by matching queue.',
    };
    /* eslint-disable @typescript-eslint/require-await */
    await mutate(
      '/api/requests',
      async (res?: ListRequestsRes) => {
        return res
          ? { hits: res.hits + 1, requests: [...res.requests, request] }
          : { hits: 1, requests: [request] };
      },
      false
    );
    onClosed();
    const { data: created } = await axios.post<RequestJSON>(
      '/api/requests',
      request
    );
    await mutate(
      '/api/requests',
      async (res?: ListRequestsRes) => {
        if (!res) return { hits: 1, requests: [created] };
        const idx = res.requests.findIndex((r) => r.id === request.id);
        if (idx < 0)
          return { hits: res.hits + 1, requests: [...res.requests, created] };
        return {
          hits: res.hits,
          requests: [
            ...res.requests.slice(0, idx),
            created,
            ...res.requests.slice(idx + 1),
          ],
        };
      },
      false
    );
    /* eslint-enable @typescript-eslint/require-await */
  }, [onClosed, user, currentUser]);

  const [open, setOpen] = useState<boolean>(true);
  const onDisplayClosed = useCallback(() => setOpen(false), []);

  return (
    <Dialog open={open} onClosed={onClosed} className={styles.dialog}>
      <div
        className={cn(styles.page, { [styles.active]: active === 'display' })}
        ref={displayRef as RefObject<HTMLDivElement>}
      >
        <DisplayPage
          value={user}
          openEdit={openEdit}
          openMatch={openMatch}
          openRequest={openRequest}
          onClosed={onDisplayClosed}
          onChange={onChange}
        />
      </div>
      <div
        className={cn(styles.page, { [styles.active]: active === 'edit' })}
        ref={editRef as RefObject<HTMLDivElement>}
      >
        <EditPage value={user} onChange={onChange} openDisplay={openDisplay} />
      </div>
      <div
        className={cn(styles.page, { [styles.active]: active === 'request' })}
        ref={requestRef as RefObject<HTMLDivElement>}
      >
        <RequestPage value={user} openDisplay={openDisplay} />
      </div>
    </Dialog>
  );
}
