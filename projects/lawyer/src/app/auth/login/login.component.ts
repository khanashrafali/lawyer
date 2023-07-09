import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UiService } from "../../services/ui.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  passIsHide: boolean = true;
  isFormSubmit: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onFormSubmit(formData: any) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isFormSubmit = true;

    this.authService.login(formData).subscribe(
      (rs) => {
        this.authService.saveAuthData(rs);
        this.router.navigate(["/"], { replaceUrl: true });
      },
      (err) => {
        this.uiService.openSnackbar(err.error.message);
        this.isFormSubmit = false;
      }
    );
  }
}
