import validator from "validator";
import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";
import { REGX } from "./regex";

export const mobileIsValid = (control: AbstractControl): ValidationErrors | null => {
  let val = control.value;

  if (!val || !validator.isMobilePhone(val, "en-IN")) {
    return {
      mobileError: {
        msg: "Please enter valid mobile number",
      },
    };
  }

  return null;
};

export const uriIsValid = (control: AbstractControl): ValidationErrors | null => {
  let val = control.value;

  if (!val || !validator.isURL(val)) {
    return {
      uriError: { msg: "Please enter valid URL" },
    };
  }

  return null;
};

export const notEmpty = (control: AbstractControl): ValidationErrors | null => {
  let val: string = control?.value;

  if (!val || val?.trim().length <= 0) {
    return {
      notEmpty: true,
    };
  }

  return null;
};

export const isValidAddress = (control: AbstractControl): ValidationErrors | null => {
  let val: string = control?.value;

  if (!val || val?.trim().length <= 0) {
    return {
      addressErr: {
        valid: false,
        msg: "Please enter valid address",
      },
    };
  }
  if (!validator.isAlphanumeric(val, "en-IN", { ignore: " " })) {
    return { addressErr: { valid: false, msg: "Address must contain house/road no." } };
  }

  return null;
};

export const isPanOrGST = (control: AbstractControl): ValidationErrors | null => {
  let val: string = control?.value;

  if (!val || val?.trim().length <= 0) return null;

  if (!validator.matches(val, REGX.GST) && !validator.matches(val, REGX.PAN)) {
    return {
      gstOrPanError: {
        valid: false,
        msg: "Please enter valid GST/Pan Number",
      },
    };
  }

  return null;
};

export const isPan = (control: AbstractControl): ValidationErrors | null => {
  let val: string = control?.value;

  if (!val || val?.trim().length <= 0) return null;

  if (!validator.matches(val, REGX.GST) && !validator.matches(val, REGX.PAN)) {
    return {
      panError: {
        valid: false,
        msg: "Please enter valid Pan Number",
      },
    };
  }

  return null;
};

export const isGST = (control: AbstractControl): ValidationErrors | null => {
  let val: string = control?.value;

  if (!val || val?.trim().length <= 0) return null;

  if (!validator.matches(val, REGX.GST) && !validator.matches(val, REGX.PAN)) {
    return {
      gstError: {
        valid: false,
        msg: "Please enter valid GST Number",
      },
    };
  }

  return null;
};
