import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { checkMobileNumber } from '../../shared/validator';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.authService.getMe().subscribe((rs) => {
      this.formInit(rs.data);
    if (!this.uiService.isBrowser) return;

      setTimeout(() => {
        window.scroll(0,0)
      }, 100);
    });
  }

  formInit(data: any) {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      mobileNumber: [null, checkMobileNumber],
    });

    this.form.patchValue(data);
  }

  submitForm(formData: any) {
    if (this.form.invalid) return this.form.markAllAsTouched();
    this.authService.updateProfile(formData).subscribe({
      next: (rs) => {
        this.uiService.openSnackbar('Profile Updated Successfully!');
      },
      error: (err) => {
        this.uiService.openSnackbar(
          "Something wen't wrong, Please try again later."
        );
      },
    });
  }

  logout() {
    this.authService.logout();
  }
}
