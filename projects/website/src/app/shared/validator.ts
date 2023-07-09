import { AbstractControl, ValidationErrors } from '@angular/forms';
import validator from 'validator';

export const isValidMobileOrEmail = (
  control: AbstractControl
): ValidationErrors | null => {
  let val = control.value;

  if (
    !val ||
    (!validator.isMobilePhone(val, 'en-IN') && !validator.isEmail(val))
  ) {
    return {
      mobileOrEmailError: {
        msg: 'Please enter valid Mobile Number or Email Id.',
      },
    };
  }

  return null;
};

export const checkOTP = (control: AbstractControl): ValidationErrors | null => {
  let value = control.value;
  if (
    !value ||
    !validator.isNumeric(value) ||
    !validator.isLength(value, { min: 6, max: 6 })
  ) {
    return {
      invalidOtpError: {
        msg: 'Please enter 6 digit OTP.',
      },
    };
  }
  return null;
};

export const checkMobileNumber = (
  control: AbstractControl
): ValidationErrors | null => {
  let value = control.value;
  if (!value || !validator.isMobilePhone(value, 'en-IN')) {
    return {
      invalidMobileNumber: {
        msg: 'Please enter valid mobile Number.',
      },
    };
  }

  return null;
};

export const checkIsStr =
  (key: string) =>
  (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    if (!value || !validator.isAlpha(value, 'en-IN', { ignore: ' ' })) {
      return {
        invalidStr: {
          msg: `Please enter valid ${key}`,
        },
      };
    }
    return null;
  };

export const checkIsNumber =
  (key: string) =>
  (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    if (!value || !validator.isNumeric(value)) {
      return {
        invalidNumber: {
          msg: `Please enter valid ${key}`,
        },
      };
    }
    return null;
  };

export const checkIFSC = (
  control: AbstractControl
): ValidationErrors | null => {
  let value = control.value;
  if (!value || !validator.matches(value, /^([A-Za-z]{4}0[A-Za-z0-9]{6})$/)) {
    return {
      invalidIFSC: {
        msg: `Please enter valid IFSC code`,
      },
    };
  }
  return null;
};

export const checkZipCode = (
  control: AbstractControl
): ValidationErrors | null => {
  let value = control.value;
  if (!value || !validator.matches(value, /^[1-9][0-9]{5}$/)) {
    return {
      invalidZipCode: {
        msg: `Please enter valid Zipcode`,
      },
    };
  }
  return null;
};
