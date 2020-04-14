[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["schedule-input/lib/schedule-input"](../modules/_schedule_input_lib_schedule_input_.md) › [TimeslotInterface](_schedule_input_lib_schedule_input_.timeslotinterface.md)

# Interface: TimeslotInterface

Interface that represents an availability time opening or slot. Note that
right now, we just assume that these are recurring weekly.

## Hierarchy

- **TimeslotInterface**

## Implemented by

- [Timeslot](../classes/_schedule_input_lib_schedule_input_.timeslot.md)

## Index

### Properties

- [from](_schedule_input_lib_schedule_input_.timeslotinterface.md#from)
- [recurrance](_schedule_input_lib_schedule_input_.timeslotinterface.md#optional-recurrance)
- [to](_schedule_input_lib_schedule_input_.timeslotinterface.md#to)
- [toString](_schedule_input_lib_schedule_input_.timeslotinterface.md#tostring)

## Properties

### from

• **from**: _Date_

_Defined in [src/schedule-input/lib/schedule-input.tsx:41](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L41)_

---

### `Optional` recurrance

• **recurrance**? : _"weekly" | "daily"_

_Defined in [src/schedule-input/lib/schedule-input.tsx:43](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L43)_

---

### to

• **to**: _Date_

_Defined in [src/schedule-input/lib/schedule-input.tsx:42](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L42)_

---

### toString

• **toString**: _function_

_Defined in [src/schedule-input/lib/schedule-input.tsx:44](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L44)_

#### Type declaration:

▸ (): _string_
