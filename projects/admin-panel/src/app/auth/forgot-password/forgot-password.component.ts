import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UiService } from "../../services/ui.service";
import { REGX } from "../../utils/regex";
import { AuthService } from "../auth.service";

enum FormView {
  SEND_OTP = "SEND_OTP",
  VERIFY_OTP = "VERIFY_OTP",
  RESET_PASSWORD = "RESET_PASSWORD",
}

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  REGX = REGX;
  FormView = FormView;
  selectedForm: FormView = FormView.SEND_OTP;
  isSubmitSendOtpForm = false;
  sendOtpForm?: FormGroup;
  isSubmitVerifyOtpForm = false;
  verifyOtpForm?: FormGroup;
  isSubmitResetPasswordForm = false;
  resetPasswordForm?: FormGroup;
  passIsHide: boolean = true;
  cpassIsHide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uiService: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initSendOtpForm();
    this.route.queryParams.subscribe((rs:any) => {
      if (rs.view) {
        this.changeFormView(rs.view);
      }
    });
  }

  initSendOtpForm() {
    this.sendOtpForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  initVerifyOtpForm() {
    this.verifyOtpForm = this.fb.group({
      otp: [null, [Validators.required]],
    });
  }

  initResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      newPassword: [null, [Validators.required, Validators.pattern(REGX.Password)]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  changeFormView(view: FormView) {
    this.selectedForm = view;
    this.router.navigate([], { queryParams: { view: this.selectedForm } });
    if (this.selectedForm == FormView.SEND_OTP) {
      this.initSendOtpForm();
    } else if (this.selectedForm == FormView.VERIFY_OTP) {
      this.initVerifyOtpForm();
    } else {
      this.initResetPasswordForm();
    }
  }

  submitSendOtpForm(formData: any) {
    if (this.sendOtpForm?.invalid) {
      this.sendOtpForm.markAllAsTouched();
      return;
    }

    this.isSubmitSendOtpForm = true;
    this.authService.sendForgotPasswordOtp(formData).subscribe(
      (rs) => {
        this.isSubmitSendOtpForm = false;
        this.changeFormView(FormView.VERIFY_OTP);
        this.uiService.openSnackbar(rs.message);
      },
      (err) => {
        this.isSubmitSendOtpForm = false;
        let msg = err?.error?.message ?? "Something went wrong. Please try again later";
        this.uiService.openSnackbar(msg);
      }
    );
  }

  submitVerifyOtpForm(formData: any) {
    if (this.verifyOtpForm?.invalid) {
      this.verifyOtpForm.markAllAsTouched();
      return;
    }

    this.isSubmitVerifyOtpForm = true;
    this.authService.verifyForgotPasswordOtp(formData).subscribe(
      (rs) => {
        this.isSubmitVerifyOtpForm = false;
        this.authService.saveAuthData(rs);
        this.changeFormView(FormView.RESET_PASSWORD);
        this.uiService.openSnackbar(rs.message);
      },
      (err) => {
        this.isSubmitVerifyOtpForm = false;
        let msg = err?.error?.message ?? "Something went wrong. Please try again later";
        this.uiService.openSnackbar(msg);
      }
    );
  }

  submitResetPasswordForm(formData: any) {
    if (this.resetPasswordForm?.invalid) {
      this.resetPasswordForm.markAllAsTouched();
      return;
    }

    if (formData.newPassword != formData.confirmPassword) {
      this.uiService.openSnackbar("Password and Confirm Password are not same.");
      return;
    }

    this.isSubmitResetPasswordForm = true;
    this.authService.resetPassword(formData).subscribe(
      (rs) => {
        this.isSubmitResetPasswordForm = false;
        this.uiService.openSnackbar(rs.message);
        this.router.navigate(["/"], { replaceUrl: true });
      },
      (err) => {
        this.isSubmitResetPasswordForm = false;
        let msg = err?.error?.message ?? "Something went wrong. Please try again later";
        this.uiService.openSnackbar(msg);
      }
    );
  }
}
