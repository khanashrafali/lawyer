import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'projects/website/src/environments/environment';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ui: UiService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;

    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  submit(formData: any) {
    if (this.form.invalid) return this.form.markAllAsTouched();
    this.http
      .post(`${environment.apiUrl}/queries`, formData)
      .subscribe((rs: any) => {
        this.ui.openSnackbar(rs.message);
        this.form.reset();
        this.route.navigate(['/']);
      });
  }
}
