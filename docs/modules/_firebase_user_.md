[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["firebase/user"](_firebase_user_.md)

# Module: "firebase/user"

## Index

### Interfaces

- [UserContextProps](../interfaces/_firebase_user_.usercontextprops.md)

### Variables

- [UserContext](_firebase_user_.md#const-usercontext)

### Functions

- [UserProvider](_firebase_user_.md#userprovider)
- [useUser](_firebase_user_.md#const-useuser)

## Variables

### `Const` UserContext

• **UserContext**: _Context‹[UserContextProps](../interfaces/_firebase_user_.usercontextprops.md)›_ = createContext({} as UserContextProps)

_Defined in [src/firebase/user.tsx:13](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/user.tsx#L13)_

## Functions

### UserProvider

▸ **UserProvider**(`__namedParameters`: object): _Element‹›_

_Defined in [src/firebase/user.tsx:18](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/user.tsx#L18)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name       | Type                         |
| ---------- | ---------------------------- |
| `children` | Element‹› &#124; Element‹›[] |

**Returns:** _Element‹›_

---

### `Const` useUser

▸ **useUser**(): _[UserContextProps](../interfaces/_firebase_user_.usercontextprops.md)_

_Defined in [src/firebase/user.tsx:16](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/user.tsx#L16)_

**Returns:** _[UserContextProps](../interfaces/_firebase_user_.usercontextprops.md)_
