import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { AuthData, AdminModule, userRole } from '../../../models/apis.models';
import { UiService } from '../../../services/ui.service';

import { BrandService } from '../brand.service';
import { Brand } from '../model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
})
export class BrandListComponent implements OnInit {
  dataIsLoaded = false;
  selectedCategory!: Brand;
  page: number = 1;
  pageSize: number = 10;
  pageData: { count: number; docs: Brand[] } = { count: 0, docs: [] };
  textSearch!: string;
  selectedCat: any = null;
  selectedsubCat: any = null;
  showFilter: boolean = false;
  isFilterApplied: boolean = false;
  filterForm!: FormGroup;

  authData: AuthData | null = null;
  adminModules = AdminModule;

  constructor(
    private brandService: BrandService,
    private uiService: UiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authData = this.authService.getAuthData;
    this.route.queryParams.subscribe((rs: any) => {
      this.dataIsLoaded = false;
      this.page = +rs.page ? +rs.page : this.page;
      this.pageSize = +rs.pageSize ? +rs.pageSize : this.pageSize;
      this.initForm();
      this.fetchBrands();
    });
  }

  haveAccess(action: string, authData: AuthData | null) {
    return (authData?.adminRole?.permissions || [])?.findIndex(
      (rd) => rd.module == AdminModule.CATEGORY && (rd as any)[action]
    ) >= 0 || authData?.role == userRole.SUPER_ADMIN
      ? true
      : false;
  }

  initForm() {
    let filterData = localStorage.getItem('brandFilter');
    let controls = { status: [true], createdAt: [null] };

    if (filterData) {
      this.isFilterApplied = true;
      let formToJson = JSON.parse(filterData);
      controls.status = [formToJson.status];
      controls.createdAt = [formToJson.createdAt];
    }

    this.filterForm = this.fb.group(controls);
  }

  applyFilter(formData: any) {
    this.isFilterApplied = true;
    this.page = 1;
    localStorage.setItem('brandFilter', JSON.stringify(formData));
    this.fetchBrands();
  }

  clearFilter() {
    this.filterForm.reset({ status: true });
    this.isFilterApplied = false;
    localStorage.removeItem('brandFilter');
    this.fetchBrands();
  }

  onChangePageSize(event: any) {
    this.dataIsLoaded = false;
    this.pageSize = +event.target.value;
    this.fetchBrands();
  }

  fetchBrands() {
    if (!this.haveAccess('read', this.authData)) return;

    this.dataIsLoaded = false;
    this.pageData.count = 0;
    this.pageData.docs = [];
    this.brandService
      .getBrands({
        textSearch: this.textSearch,
        page: this.page,
        pageSize: this.pageSize,
        isFilterApplied: this.isFilterApplied,
        filterData: this.filterForm?.value,
      })
      .subscribe(
        (rs) => {
          this.pageData = rs.data;
          this.dataIsLoaded = true;
        },
        (err) => {
          this.dataIsLoaded = false;
        }
      );
  }

  onSearch(text: string) {
    this.textSearch = text;
    this.page = 1;
    this.fetchBrands();
  }

  updateBrandStatus(brandId: string, status: boolean) {
    this.brandService.updateBrandStatus(brandId, status).subscribe((rs) => {
      // this.dataIsLoaded = false;
      // this.fetchBrands();
      this.pageData.docs = this.pageData.docs.map((e) => {
        if (e._id == brandId) e.isApproved = status;
        return e;
      });
      this.uiService.openSnackbar(rs.message);
    });
  }

  getCategoriesAsText(brand: Brand) {
    return brand.categories.map((b) => b.name).join(', ');
  }

  onDelete(id: string, isCollection: boolean) {
    this.uiService
      .openModal('#delete_modal')
      .afterClose.subscribe((rs: boolean) => {
        if (rs) {
          this.dataIsLoaded = false;

          this.brandService.deleteBrand(id).subscribe(
            (rs) => {
              this.fetchBrands();
              this.uiService.openSnackbar(rs.message);
              this.uiService.closeModal('#delete_modal', true);
            },
            (err) => {
              this.dataIsLoaded = true;
            }
          );
        }
      });
  }
}
