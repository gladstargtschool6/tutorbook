[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["form/lib/covid-form"](../modules/_form_lib_covid_form_.md) › [Form](_form_lib_covid_form_.form.md)

# Class: Form <**SS**>

## Type parameters

▪ **SS**

## Hierarchy

- Component‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md), object›

  ↳ **Form**

## Index

### Constructors

- [constructor](_form_lib_covid_form_.form.md#constructor)

### Properties

- [context](_form_lib_covid_form_.form.md#context)
- [inputs](_form_lib_covid_form_.form.md#inputs)
- [props](_form_lib_covid_form_.form.md#props)
- [refs](_form_lib_covid_form_.form.md#refs)
- [state](_form_lib_covid_form_.form.md#state)
- [values](_form_lib_covid_form_.form.md#values)
- [contextType](_form_lib_covid_form_.form.md#static-optional-contexttype)

### Methods

- [UNSAFE_componentWillMount](_form_lib_covid_form_.form.md#optional-unsafe_componentwillmount)
- [UNSAFE_componentWillReceiveProps](_form_lib_covid_form_.form.md#optional-unsafe_componentwillreceiveprops)
- [UNSAFE_componentWillUpdate](_form_lib_covid_form_.form.md#optional-unsafe_componentwillupdate)
- [componentDidCatch](_form_lib_covid_form_.form.md#optional-componentdidcatch)
- [componentDidMount](_form_lib_covid_form_.form.md#optional-componentdidmount)
- [componentDidUpdate](_form_lib_covid_form_.form.md#optional-componentdidupdate)
- [componentWillMount](_form_lib_covid_form_.form.md#optional-componentwillmount)
- [componentWillReceiveProps](_form_lib_covid_form_.form.md#optional-componentwillreceiveprops)
- [componentWillUnmount](_form_lib_covid_form_.form.md#optional-componentwillunmount)
- [componentWillUpdate](_form_lib_covid_form_.form.md#optional-componentwillupdate)
- [forceUpdate](_form_lib_covid_form_.form.md#forceupdate)
- [getSnapshotBeforeUpdate](_form_lib_covid_form_.form.md#optional-getsnapshotbeforeupdate)
- [handleChange](_form_lib_covid_form_.form.md#handlechange)
- [render](_form_lib_covid_form_.form.md#render)
- [renderInputs](_form_lib_covid_form_.form.md#renderinputs)
- [setState](_form_lib_covid_form_.form.md#setstate)
- [shouldComponentUpdate](_form_lib_covid_form_.form.md#optional-shouldcomponentupdate)
- [submit](_form_lib_covid_form_.form.md#submit)

## Constructors

### constructor

\+ **new Form**(`props`: [FormProps](../interfaces/_form_lib_covid_form_.formprops.md)): _[Form](_form_lib_covid_form_.form.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[constructor](_pages_about_.aboutpage.md#constructor)_

_Defined in [src/form/lib/covid-form.tsx:53](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L53)_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `props` | [FormProps](../interfaces/_form_lib_covid_form_.formprops.md) |

**Returns:** _[Form](_form_lib_covid_form_.form.md)_

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

### inputs

• **inputs**: _Element[]_

_Defined in [src/form/lib/covid-form.tsx:50](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L50)_

---

### props

• **props**: _Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› & Readonly‹object›_

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

• **state**: _[FormState](../interfaces/_form_lib_covid_form_.formstate.md)_

_Overrides [AboutPage](_pages_about_.aboutpage.md).[state](_pages_about_.aboutpage.md#state)_

_Defined in [src/form/lib/covid-form.tsx:49](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L49)_

---

### values

• **values**: _object_

_Defined in [src/form/lib/covid-form.tsx:51](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L51)_

#### Type declaration:

- \[ **formInputLabel**: _string_\]: any

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

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `nextContext`: any): _void_

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

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `nextContext` | any                                                                     |

**Returns:** _void_

---

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `nextState`: Readonly‹object›, `nextContext`: any): _void_

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

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `nextState`   | Readonly‹object›                                                        |
| `nextContext` | any                                                                     |

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

▸ **componentDidUpdate**(`prevProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `prevState`: Readonly‹object›, `snapshot?`: SS): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[componentDidUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-componentdidupdate)_

Defined in node_modules/@types/react/index.d.ts:681

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

| Name        | Type                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `prevProps` | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `prevState` | Readonly‹object›                                                        |
| `snapshot?` | SS                                                                      |

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

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `nextContext`: any): _void_

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

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `nextContext` | any                                                                     |

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

▸ **componentWillUpdate**(`nextProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `nextState`: Readonly‹object›, `nextContext`: any): _void_

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

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `nextState`   | Readonly‹object›                                                        |
| `nextContext` | any                                                                     |

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

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `prevState`: Readonly‹object›): _SS | null_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[getSnapshotBeforeUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-getsnapshotbeforeupdate)_

Defined in node_modules/@types/react/index.d.ts:675

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

| Name        | Type                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `prevProps` | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `prevState` | Readonly‹object›                                                        |

**Returns:** _SS | null_

---

### handleChange

▸ **handleChange**(`input`: [InputProps](../interfaces/_form_lib_covid_form_.inputprops.md), `event`: SyntheticEvent‹HTMLInputElement | HTMLSelectElement›): _void_

_Defined in [src/form/lib/covid-form.tsx:137](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L137)_

**Parameters:**

| Name    | Type                                                            |
| ------- | --------------------------------------------------------------- |
| `input` | [InputProps](../interfaces/_form_lib_covid_form_.inputprops.md) |
| `event` | SyntheticEvent‹HTMLInputElement &#124; HTMLSelectElement›       |

**Returns:** _void_

---

### render

▸ **render**(): _Element_

_Overrides void_

_Defined in [src/form/lib/covid-form.tsx:157](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L157)_

**Returns:** _Element_

---

### renderInputs

▸ **renderInputs**(): _void_

_Defined in [src/form/lib/covid-form.tsx:67](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L67)_

**Returns:** _void_

---

### setState

▸ **setState**<**K**>(`state`: function | null | S | object, `callback?`: undefined | function): _void_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[setState](_subject_select_lib_subject_select_.subjectselect.md#setstate)_

Defined in node_modules/@types/react/index.d.ts:496

**Type parameters:**

▪ **K**: _keyof object_

**Parameters:**

| Name        | Type                                        |
| ----------- | ------------------------------------------- |
| `state`     | function &#124; null &#124; S &#124; object |
| `callback?` | undefined &#124; function                   |

**Returns:** _void_

---

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)›, `nextState`: Readonly‹object›, `nextContext`: any): _boolean_

_Inherited from [SubjectSelect](_subject_select_lib_subject_select_.subjectselect.md).[shouldComponentUpdate](_subject_select_lib_subject_select_.subjectselect.md#optional-shouldcomponentupdate)_

Defined in node_modules/@types/react/index.d.ts:629

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

| Name          | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| `nextProps`   | Readonly‹[FormProps](../interfaces/_form_lib_covid_form_.formprops.md)› |
| `nextState`   | Readonly‹object›                                                        |
| `nextContext` | any                                                                     |

**Returns:** _boolean_

---

### submit

▸ **submit**(`event`: SyntheticEvent): _Promise‹void›_

_Defined in [src/form/lib/covid-form.tsx:146](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/form/lib/covid-form.tsx#L146)_

**Parameters:**

| Name    | Type           |
| ------- | -------------- |
| `event` | SyntheticEvent |

**Returns:** _Promise‹void›_
