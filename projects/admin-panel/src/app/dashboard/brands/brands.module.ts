import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrandService } from './brand.service';
import { RatingModule } from 'ng-starrating';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../components/shared.module';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { ImageGuidelineModule } from '../../components/image-guideline/image-guideline.module';
import { UploadedImageModule } from '../../components/uploaded-image/uploaded-image.module';
import { AuthInterceptor } from '../../services/auth.interceptor';
import { InputErrorModule } from '../../shared/input-error/input-error.module';
import { MaterialModule } from '../../shared/material.module';
import { PagesizeDropdownModule } from '../../shared/pagesize-dropdown/pagesize-dropdown.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { SearchInputModule } from '../../shared/search-input/search-input.module';


@NgModule({
  declarations: [
    UpdateBrandComponent,
    BrandListComponent,
    AddBrandComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    PaginationModule,
    PagesizeDropdownModule,
    MaterialModule,
    SearchInputModule,
    UploadedImageModule,
    InputErrorModule,
    // AngularEditorModule,
    // PaymentStatusModule,
    NgSelectModule,
    RatingModule,
    ImageGuidelineModule
  ],
  providers: [
    BrandService,
    // CategoriesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: "LL",
        },
        display: {
          dateInput: "LL",
          dateA11yLabel: "LL",
          monthYearLabel: "MMM YYYY",
          monthYearA11yLabel: "MMMM YYYY",
        },
      },
    },
  ],
})
export class BrandsModule { }
