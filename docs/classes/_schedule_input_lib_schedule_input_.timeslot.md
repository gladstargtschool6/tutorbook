[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["schedule-input/lib/schedule-input"](../modules/_schedule_input_lib_schedule_input_.md) › [Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)

# Class: Timeslot

Class that represents a time opening or slot where tutoring can take place
(or where tutoring is taking place in the case of a booking). This provides
some useful methods for comparison and a better `toString` representation
than `[Object object]`.

## Hierarchy

- **Timeslot**

## Implements

- [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md)

## Index

### Constructors

- [constructor](_schedule_input_lib_schedule_input_.timeslot.md#constructor)

### Properties

- [from](_schedule_input_lib_schedule_input_.timeslot.md#from)
- [to](_schedule_input_lib_schedule_input_.timeslot.md#to)

### Methods

- [equalTo](_schedule_input_lib_schedule_input_.timeslot.md#equalto)
- [toString](_schedule_input_lib_schedule_input_.timeslot.md#tostring)

## Constructors

### constructor

\+ **new Timeslot**(`from`: Date, `to`: Date): _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:80](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L80)_

Constructor that takes advantage of Typescript's shorthand assignment.

**`see`** [https://bit.ly/2XjNmB5](https://bit.ly/2XjNmB5)

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `from` | Date |
| `to`   | Date |

**Returns:** _[Timeslot](_schedule_input_lib_schedule_input_.timeslot.md)_

## Properties

### from

• **from**: _Date_

_Implementation of [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md).[from](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md#from)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:85](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L85)_

---

### to

• **to**: _Date_

_Implementation of [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md).[to](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md#to)_

_Defined in [src/schedule-input/lib/schedule-input.tsx:85](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L85)_

## Methods

### equalTo

▸ **equalTo**(`timeslot`: [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md)): _boolean_

_Defined in [src/schedule-input/lib/schedule-input.tsx:114](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L114)_

**Parameters:**

| Name       | Type                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------- |
| `timeslot` | [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md) |

**Returns:** _boolean_

---

### toString

▸ **toString**(`includeDay`: boolean): _string_

_Defined in [src/schedule-input/lib/schedule-input.tsx:94](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L94)_

Puts the time slot into string form.

**`example`**
// Where `dateAtTwoPM` and `dateAtThreePM` are on Mondays.
const timeslot = new Timeslot(dateAtTwoPM, dateAtThreePM);
assert(timeslot.toString() === 'Mondays from 2pm to 3pm');

**Parameters:**

| Name         | Type    | Default |
| ------------ | ------- | ------- |
| `includeDay` | boolean | false   |

**Returns:** _string_
