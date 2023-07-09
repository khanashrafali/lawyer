import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { AuthInterceptor } from "../../services/auth.interceptor";
import { InputErrorModule } from "../../shared/input-error/input-error.module";
import { MaterialModule } from "../../shared/material.module";
import { PagesizeDropdownModule } from "../../shared/pagesize-dropdown/pagesize-dropdown.module";
import { PaginationModule } from "../../shared/pagination/pagination.module";
import { SearchInputModule } from "../../shared/search-input/search-input.module";
import { SharedModule } from "../components/shared.module";
import { ListUserComponent } from "./list-user/list-user.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersService } from "./users.service";


@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    PaginationModule,
    PagesizeDropdownModule,
    SearchInputModule,
    InputErrorModule,
  ],
  providers: [
    UsersService,
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
export class UsersModule {}
