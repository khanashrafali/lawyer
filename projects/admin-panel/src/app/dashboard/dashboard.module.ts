import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterModule } from "@angular/router";
import { IncludesModule } from "../includes/includes.module";
import { DashboardService } from "./dashboard.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../services/auth.interceptor";
import { MaterialModule } from "../shared/material.module";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { InputErrorModule } from "../shared/input-error/input-error.module";

@NgModule({
  declarations: [DashboardComponent, WelcomeComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    IncludesModule,
    HttpClientModule,
    MaterialModule,
    InputErrorModule,
  ],
  providers: [
    DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class DashboardModule {}
