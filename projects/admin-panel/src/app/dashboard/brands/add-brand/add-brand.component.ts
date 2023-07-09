import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../../../models/apis.models';
import { UiService } from '../../../services/ui.service';
import { IMAGE_MIME_TYPES, IMAGE_ERROR_MSG } from '../../../utils/data';
import { chooseFile } from '../../../utils/helper';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
})
export class AddBrandComponent implements OnInit {
  isFormSubmitted: boolean = false;
  form!: FormGroup;
  subscription!: Subscription;
  fromValue!: any;
  toValue!: any;
  categories: Category[] = [];
  imgSrc?: any;

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private brandService: BrandService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      image: [null],
      brandName: [null],
      categories: [[]],
      isApproved: [false],
    });
  }



  public onSelectAll() {
    const selected = this.categories.map((item) => item._id) || [];
    this.form.get('categories')?.patchValue(selected);
  }

  public onClearAll() {
    this.form.get('categories')?.patchValue([]);
  }

  removebrandLogo(control: string, isChart: boolean = false) {
    isChart ? (this.imgSrc = null) : (this.imgSrc = null);
    this.form.get(control)?.patchValue(null);
  }

  chooseFile(event: Event, controlName: string, isChart: boolean = false) {
    const fileInfo = (event.target as HTMLInputElement)?.files;
    if (!fileInfo?.length) return;

    if (!IMAGE_MIME_TYPES.includes(fileInfo[0].type))
      return this.uiService.openSnackbar(IMAGE_ERROR_MSG);

    for (let i = 0; i < fileInfo.length; i++) {
      const fr = new FileReader();
      fr.onload = (e) => {
        isChart ? (this.imgSrc = fr.result) : (this.imgSrc = fr.result);
      };

      fr.readAsDataURL(fileInfo[i]);
    }

    chooseFile(event, controlName, this.form);
  }

  onFormSubmit(formData: any) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isFormSubmitted = true;

    this.brandService
      .addBrand(formData)
      .then((res: any) => {
        this.uiService.openSnackbar(res.message);
        this.isFormSubmitted = false;
        this.location.back();
      })
      .catch((err) => {
        this.isFormSubmitted = false;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
