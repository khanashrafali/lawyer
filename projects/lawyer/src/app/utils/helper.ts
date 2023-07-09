import { FormArray, FormControl, FormGroup } from "@angular/forms";

export const chooseFile = (
  event: Event,
  controlName: string,
  form: FormGroup
) => {
  if (!event.target) {
    return;
  }

  const files = (event.target as unknown as HTMLInputElement).files;
  if (files && files.length) {
    const fileData = files[0];
    form.get(controlName)?.patchValue(fileData);
  }
};

export const chooseFiles = (
  event: Event,
  controlName: string,
  form: FormGroup
) => {
  const files = (event.target as unknown as HTMLInputElement).files;
  if (files && files.length) {
    for (let i = 0; i < files.length; i++) {
      (form.get(controlName) as FormArray)?.push(new FormControl(files[i]));
    }
  }
};

