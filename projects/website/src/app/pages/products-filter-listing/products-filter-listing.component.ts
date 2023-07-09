import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-products-filter-listing',
  templateUrl: './products-filter-listing.component.html',
  styleUrls: ['./products-filter-listing.component.css'],
})
export class ProductsFilterListingComponent implements OnInit, OnDestroy {
  pageData?: any;
  page: number = 1;
  pageSize: number = 5;
  textSearch?: string;
  filterForm?: FormGroup;
  queryParams: any = {};

  categories?: any[];
  brands?: any[];
  labels?: Set<string> = new Set();

  constructor(
    private appService: AppService,
    private router: Router,
    private ui: UiService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.route.queryParams.subscribe((rs: any) => {
      if (rs['filterData']) this.queryParams = JSON.parse(rs['filterData']);
      this.page = +rs['page'] || 1;
      this.pageSize = +rs['pageSize'] || 5;

      if (rs['search']?.trim()?.length) this.queryParams['search'] = this.textSearch = rs['search']?.trim();

      if(rs?.category && rs.category?.length) this.queryParams.categories = [rs.category] || []
      if(rs?.brand && rs.brand?.length) this.queryParams.brands = [rs.brand] || []
      this.queryParams.page = this.page;
      this.queryParams.pageSize = this.pageSize;
      this.getProductList(this.queryParams);
    });

    forkJoin([this.appService.getCategories(), this.appService.getBrands({ status: true })]).subscribe((rs) => {
      if (rs[0]) this.categories = rs[0].data.docs;
      if (rs[1]) this.brands = rs[1].data.docs;
      if (!this.filterForm) this.formInit();
    });
  }

  formInit() {
    const getIsSelected = (ctrl: string, v: any) => {
      return this.queryParams && this.queryParams[ctrl]?.includes(v);
    };

    this.filterForm = this.fb.group({
      sliderPrice: [(this.queryParams && this.queryParams['price']?.from) || 10000],
      brands: this.fb.array(
        (this.brands || []).map((b: any) => {
          return this.fb.group({ key: [b.brandName], value: [b._id], selected: [getIsSelected('brands', b._id)] });
        })
      ),
      categories: this.fb.array(
        (this.categories || []).map((b: any) => {
          return this.fb.group({ key: [b.name], value: [b._id], selected: [getIsSelected('categories', b._id)] });
        })
      ),
      rating: this.fb.array([
        this.fb.group({ key: ['4'], value: [4], selected: [getIsSelected('rating', 4)] }),
        this.fb.group({ key: ['3'], value: [3], selected: [getIsSelected('rating', 3)] }),
        this.fb.group({ key: ['2'], value: [2], selected: [getIsSelected('rating', 2)] }),
        this.fb.group({ key: ['1'], value: [1], selected: [getIsSelected('rating', 1)] }),
      ]),
    });
  }

  getProductList(queryParams: any) {
    this.pageData = null;
    this.appService.getProductsByCategory(queryParams).subscribe((res) => {
      this.pageData = res.data;
      if (!this.ui.isBrowser) setTimeout(() => window.scroll(0, 0), 100);
    });
  }

  getFormArr(control: string) {
    return this.filterForm?.get(control) as FormArray;
  }

  getFormSlugCtrl(control: string, index: number) {
    return this.getFormArr(control).controls[index] as FormGroup;
  }

  onChangeFilter(control: string, idx: number, label: any) {
    this.labels?.has(label) ? this.labels.delete(label) : this.labels?.add(label);
    let group = this.getFormSlugCtrl(control, idx);
    group.controls['selected'].patchValue(!group.controls['selected'].value);
    this.submitFilter(this.filterForm?.value);
  }

  submitFilter(formData: any) {
    setTimeout(() => {
      let filterData: any = {};

      for (let k in formData) {
        if (typeof formData[k] === 'number') {
          filterData['price'] = { from:0 , to: formData[k] };
        }
        if (typeof formData[k] === 'object') {
          filterData[k] = (formData[k] as any[]).filter((v) => v.selected).map((v: any, i) => v.value);
        }
      }

      this.router.navigate(['/products-listing'], {
        queryParams: { filterData: JSON.stringify(filterData), page: this.page, pageSize: this.pageSize, search: this.textSearch },
      });
    }, 200);
  }

  clearFilter() {
    this.labels?.clear();
    this.filterForm?.reset({ sliderPrice: 1, brands: [], categories: [], rating: [] });
    this.router.navigate(['/products-listing'], {
      queryParams: { page: this.page, pageSize: this.pageSize },
    });
  }

  ngOnDestroy(): void {}
}
