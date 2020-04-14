[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["schedule-input/lib/schedule-input"](../modules/_schedule_input_lib_schedule_input_.md) › [Availability](_schedule_input_lib_schedule_input_.availability.md)

# Class: Availability

Class that contains a bunch of time slots or openings that represents a
user's availability (inverse of their schedule, which contains a bunch of
booked time slots or appointments). This provides some useful methods for
finding time slots and a better `toString` representation than
`[Object object]`.

## Hierarchy

- [Array](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#array)‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›

  ↳ **Availability**

## Implements

- [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)

## Indexable

- \[ **n**: _number_\]: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)

Class that contains a bunch of time slots or openings that represents a
user's availability (inverse of their schedule, which contains a bunch of
booked time slots or appointments). This provides some useful methods for
finding time slots and a better `toString` representation than
`[Object object]`.

## Index

### Properties

- [length](_schedule_input_lib_schedule_input_.availability.md#length)
- [Array](_schedule_input_lib_schedule_input_.availability.md#static-array)

### Methods

- [[Symbol.iterator]](_schedule_input_lib_schedule_input_.availability.md#[symbol.iterator])
- [[Symbol.unscopables]](_schedule_input_lib_schedule_input_.availability.md#[symbol.unscopables])
- [concat](_schedule_input_lib_schedule_input_.availability.md#concat)
- [copyWithin](_schedule_input_lib_schedule_input_.availability.md#copywithin)
- [entries](_schedule_input_lib_schedule_input_.availability.md#entries)
- [every](_schedule_input_lib_schedule_input_.availability.md#every)
- [fill](_schedule_input_lib_schedule_input_.availability.md#fill)
- [filter](_schedule_input_lib_schedule_input_.availability.md#filter)
- [find](_schedule_input_lib_schedule_input_.availability.md#find)
- [findIndex](_schedule_input_lib_schedule_input_.availability.md#findindex)
- [flat](_schedule_input_lib_schedule_input_.availability.md#flat)
- [flatMap](_schedule_input_lib_schedule_input_.availability.md#flatmap)
- [forEach](_schedule_input_lib_schedule_input_.availability.md#foreach)
- [hasTimeslot](_schedule_input_lib_schedule_input_.availability.md#hastimeslot)
- [includes](_schedule_input_lib_schedule_input_.availability.md#includes)
- [indexOf](_schedule_input_lib_schedule_input_.availability.md#indexof)
- [join](_schedule_input_lib_schedule_input_.availability.md#join)
- [keys](_schedule_input_lib_schedule_input_.availability.md#keys)
- [lastIndexOf](_schedule_input_lib_schedule_input_.availability.md#lastindexof)
- [map](_schedule_input_lib_schedule_input_.availability.md#map)
- [pop](_schedule_input_lib_schedule_input_.availability.md#pop)
- [push](_schedule_input_lib_schedule_input_.availability.md#push)
- [reduce](_schedule_input_lib_schedule_input_.availability.md#reduce)
- [reduceRight](_schedule_input_lib_schedule_input_.availability.md#reduceright)
- [reverse](_schedule_input_lib_schedule_input_.availability.md#reverse)
- [shift](_schedule_input_lib_schedule_input_.availability.md#shift)
- [slice](_schedule_input_lib_schedule_input_.availability.md#slice)
- [some](_schedule_input_lib_schedule_input_.availability.md#some)
- [sort](_schedule_input_lib_schedule_input_.availability.md#sort)
- [splice](_schedule_input_lib_schedule_input_.availability.md#splice)
- [toLocaleString](_schedule_input_lib_schedule_input_.availability.md#tolocalestring)
- [toString](_schedule_input_lib_schedule_input_.availability.md#tostring)
- [unshift](_schedule_input_lib_schedule_input_.availability.md#unshift)
- [values](_schedule_input_lib_schedule_input_.availability.md#values)

## Properties

### length

• **length**: _number_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[length](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#length)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[length](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#length)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1215

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

---

### `Static` Array

▪ **Array**: _ArrayConstructor_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1385

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): _IterableIterator‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[[Symbol.iterator]](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#[symbol.iterator])_

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

Iterator

**Returns:** _IterableIterator‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›_

---

### [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): _object_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[[Symbol.unscopables]](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#[symbol.unscopables])_

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** _object_

- **copyWithin**: _boolean_

- **entries**: _boolean_

- **fill**: _boolean_

- **find**: _boolean_

- **findIndex**: _boolean_

- **keys**: _boolean_

- **values**: _boolean_

---

### concat

▸ **concat**(...`items`: ConcatArray‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[concat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#concat)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1237

Combines two or more arrays.

**Parameters:**

| Name       | Type                                                                       | Description                                   |
| ---------- | -------------------------------------------------------------------------- | --------------------------------------------- |
| `...items` | ConcatArray‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›[] | Additional items to add to the end of array1. |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

▸ **concat**(...`items`: T | ConcatArray‹T›[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[concat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#concat)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1242

Combines two or more arrays.

**Parameters:**

| Name       | Type                      | Description                                   |
| ---------- | ------------------------- | --------------------------------------------- |
| `...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1. |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

---

### copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): _this_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[copyWithin](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#copywithin)_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:64

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

| Name     | Type                    | Description                                                                                           |
| -------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `target` | number                  | If target is negative, it is treated as length+target where length is the length of the array.        |
| `start`  | number                  | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?`   | undefined &#124; number | If not specified, length of the this object is used as its default value.                             |

**Returns:** _this_

---

### entries

▸ **entries**(): _IterableIterator‹[number, [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)]›_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[entries](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#entries)_

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

Returns an iterable of key, value pairs for every entry in the array

**Returns:** _IterableIterator‹[number, [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)]›_

---

### every

▸ **every**(`callbackfn`: function, `thisArg?`: any): _boolean_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[every](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#every)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1310

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. The every method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value false, or until the end of the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _unknown_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** _boolean_

---

### fill

▸ **fill**(`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `start?`: undefined | number, `end?`: undefined | number): _this_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[fill](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#fill)_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name     | Type                                                        | Description                                                                                                                       |
| -------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `value`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | value to fill array section with                                                                                                  |
| `start?` | undefined &#124; number                                     | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?`   | undefined &#124; number                                     | index to stop filling the array at. If end is negative, it is treated as length+end.                                              |

**Returns:** _this_

---

### filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): _S[]_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[filter](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#filter)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1337

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _value is S_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** _S[]_

▸ **filter**(`callbackfn`: function, `thisArg?`: any): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[filter](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#filter)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1343

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _unknown_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

---

### find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): _S | undefined_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[find](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#find)_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

▪ **predicate**: _function_

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `obj`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _value is S_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `this`  | void                                                          |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `obj`   | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** _S | undefined_

▸ **find**(`predicate`: function, `thisArg?`: any): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[find](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#find)_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: _function_

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `obj`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _unknown_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `obj`   | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

---

### findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): _number_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[findIndex](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#findindex)_

Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: _function_

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `obj`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _unknown_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `obj`   | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** _number_

---

### flat

▸ **flat**<**U**>(`this`: U[][][][][][][][], `depth`: 7): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:158

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type              | Description                 |
| ------- | ----------------- | --------------------------- |
| `this`  | U[][][][][][][][] | -                           |
| `depth` | 7                 | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][][][][][][], `depth`: 6): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:166

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type            | Description                 |
| ------- | --------------- | --------------------------- |
| `this`  | U[][][][][][][] | -                           |
| `depth` | 6               | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][][][][][], `depth`: 5): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:174

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type          | Description                 |
| ------- | ------------- | --------------------------- |
| `this`  | U[][][][][][] | -                           |
| `depth` | 5             | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][][][][], `depth`: 4): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:182

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type        | Description                 |
| ------- | ----------- | --------------------------- |
| `this`  | U[][][][][] | -                           |
| `depth` | 4           | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][][][], `depth`: 3): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:190

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type      | Description                 |
| ------- | --------- | --------------------------- |
| `this`  | U[][][][] | -                           |
| `depth` | 3         | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][][], `depth`: 2): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:198

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type    | Description                 |
| ------- | ------- | --------------------------- |
| `this`  | U[][][] | -                           |
| `depth` | 2       | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[][], `depth?`: undefined | 1): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:206

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name     | Type               | Description                 |
| -------- | ------------------ | --------------------------- |
| `this`   | U[][]              | -                           |
| `depth?` | undefined &#124; 1 | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`this`: U[], `depth`: 0): _U[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:214

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

| Name    | Type | Description                 |
| ------- | ---- | --------------------------- |
| `this`  | U[]  | -                           |
| `depth` | 0    | The maximum recursion depth |

**Returns:** _U[]_

▸ **flat**<**U**>(`depth?`: undefined | number): _any[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flat](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flat)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:222

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth. If no depth is provided, flat method defaults to the depth of 1.

**Type parameters:**

▪ **U**

**Parameters:**

| Name     | Type                    | Description                 |
| -------- | ----------------------- | --------------------------- |
| `depth?` | undefined &#124; number | The maximum recursion depth |

**Returns:** _any[]_

---

### flatMap

▸ **flatMap**<**U**, **This**>(`callback`: function, `thisArg?`: This): _U[]_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[flatMap](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#flatmap)_

Defined in node_modules/typescript/lib/lib.es2019.array.d.ts:147

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

**Type parameters:**

▪ **U**

▪ **This**

**Parameters:**

▪ **callback**: _function_

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

▸ (`this`: This, `value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _U | ReadonlyArray‹U›_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `this`  | This                                                          |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _This_

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

**Returns:** _U[]_

---

### forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): _void_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[forEach](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#foreach)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1325

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _void_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** _void_

---

### hasTimeslot

▸ **hasTimeslot**(`timeslot`: [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md)): _boolean_

_Defined in [src/schedule-input/lib/schedule-input.tsx:136](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L136)_

**Parameters:**

| Name       | Type                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------- |
| `timeslot` | [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md) |

**Returns:** _boolean_

---

### includes

▸ **includes**(`searchElement`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `fromIndex?`: undefined | number): _boolean_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[includes](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#includes)_

Defined in node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name            | Type                                                        | Description                                                               |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| `searchElement` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | The element to search for.                                                |
| `fromIndex?`    | undefined &#124; number                                     | The position in this array at which to begin searching for searchElement. |

**Returns:** _boolean_

---

### indexOf

▸ **indexOf**(`searchElement`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `fromIndex?`: undefined | number): _number_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[indexOf](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#indexof)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1295

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name            | Type                                                        | Description                                                                                          |
| --------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `searchElement` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | The value to locate in the array.                                                                    |
| `fromIndex?`    | undefined &#124; number                                     | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** _number_

---

### join

▸ **join**(`separator?`: undefined | string): _string_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[join](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#join)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1247

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

| Name         | Type                    | Description                                                                                                                                         |
| ------------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** _string_

---

### keys

▸ **keys**(): _IterableIterator‹number›_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[keys](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#keys)_

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

Returns an iterable of keys in the array

**Returns:** _IterableIterator‹number›_

---

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `fromIndex?`: undefined | number): _number_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[lastIndexOf](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#lastindexof)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1301

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Name            | Type                                                        | Description                                                                                                              |
| --------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `searchElement` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | The value to locate in the array.                                                                                        |
| `fromIndex?`    | undefined &#124; number                                     | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** _number_

---

### map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): _U[]_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[map](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#map)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1331

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _U_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** _U[]_

---

### pop

▸ **pop**(): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[pop](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#pop)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1227

Removes the last element from an array and returns it.

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

---

### push

▸ **push**(...`items`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _number_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[push](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#push)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1232

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Name       | Type                                                          | Description                |
| ---------- | ------------------------------------------------------------- | -------------------------- |
| `...items` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] | New elements of the Array. |

**Returns:** _number_

---

### reduce

▸ **reduce**(`callbackfn`: function): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduce](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduce)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1349

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

▸ **reduce**(`callbackfn`: function, `initialValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduce](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduce)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1350

**Parameters:**

▪ **callbackfn**: _function_

▸ (`previousValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪ **initialValue**: _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): _U_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduce](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduce)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1356

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _U_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | U                                                             |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪ **initialValue**: _U_

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** _U_

---

### reduceRight

▸ **reduceRight**(`callbackfn`: function): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduceRight](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduceright)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1362

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduceRight](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduceright)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1363

**Parameters:**

▪ **callbackfn**: _function_

▸ (`previousValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪ **initialValue**: _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): _U_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reduceRight](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reduceright)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1369

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `currentIndex`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _U_

**Parameters:**

| Name            | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `previousValue` | U                                                             |
| `currentValue`  | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `currentIndex`  | number                                                        |
| `array`         | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪ **initialValue**: _U_

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** _U_

---

### reverse

▸ **reverse**(): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[reverse](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#reverse)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1251

Reverses the elements in an Array.

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

---

### shift

▸ **shift**(): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[shift](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#shift)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1255

Removes the first element from an array and returns it.

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md) | undefined_

---

### slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[slice](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#slice)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1261

Returns a section of an array.

**Parameters:**

| Name     | Type                    | Description                                                                                         |
| -------- | ----------------------- | --------------------------------------------------------------------------------------------------- |
| `start?` | undefined &#124; number | The beginning of the specified portion of the array.                                                |
| `end?`   | undefined &#124; number | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

---

### some

▸ **some**(`callbackfn`: function, `thisArg?`: any): _boolean_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[some](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#some)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1319

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: _function_

A function that accepts up to three arguments. The some method calls
the callbackfn function for each element in the array until the callbackfn returns a value
which is coercible to the Boolean value true, or until the end of the array.

▸ (`value`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md), `index`: number, `array`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _unknown_

**Parameters:**

| Name    | Type                                                          |
| ------- | ------------------------------------------------------------- |
| `value` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)   |
| `index` | number                                                        |
| `array` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] |

▪`Optional` **thisArg**: _any_

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

**Returns:** _boolean_

---

### sort

▸ **sort**(`compareFn?`: undefined | function): _this_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[sort](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#sort)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1271

Sorts an array.

**Parameters:**

| Name         | Type                      | Description                                                                                                                                                                                                                                                                                                           |
| ------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compareFn?` | undefined &#124; function | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. `ts [11,2,22,1].sort((a, b) => a - b)` |

**Returns:** _this_

---

### splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[splice](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#splice)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1277

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name           | Type                    | Description                                                                 |
| -------------- | ----------------------- | --------------------------------------------------------------------------- |
| `start`        | number                  | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | undefined &#124; number | The number of elements to remove.                                           |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[splice](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#splice)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1284

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name          | Type                                                          | Description                                                                 |
| ------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `start`       | number                                                        | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | number                                                        | The number of elements to remove.                                           |
| `...items`    | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] | Elements to insert into the array in place of the deleted elements.         |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]_

---

### toLocaleString

▸ **toLocaleString**(): _string_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[toLocaleString](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#tolocalestring)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1223

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** _string_

---

### toString

▸ **toString**(): _string_

_Overrides void_

_Defined in [src/schedule-input/lib/schedule-input.tsx:130](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L130)_

**Returns:** _string_

---

### unshift

▸ **unshift**(...`items`: [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[]): _number_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[unshift](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#unshift)_

Defined in node_modules/typescript/lib/lib.es5.d.ts:1289

Inserts new elements at the start of an array.

**Parameters:**

| Name       | Type                                                          | Description                                   |
| ---------- | ------------------------------------------------------------- | --------------------------------------------- |
| `...items` | [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)[] | Elements to insert at the start of the Array. |

**Returns:** _number_

---

### values

▸ **values**(): _IterableIterator‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›_

_Implementation of [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)_

_Inherited from [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md).[values](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md#values)_

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

Returns an iterable of values in the array

**Returns:** _IterableIterator‹[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)›_
