[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["subject-select/lib/subject-select"](../modules/_subject_select_lib_subject_select_.md) › [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md)

# Class: SubjectSelect <**S, SS, S**>

## Type parameters

▪ **S**

▪ **SS**

▪ **S**

## Hierarchy

- Component‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›

  ↳ **SubjectSelect**

## Index

### Constructors

- [constructor](_subject_select_lib_subject_select_.subjectselect.md#constructor)

### Properties

- [context](_subject_select_lib_subject_select_.subjectselect.md#context)
- [props](_subject_select_lib_subject_select_.subjectselect.md#props)
- [refs](_subject_select_lib_subject_select_.subjectselect.md#refs)
- [state](_subject_select_lib_subject_select_.subjectselect.md#state)
- [suggestionsTimeoutID](_subject_select_lib_subject_select_.subjectselect.md#suggestionstimeoutid)
- [contextType](_subject_select_lib_subject_select_.subjectselect.md#static-optional-contexttype)
- [searchIndex](_subject_select_lib_subject_select_.subjectselect.md#static-searchindex)

### Methods

- [UNSAFE_componentWillMount](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillmount)
- [UNSAFE_componentWillReceiveProps](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillreceiveprops)
- [UNSAFE_componentWillUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-unsafe_componentwillupdate)
- [closeSuggestions](_subject_select_lib_subject_select_.subjectselect.md#closesuggestions)
- [componentDidCatch](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidcatch)
- [componentDidMount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidmount)
- [componentDidUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidupdate)
- [componentWillMount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillmount)
- [componentWillReceiveProps](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillreceiveprops)
- [componentWillUnmount](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillunmount)
- [componentWillUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentwillupdate)
- [forceUpdate](_subject_select_lib_subject_select_.subjectselect.md#forceupdate)
- [getInputValue](_subject_select_lib_subject_select_.subjectselect.md#getinputvalue)
- [getSnapshotBeforeUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-getsnapshotbeforeupdate)
- [openSuggestions](_subject_select_lib_subject_select_.subjectselect.md#opensuggestions)
- [render](_subject_select_lib_subject_select_.subjectselect.md#render)
- [renderSubjectChipItems](_subject_select_lib_subject_select_.subjectselect.md#rendersubjectchipitems)
- [renderSubjectMenuItems](_subject_select_lib_subject_select_.subjectselect.md#rendersubjectmenuitems)
- [setState](_subject_select_lib_subject_select_.subjectselect.md#setstate)
- [shouldComponentUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-shouldcomponentupdate)
- [updateInputValue](_subject_select_lib_subject_select_.subjectselect.md#updateinputvalue)
- [updateSubject](_subject_select_lib_subject_select_.subjectselect.md#updatesubject)
- [updateSuggestions](_subject_select_lib_subject_select_.subjectselect.md#updatesuggestions)

## Constructors

### constructor

\+ **new SubjectSelect**(`props`: [SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)): _[SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[constructor](_pages_about_.aboutpage.md#constructor)_

_Defined in [src/subject-select/lib/subject-select.tsx:35](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L35)_

**Parameters:**

| Name    | Type                                                                                          |
| ------- | --------------------------------------------------------------------------------------------- |
| `props` | [SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md) |

**Returns:** _[SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md)_

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

• **props**: _Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› & Readonly‹object›_

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

• **state**: _[SubjectSelectState](../interfaces/_subject_select_lib_subject_select_.subjectselectstate.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[state](_pages_about_.aboutpage.md#state)_

_Defined in [src/subject-select/lib/subject-select.tsx:32](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L32)_

---

### suggestionsTimeoutID

• **suggestionsTimeoutID**: _number | undefined_

_Defined in [src/subject-select/lib/subject-select.tsx:33](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L33)_

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

### `Static` searchIndex

▪ **searchIndex**: _object & object_ = client.initIndex('subjects')

_Defined in [src/subject-select/lib/subject-select.tsx:35](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L35)_

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `nextContext`: any): _void_

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

| Name          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `nextContext` | any                                                                                                     |

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

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

| Name          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `nextState`   | Readonly‹S›                                                                                             |
| `nextContext` | any                                                                                                     |

**Returns:** _void_

---

### closeSuggestions

▸ **closeSuggestions**(): _void_

_Defined in [src/subject-select/lib/subject-select.tsx:70](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L70)_

We use `setTimeout` and `clearTimeout` to wait a "tick" on a blur event
before toggling. Waiting ensures that the user hasn't clicked on the
subject select menu (and thus called `this.openSuggestions`).

**`see`** [https://bit.ly/2x9eM27](https://bit.ly/2x9eM27)

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

▸ **componentDidUpdate**(`prevProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `prevState`: Readonly‹S›, `snapshot?`: SS): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentDidUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidupdate)_

Defined in node_modules/@types/react/index.d.ts:681

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name        | Type                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `prevProps` | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `prevState` | Readonly‹S›                                                                                             |
| `snapshot?` | SS                                                                                                      |

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `nextContext`: any): _void_

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

| Name          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `nextContext` | any                                                                                                     |

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

▸ **componentWillUpdate**(`nextProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _void_

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

| Name          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `nextState`   | Readonly‹S›                                                                                             |
| `nextContext` | any                                                                                                     |

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

### getInputValue

▸ **getInputValue**(`subjects`: object): _string_

_Defined in [src/subject-select/lib/subject-select.tsx:97](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L97)_

Workaround for styling the input as if it has content. If there are
subjects selected (in the given `subjects` object), this will return a
string containing a space (`' '`) so that the `TextField` styles itself as
if it were filled.

**`todo`** Ideally, remove this workaround. But instead, make the `&nsbp;`
actually show up as a non-breaking space (i.e. nothing).

**`see`** [https://github.com/jamesmfriedman/rmwc/issues/601](https://github.com/jamesmfriedman/rmwc/issues/601)

**Parameters:**

| Name       | Type   | Default             |
| ---------- | ------ | ------------------- |
| `subjects` | object | this.state.subjects |

**Returns:** _string_

The input value (either `' '` or `''`).

---

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `prevState`: Readonly‹S›): _SS | null_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[getSnapshotBeforeUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-getsnapshotbeforeupdate)_

Defined in node_modules/@types/react/index.d.ts:675

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

| Name        | Type                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `prevProps` | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `prevState` | Readonly‹S›                                                                                             |

**Returns:** _SS | null_

---

### openSuggestions

▸ **openSuggestions**(): _void_

_Defined in [src/subject-select/lib/subject-select.tsx:82](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L82)_

We clear the timeout set by `this.closeSuggestions` to ensure that they
user doesn't get a blip where the subject select menu disappears and
reappears abruptly.

**`see`** [https://bit.ly/2x9eM27](https://bit.ly/2x9eM27)

**Returns:** _void_

---

### render

▸ **render**(): _Element_

_Overrides void_

_Defined in [src/subject-select/lib/subject-select.tsx:124](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L124)_

**Returns:** _Element_

---

### renderSubjectChipItems

▸ **renderSubjectChipItems**(): _Element[]_

_Defined in [src/subject-select/lib/subject-select.tsx:187](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L187)_

**Returns:** _Element[]_

---

### renderSubjectMenuItems

▸ **renderSubjectMenuItems**(): _Element[]_

_Defined in [src/subject-select/lib/subject-select.tsx:168](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L168)_

**Returns:** _Element[]_

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

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)›, `nextState`: Readonly‹S›, `nextContext`: any): _boolean_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[shouldComponentUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-shouldcomponentupdate)_

Defined in node_modules/@types/react/index.d.ts:629

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

| Name          | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[SubjectSelectProps](../interfaces/_subject_select_lib_subject_select_.subjectselectprops.md)› |
| `nextState`   | Readonly‹S›                                                                                             |
| `nextContext` | any                                                                                                     |

**Returns:** _boolean_

---

### updateInputValue

▸ **updateInputValue**(`event`: SyntheticEvent‹HTMLInputElement›): _void_

_Defined in [src/subject-select/lib/subject-select.tsx:113](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L113)_

Workaround for styling the input as if it has content. If there are
subjects selected (in the given `subjects` object) and the `TextField`
would otherwise be empty, this will update the current input's value to a
string containing a space (`' '`) so that the `TextField` styles itself as
if it were filled. Otherwise, this acts as it normally would by updating
the `TextField`'s value using `setState`.

**`see`** [https://github.com/jamesmfriedman/rmwc/issues/601](https://github.com/jamesmfriedman/rmwc/issues/601)

**Parameters:**

| Name    | Type                             |
| ------- | -------------------------------- |
| `event` | SyntheticEvent‹HTMLInputElement› |

**Returns:** _void_

---

### updateSubject

▸ **updateSubject**(`subject`: string): _void_

_Defined in [src/subject-select/lib/subject-select.tsx:157](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L157)_

Selects or un-selects the given subject string by setting it's value in
`this.state.subjects` to `true` which:

1. Checks it's corresponding `mdc-checkbox` within our drop-down menu.
2. Adding it as a chip to the `mdc-text-field` content.

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `subject` | string |

**Returns:** _void_

---

### updateSuggestions

▸ **updateSuggestions**(`query`: string): _Promise‹void›_

_Defined in [src/subject-select/lib/subject-select.tsx:57](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/subject-select/lib/subject-select.tsx#L57)_

Updates the suggestions shown in the select below the subjects input based
on the results of the user's current input to an Algolia search query.

**`todo`** Add React `ErrorBoundries` and otherwise catch possible errors here.

**`see`** [https://www.algolia.com/doc/api-reference/api-methods/search/](https://www.algolia.com/doc/api-reference/api-methods/search/)

**Parameters:**

| Name    | Type   | Default |
| ------- | ------ | ------- |
| `query` | string | ""      |

**Returns:** _Promise‹void›_
