import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from '../../../models/apis.models';
import { UiService } from '../../../services/ui.service';
import { IMAGE_MIME_TYPES, IMAGE_ERROR_MSG } from '../../../utils/data';
import { chooseFile } from '../../../utils/helper';
import { BrandService } from '../brand.service';
import { Brand } from '../model';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
})
export class UpdateBrandComponent implements OnInit {
  isLoading: boolean = true;
  isFormSubmitted: boolean = false;
  form!: FormGroup;
  subscription!: Subscription;
  imageSrc?: any;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private uiService: UiService,
    private brandService: BrandService,
    public location: Location,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getBrands();
    this.route.paramMap.subscribe((param) => {
      let id = param.get('brandId');
      if (id)
        this.brandService.getBrand(id).subscribe({
          next: (rs) => {
            this.imageSrc = rs.data.image.sm;
            this.initForm(rs.data);
          },
        });
    });
  }

  initForm(brand: Brand) {
    this.form = this.fb.group({
      _id: [brand._id],
      image: [null],
      brandName: [brand.brandName],
      // categories: [brand.categories.map((c) => c._id)],
      categories: [[]],
      isApproved: [brand.isApproved],
    });
    this.isLoading = false;
  }

  // getBrands() {
  //   this.categoryService
  //     .fetchCategories()
  //     .subscribe((rs) => (this.categories = rs.data.docs));
  // }

  removebrandLogo(control: string, isChart: boolean) {
    isChart ? (this.imageSrc = null) : (this.imageSrc = null);
    this.form.get(control)?.patchValue(null);
  }

  chooseFile(event: Event, controlName: string, isChart: boolean) {
    const fileInfo = (event.target as HTMLInputElement)?.files;
    if (fileInfo?.length) {
      if (!IMAGE_MIME_TYPES.includes(fileInfo[0].type)) {
        this.uiService.openSnackbar(IMAGE_ERROR_MSG);
        return;
      }

      for (let i = 0; i < fileInfo.length; i++) {
        const fr = new FileReader();
        fr.onload = (e) => {
          isChart ? (this.imageSrc = fr.result) : (this.imageSrc = fr.result);
        };

        fr.readAsDataURL(fileInfo[i]);
      }

      chooseFile(event, controlName, this.form);
    }
  }

  onFormSubmit(formData: any) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isFormSubmitted = true;

    this.brandService
      .updateBrand(formData._id, formData)
      .then((rs: any) => {
        this.uiService.openSnackbar(rs.message);
        this.isFormSubmitted = false;
        this.location.back();
      })
      .catch((err) => {
        this.isFormSubmitted = false;
      });
  }

  public onSelectAll() {
    const selected = this.categories.map((item) => item._id) || [];
    this.form.get('categories')?.patchValue(selected);
  }

  public onClearAll() {
    this.form.get('categories')?.patchValue([]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
