import { ValidatorFn, AbstractControl } from '@angular/forms';

const errorMessages = {
    required: () => 'This field is required.',
    minlength: error => `Must be at least ${error.requiredLength} characters long.`,
    maxlength: error => `Must be at no more than ${error.requiredLength} characters long.`,
    matDatepickerParse: error => error.text ? `${error.text} is not a valid date.` : `${error.toString()}`,
    matDatepickerMin: () => `Invalid date.`,
    matDatepickerMax: () => 'Invalid date.',
    notApplicationUser: () => 'This name is invalid.',
    invalidNumber: () => 'Field should be integer type.',
    email: () => 'Please enter valid email.',
    validEmail: () => 'Please enter valid email.',
    duplicateFormTypeCode: () => 'Form Type already exists.',
    trimError: () => 'Control has leading or trailing whitespace',
    decimalError: () => 'Please enter valid number(XXX.XX)',
    duplicateAssetVariable: () => 'This Input value has already been added, please select a different value.',
    max: error => `Value can't be  greater than ${error.max} .`,
    min: error => `Value can't be  smaller than ${error.min} .`


};

function getDynamicErrorMessage(control: AbstractControl) {
    if (!control) {
        throw new Error('Control is required.');
    }

    const errorKey = Object.keys(control.errors)[0];

    const error = control.errors[errorKey];

    const message = `${errorMessages[errorKey](error)}`;

    return message;
}
// need to implement future
function getStaticErrorMessage(control: AbstractControl) {

    if (!control) {
        throw new Error('Control is required.');
    }

    const errorKey = Object.keys(control.errors)[0];

    const error = control.errors[errorKey];

    const message = `${errorMessages[errorKey](error)}`;

    return message;
}

// need to implement future
function getDynamicMultipleErrorMessage(control: AbstractControl) {

    if (!control) {
        throw new Error('Control is required.');
    }

    const errormessage = [];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < Object.keys(control.errors).length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        const errorKey = Object.keys(control.errors)[i];

        const error = control.errors[errorKey];

        const message = `${errorMessages[errorKey](error)}`;
        errormessage.push(message);
    }

    return errormessage;
}
function ValidatorAcceptOnlyInteger(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const val = control.value;

        if (val === null || val === '') { return null; }

        if (!val.toString().match(/^[0-9]*$/)) { return { invalidNumber: true }; }

        return null;

    };
}
function ValidatorAcceptOnlyNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const val = control.value;

        if (val === null || val === '') { return null; }

        if (!val.toString().match(/^[0-9]\d*(\.\d{1,2})?$/)) { return { decimalError: true }; }

        return null;

    };
}
function EmailValidation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const val = control.value;
        if (val === null || val === '') { return null; }
        if (val.startsWith(' ')) {
            return {
                trimError: true
            };
        }
        if (val.endsWith(' ')) {
            return {
                trimError: true
            };
        }
        const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
        if (!val.match(emailRegEx)) {
            return {
                validEmail: true
            };
        }
        return null;


    };
}
function TrimValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const val = control.value;
        if (val === null || val === '') { return null; }
        if (val.startsWith(' ')) {
            return {
                trimError: 'true'
            };
        }
        if (val.endsWith(' ')) {
            return {
                trimError: true
            };
        }

        return null;
    };

}
export type Result<T> =
    | { ok: true, value: T }
    | { ok: false, message: string }

export {
    getDynamicMultipleErrorMessage, ValidatorAcceptOnlyInteger,
    getDynamicErrorMessage, getStaticErrorMessage, errorMessages, EmailValidation, TrimValidator, ValidatorAcceptOnlyNumber
};
