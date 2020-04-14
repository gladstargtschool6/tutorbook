[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["schedule-input/lib/schedule-input"](../modules/_schedule_input_lib_schedule_input_.md) › [ScheduleInput](_schedule_input_lib_schedule_input_.scheduleinput.md)

# Class: ScheduleInput <**S, SS, S**>

## Type parameters

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

- Component‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›

  ↳ **ScheduleInput**

## Index

### Constructors

- [constructor](_schedule_input_lib_schedule_input_.scheduleinput.md#constructor)

### Properties

- [context](_schedule_input_lib_schedule_input_.scheduleinput.md#context)
- [props](_schedule_input_lib_schedule_input_.scheduleinput.md#props)
- [refs](_schedule_input_lib_schedule_input_.scheduleinput.md#refs)
- [state](_schedule_input_lib_schedule_input_.scheduleinput.md#state)
- [contextType](_schedule_input_lib_schedule_input_.scheduleinput.md#static-optional-contexttype)
- [times](_schedule_input_lib_schedule_input_.scheduleinput.md#static-times)

### Accessors

- [timeslots](_schedule_input_lib_schedule_input_.scheduleinput.md#static-timeslots)

### Methods

- [UNSAFE_componentWillMount](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-unsafe_componentwillmount)
- [UNSAFE_componentWillReceiveProps](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-unsafe_componentwillreceiveprops)
- [UNSAFE_componentWillUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-unsafe_componentwillupdate)
- [componentDidCatch](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentdidcatch)
- [componentDidMount](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentdidmount)
- [componentDidUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentdidupdate)
- [componentWillMount](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentwillmount)
- [componentWillReceiveProps](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentwillreceiveprops)
- [componentWillUnmount](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentwillunmount)
- [componentWillUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-componentwillupdate)
- [forceUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#forceupdate)
- [getSnapshotBeforeUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-getsnapshotbeforeupdate)
- [isChecked](_schedule_input_lib_schedule_input_.scheduleinput.md#ischecked)
- [render](_schedule_input_lib_schedule_input_.scheduleinput.md#render)
- [setChecked](_schedule_input_lib_schedule_input_.scheduleinput.md#setchecked)
- [setState](_schedule_input_lib_schedule_input_.scheduleinput.md#setstate)
- [shouldComponentUpdate](_schedule_input_lib_schedule_input_.scheduleinput.md#optional-shouldcomponentupdate)
- [getNextDateWithDay](_schedule_input_lib_schedule_input_.scheduleinput.md#static-getnextdatewithday)
- [getNextDateWithTime](_schedule_input_lib_schedule_input_.scheduleinput.md#static-getnextdatewithtime)

## Constructors

### constructor

\+ **new ScheduleInput**(`props`: [ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)): _[ScheduleInput](_schedule_input_lib_schedule_input_.scheduleinput.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[constructor](_pages_about_.aboutpage.md#constructor)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:161](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L161)_

**Parameters:**

| Name    | Type                                                                                       |
| ------- | ------------------------------------------------------------------------------------------ |
| `props` | [ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops) |

**Returns:** _[ScheduleInput](_schedule_input_lib_schedule_input_.scheduleinput.md)_

## Properties

### context

• **context**: _any_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[context](_subject_select_lib_subject_select_.subjectselect.md#context)_

Defined in node_modules/@types/react/index.d.ts:484

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

---

### props

• **props**: _Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› & Readonly‹object›_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[props](_subject_select_lib_subject_select_.subjectselect.md#props)_

Defined in node_modules/@types/react/index.d.ts:509

---

### refs

• **refs**: _object_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[refs](_subject_select_lib_subject_select_.subjectselect.md#refs)_

Defined in node_modules/@types/react/index.d.ts:515

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Type declaration:

- \[ **key**: _string_\]: ReactInstance

---

### state

• **state**: _[ScheduleInputState](../interfaces/_schedule_input_lib_schedule_input_.scheduleinputstate.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[state](_pages_about_.aboutpage.md#state)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:142](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L142)_

---

### `Static` `Optional` contextType

▪ **contextType**? : _Context‹any›_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[contextType](_subject_select_lib_subject_select_.subjectselect.md#static-optional-contexttype)_

Defined in node_modules/@types/react/index.d.ts:466

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number;
const Ctx = React.createContext<MyContext>(0);

class Foo extends React.Component {
  static contextType = Ctx;
  context!: React.ContextType<typeof Ctx>;
  render() {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

---

### `Static` times

▪ **times**: _Readonly‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]›_ = [
new Timeslot(
ScheduleInput.getNextDateWithTime(7, 0, 0, 1),
ScheduleInput.getNextDateWithTime(12)
),
new Timeslot(
ScheduleInput.getNextDateWithTime(12, 0, 0, 1),
ScheduleInput.getNextDateWithTime(17)
),
new Timeslot(
ScheduleInput.getNextDateWithTime(17, 0, 0, 1),
ScheduleInput.getNextDateWithTime(7)
),
]

_Defined in [src/schedule-input/lib/schedule-input.tsx:148](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L148)_

Timeslots that users can choose their availability from: either morning
(7am to 12pm), afternoon (12pm to 5pm), or evening (5pm to 10pm).

## Accessors

### `Static` timeslots

• **get timeslots**(): _[Availability](_schedule_input_lib_schedule_input_.availability.md)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:222](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L222)_

Gets all of the timeslots that are available for selection. Right now, our
selection tool emulates that of Wyzant (i.e. it's just a grid of times and
checkboxes; 'morning', 'afternoon', and 'evening' on the x-axis and the
various days on the y-axis). This returns those timeslots open for
selection (e.g. 'Mondays from 7am to 12pm' --> 'Mondays morning').

**Returns:** _[Availability](_schedule_input_lib_schedule_input_.availability.md)_

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[UNSAFE_componentWillMount](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillmount)_

Defined in node_modules/@types/react/index.d.ts:710

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `nextContext`: any): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[UNSAFE_componentWillReceiveProps](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillreceiveprops)_

Defined in node_modules/@types/react/index.d.ts:742

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `nextContext` | any                                                                                                  |

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[UNSAFE_componentWillUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillupdate)_

Defined in node_modules/@types/react/index.d.ts:770

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `nextState`   | Readonly‹S›                                                                                          |
| `nextContext` | any                                                                                                  |

**Returns:** _void_

---

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentDidCatch](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidcatch)_

Defined in node_modules/@types/react/index.d.ts:639

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

| Name        | Type      |
| ----------- | --------- |
| `error`     | Error     |
| `errorInfo` | ErrorInfo |

**Returns:** _void_

---

### `Optional` componentDidMount

▸ **componentDidMount**(): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentDidMount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidmount)_

Defined in node_modules/@types/react/index.d.ts:618

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** _void_

---

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `prevState`: Readonly‹S›, `snapshot?`: SS): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentDidUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidupdate)_

Defined in node_modules/@types/react/index.d.ts:681

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name        | Type                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `prevProps` | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `prevState` | Readonly‹S›                                                                                          |
| `snapshot?` | SS                                                                                                   |

**Returns:** _void_

---

### `Optional` componentWillMount

▸ **componentWillMount**(): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentWillMount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillmount)_

Defined in node_modules/@types/react/index.d.ts:696

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** _void_

---

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `nextContext`: any): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentWillReceiveProps](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillreceiveprops)_

Defined in node_modules/@types/react/index.d.ts:725

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `nextContext` | any                                                                                                  |

**Returns:** _void_

---

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentWillUnmount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillunmount)_

Defined in node_modules/@types/react/index.d.ts:634

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** _void_

---

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentWillUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillupdate)_

Defined in node_modules/@types/react/index.d.ts:755

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

| Name          | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `nextState`   | Readonly‹S›                                                                                          |
| `nextContext` | any                                                                                                  |

**Returns:** _void_

---

### forceUpdate

▸ **forceUpdate**(`callback?`: undefined | function): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[forceUpdate](_subject_select_lib_subject_select_.subjectselect.md#forceupdate)_

Defined in node_modules/@types/react/index.d.ts:501

**Parameters:**

| Name        | Type                      |
| ----------- | ------------------------- |
| `callback?` | undefined &#124; function |

**Returns:** _void_

---

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `prevState`: Readonly‹S›): _SS | null_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[getSnapshotBeforeUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-getsnapshotbeforeupdate)_

Defined in node_modules/@types/react/index.d.ts:675

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

| Name        | Type                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `prevProps` | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `prevState` | Readonly‹S›                                                                                          |

**Returns:** _SS | null_

---

### isChecked

▸ **isChecked**(`time`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)): _boolean_

_Defined in [src/schedule-input/lib/schedule-input.tsx:241](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L241)_

Returns whether or not a checkbox should be checked by seeing if the given
timeslot exists in `this.state.availability`. If it does, this function
returns `true`. If not, `false`.

**`todo`** Make the `isMatch` function a method in the `Timeslot` class.

**Parameters:**

| Name   | Type                                                        |
| ------ | ----------------------------------------------------------- |
| `time` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) |

**Returns:** _boolean_

---

### render

▸ **render**(): _Element_

_Overrides void_

_Defined in [src/schedule-input/lib/schedule-input.tsx:267](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L267)_

All props (except `onChange` and `className`) are delegated to the
`TextField` element.

**Returns:** _Element_

---

### setChecked

▸ **setChecked**(`timeslot`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `event`: SyntheticEvent‹HTMLInputElement›): _void_

_Defined in [src/schedule-input/lib/schedule-input.tsx:253](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L253)_

Sets the timeslot as checked by modifying `this.state.availability`:

1. First, this function removes any matching timeslots from
   `this.state.availability`.
2. If it was checked, this function adds the timeslot to
   `this.state.availability`.

**`todo`** Make the `isMatch` function a method in the `Timeslot` class.

**Parameters:**

| Name       | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| `timeslot` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) |
| `event`    | SyntheticEvent‹HTMLInputElement›                            |

**Returns:** _void_

---

### setState

▸ **setState**<**K**>(`state`: function | null | S | object, `callback?`: undefined | function): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[setState](_subject_select_lib_subject_select_.subjectselect.md#setstate)_

Defined in node_modules/@types/react/index.d.ts:496

**Type parameters:**

▪ **K**: _keyof S_

**Parameters:**

| Name        | Type                                        |
| ----------- | ------------------------------------------- |
| `state`     | function &#124; null &#124; S &#124; object |
| `callback?` | undefined &#124; function                   |

**Returns:** _void_

---

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)›, `nextState`: Readonly‹S›, `nextContext`: any): _boolean_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[shouldComponentUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-shouldcomponentupdate)_

Defined in node_modules/@types/react/index.d.ts:629

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

| Name          | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[ScheduleInputProps](../modules/_schedule_input_lib_schedule_input_.md#scheduleinputprops)› |
| `nextState`   | Readonly‹S›                                                                                          |
| `nextContext` | any                                                                                                  |

**Returns:** _boolean_

---

### `Static` getNextDateWithDay

▸ **getNextDateWithDay**(`day`: [Day](../modules/_schedule_input_lib_schedule_input_.md#day), `time?`: Date): _Date_

_Defined in [src/schedule-input/lib/schedule-input.tsx:196](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L196)_

Returns the next date (from now) that has the given day and a time that
matches the given date's time.

**Parameters:**

| Name    | Type                                                         |
| ------- | ------------------------------------------------------------ |
| `day`   | [Day](../modules/_schedule_input_lib_schedule_input_.md#day) |
| `time?` | Date                                                         |

**Returns:** _Date_

---

### `Static` getNextDateWithTime

▸ **getNextDateWithTime**(`hours`: number, `minutes`: number, `seconds`: number, `milliseconds`: number): _Date_

_Defined in [src/schedule-input/lib/schedule-input.tsx:174](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L174)_

Returns the next date (from now) that has the given times.

**Parameters:**

| Name           | Type   | Default |
| -------------- | ------ | ------- |
| `hours`        | number | -       |
| `minutes`      | number | 0       |
| `seconds`      | number | 0       |
| `milliseconds` | number | 0       |

**Returns:** _Date_
