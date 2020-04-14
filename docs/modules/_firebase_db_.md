[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["firebase/db"](_firebase_db_.md)

# Module: "firebase/db"

## Index

### Variables

- [DBContext](_firebase_db_.md#const-dbcontext)

### Functions

- [DBProvider](_firebase_db_.md#dbprovider)
- [useDB](_firebase_db_.md#const-usedb)

## Variables

### `Const` DBContext

• **DBContext**: _Context‹DocumentReference‹object››_ = createContext(
firebase.firestore().collection('partitions').doc('default')
)

_Defined in [src/firebase/db.tsx:8](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/db.tsx#L8)_

## Functions

### DBProvider

▸ **DBProvider**(`__namedParameters`: object): _Element‹›_

_Defined in [src/firebase/db.tsx:14](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/db.tsx#L14)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name       | Type                         |
| ---------- | ---------------------------- |
| `children` | Element‹› &#124; Element‹›[] |

**Returns:** _Element‹›_

---

### `Const` useDB

▸ **useDB**(): _DocumentReference‹object›_

_Defined in [src/firebase/db.tsx:12](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/firebase/db.tsx#L12)_

**Returns:** _DocumentReference‹object›_
