import { DraggableData, Position, ResizableDelta, Rnd } from 'react-rnd';
import {
  ElementRef,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { ResizeDirection } from 're-resizable';
import useTranslation from 'next-translate/useTranslation';

import { TCallback, Timeslot } from 'lib/model';

import { getHeight, getPosition, getTimeslot } from './utils';
import styles from './timeslot-rnd.module.scss';

interface TimeslotRndProps {
  value: Timeslot;
  width?: number;
  onChange: TCallback<Timeslot>;
}

/**
 * In our calendar grid, there are 48px to each hour. We allow users to specify
 * availability in 15min (or 12px) increments. This wrapper class calculates and
 * updates the `react-rnd` position and size based on a given `Timeslot` value.
 * Note that this component **only** cares about the hours and minutes in the
 * `Timeslot` (i.e. you must position it into the correct date column yourself).
 */
export default function TimeslotRnd({
  value,
  onChange,
  width = 82,
}: TimeslotRndProps): JSX.Element {
  const { lang: locale } = useTranslation();

  // Workaround for `react-rnd`'s unusual resizing behavior.
  // @see {@link https://codesandbox.io/s/1z7kjjk0pq?file=/src/index.js}
  // @see {@link https://github.com/bokuweb/react-rnd/issues/457}
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const position = useMemo(() => getPosition(value, width), [value, width]);
  const height = useMemo(() => getHeight(value), [value]);

  const update = useCallback(
    (newHeight: number, newPosition: Position) => {
      onChange(getTimeslot(newHeight, newPosition, width));
    },
    [onChange, width]
  );

  const onClick = useCallback((e: ReactMouseEvent) => e.stopPropagation(), []);
  const onResizeStop = useCallback(() => setOffset({ x: 0, y: 0 }), []);
  const onResize = useCallback(
    (
      e: MouseEvent | TouchEvent,
      dir: ResizeDirection,
      ref: ElementRef<'div'>,
      delta: ResizableDelta
    ) => {
      // We use `offset` to ensure we don't duplicate position updates. This
      // callback can be called multiple times for the same resize delta. Thus,
      // we only want to update `position` to reflect the **difference** btwn
      // the last `delta` and the current `delta`.
      update(Number(ref.style.height.replace('px', '')), {
        x: position.x - (dir === 'left' ? delta.width - offset.x : 0),
        y: position.y - (dir === 'top' ? delta.height - offset.y : 0),
      });
      setOffset((prev: Position) => ({
        x: dir === 'left' ? delta.width : prev.x,
        y: dir === 'top' ? delta.height : prev.y,
      }));
    },
    [update, position, offset]
  );
  const onDrag = useCallback(
    (
      e: ReactMouseEvent | ReactTouchEvent | MouseEvent | TouchEvent,
      data: DraggableData
    ) => {
      // We don't have to use the `lastY` workaround b/c `react-draggable` snaps
      // correctly for the `onDrag` callback.
      // @see {@link https://github.com/STRML/react-draggable/issues/413}
      // @see {@link https://github.com/bokuweb/react-rnd/issues/453}
      update(height, { x: data.x, y: data.y });
    },
    [update, height]
  );

  return (
    <Rnd
      className={styles.timeslot}
      position={position}
      size={{ width: width - 12, height }}
      onResizeStop={onResizeStop}
      onResize={onResize}
      onClick={onClick}
      onDrag={onDrag}
      bounds='parent'
      resizeGrid={[0, 12]}
      dragGrid={[width, 12]}
      enableResizing={{
        bottom: true,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: true,
        topLeft: false,
        topRight: false,
      }}
    >
      {`${value.from.toLocaleString(locale, {
        hour: '2-digit',
        minute: '2-digit',
      })} - ${value.to.toLocaleString(locale, {
        hour: '2-digit',
        minute: '2-digit',
      })}`}
    </Rnd>
  );
}
