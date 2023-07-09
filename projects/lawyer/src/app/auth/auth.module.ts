import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../shared/material.module";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { RouterModule } from "@angular/router";
import { InputErrorModule } from "../shared/input-error/input-error.module";

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    InputErrorModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
