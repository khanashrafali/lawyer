import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { UiService } from "../../services/ui.service";
import { REGX } from "../../utils/regex";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  REGX = REGX;
  form!: FormGroup;
  isFormSubmitted: boolean = false;
  subscription!: Subscription;
  oldPassIsHide: boolean = true;
  newPassIsHide: boolean = true;
  cPassIsHide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService,
    private uiService: UiService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      oldPassword: [null, [Validators.required, Validators.pattern(REGX.Password)]],
      newPassword: [null, [Validators.required, Validators.pattern(REGX.Password)]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  submitForm(formData: any) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (formData.confirmPassword != formData.newPassword) {
      this.uiService.openSnackbar("New Password and Confirm Password must be same");
      return;
    }

    this.isFormSubmitted = true;

    this.subscription = this.dashboardService.changePassword(formData).subscribe(
      (rs) => {
        this.uiService.openSnackbar(rs.message);
        this.isFormSubmitted = false;
        this.location.back();
      },
      (err) => {
        this.isFormSubmitted = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
