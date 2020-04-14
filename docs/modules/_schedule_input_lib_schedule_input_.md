[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["schedule-input/lib/schedule-input"](_schedule_input_lib_schedule_input_.md)

# Module: "schedule-input/lib/schedule-input"

## Index

### Classes

- [Availability](../classes/_schedule_input_lib_schedule_input_.availability.md)
- [ScheduleInput](../classes/_schedule_input_lib_schedule_input_.scheduleinput.md)
- [Timeslot](../classes/_schedule_input_lib_schedule_input_.timeslot.md)

### Interfaces

- [AvailabilityInterface](../interfaces/_schedule_input_lib_schedule_input_.availabilityinterface.md)
- [ScheduleInputState](../interfaces/_schedule_input_lib_schedule_input_.scheduleinputstate.md)
- [ScheduleInterface](../interfaces/_schedule_input_lib_schedule_input_.scheduleinterface.md)
- [TimeslotInterface](../interfaces/_schedule_input_lib_schedule_input_.timeslotinterface.md)
- [UniqueScheduleInputProps](../interfaces/_schedule_input_lib_schedule_input_.uniquescheduleinputprops.md)

### Type aliases

- [Day](_schedule_input_lib_schedule_input_.md#day)
- [ScheduleInputProps](_schedule_input_lib_schedule_input_.md#scheduleinputprops)

### Variables

- [DAYS](_schedule_input_lib_schedule_input_.md#const-days)

## Type aliases

### Day

Ƭ **Day**: _0 | 1 | 2 | 3 | 4 | 5 | 6_

_Defined in [src/schedule-input/lib/schedule-input.tsx:34](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L34)_

Number representing the day of the week. Follows the ECMAScript Date
convention where 0 denotes Sunday, 1 denotes Monday, etc.

**`see`** [https://mzl.la/34l2dN6](https://mzl.la/34l2dN6)

---

### ScheduleInputProps

Ƭ **ScheduleInputProps**: _[UniqueScheduleInputProps](../interfaces/_schedule_input_lib_schedule_input_.uniquescheduleinputprops.md) & TextFieldProps | object & ClassAttributes‹HTMLInputElement› & object_

_Defined in [src/schedule-input/lib/schedule-input.tsx:71](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L71)_

**`todo`** Look at these (and the other) intersection type definitions in detail.

**`see`** [https://bit.ly/2xaPeBH](https://bit.ly/2xaPeBH)

## Variables

### `Const` DAYS

• **DAYS**: _Readonly‹string[]›_ = [
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
]

_Defined in [src/schedule-input/lib/schedule-input.tsx:19](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/schedule-input/lib/schedule-input.tsx#L19)_
