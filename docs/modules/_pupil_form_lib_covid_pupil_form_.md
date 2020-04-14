[COVID Tutoring Initiative Docs](../README.md) › [Globals](../globals.md) › ["pupil-form/lib/covid-pupil-form"](_pupil_form_lib_covid_pupil_form_.md)

# Module: "pupil-form/lib/covid-pupil-form"

## Index

### Variables

- [GRADES](_pupil_form_lib_covid_pupil_form_.md#const-grades)

### Functions

- [PupilForm](_pupil_form_lib_covid_pupil_form_.md#pupilform)

## Variables

### `Const` GRADES

• **GRADES**: _Readonly‹string[]›_ = [
'Senior',
'Junior',
'Sophomore',
'Freshman',
'8th Grade',
'7th Grade',
'6th Grade',
'5th Grade',
'4th Grade',
'3rd Grade',
'2nd Grade',
'1st Grade',
'Kindergarten',
]

_Defined in [src/pupil-form/lib/covid-pupil-form.tsx:6](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/pupil-form/lib/covid-pupil-form.tsx#L6)_

## Functions

### PupilForm

▸ **PupilForm**(): _Element‹›_

_Defined in [src/pupil-form/lib/covid-pupil-form.tsx:35](https://github.com/tutorbookapp/covid-tutoring/blob/7978780/src/pupil-form/lib/covid-pupil-form.tsx#L35)_

React component that collects the following information from pupils and
create their Firestore user document:

- Parent name
- Parent email
- Parent phone
- Name
- Email
- Subject (that they want a tutor for)
- Grade level
- Availability (when they want their tutoring appointment)
- Message

**Returns:** _Element‹›_
