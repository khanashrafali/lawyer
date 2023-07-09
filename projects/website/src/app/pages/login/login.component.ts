import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Auth, RecaptchaVerifier } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getAuth, PhoneAuthProvider, sendSignInLinkToEmail, signInWithCredential, signInWithPhoneNumber } from '@firebase/auth';
import { ToastrService } from 'ngx-toastr';
import * as validator from 'validator';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { checkOTP, isValidMobileOrEmail } from '../../shared/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  otpForm!: FormGroup;
  showModel: boolean = true;
  openVerifyForm: boolean = false;
  appVerifier?: RecaptchaVerifier;
  confirmationResult?: any;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private _toster: ToastrService,
    private ui: UiService,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.initOtpForm();
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }

  ngAfterViewInit(): void {
    this.openRecaptcha();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      emailOrMobile: ['', [isValidMobileOrEmail]],
    });
  }

  initOtpForm() {
    this.otpForm = this.fb.group({
      emailOrMobile: ['', [isValidMobileOrEmail]],
      otp: ['', [checkOTP]],
    });
  }

  openRecaptcha() {
    console.log('loaded');
    setTimeout(() => {
      if (this.appVerifier) {
        console.log('loaded1');
        this.appVerifier.clear();
        this.appVerifier = undefined;
      } else {
        console.log('ppp');
        this.appVerifier = new RecaptchaVerifier(
          'recaptcha-container',
          {
            size: 'invisible',
          },
          this.auth
        ); // create a recaptcha verifier
      }
    }, 400);
  }

  async handleMobileAuth(phone: string) {
    try {
      if (!this.appVerifier) return;

      this.confirmationResult = await signInWithPhoneNumber(this.auth, '+91 ' + phone, this.appVerifier); // send verification code to phone number
      console.log('confirmationResult', this.confirmationResult);
      this.openVerifyForm = true;
      this.otpForm.get('emailOrMobile')?.patchValue(this.loginForm.value.emailOrMobile);
      // const verificationCode = prompt('Enter the verification code sent to your phone:', ''); // prompt user to enter the verification code
      // if (verificationCode) {
      //   // if user enters the verification code
      //   const credential = PhoneAuthProvider.credential(confirmationResult.verificationId, verificationCode); // create the phone auth credential
      //   const currentUser = await signInWithCredential(this.auth, credential); // sign in the user with the credential
      //   console.log('Phone authentication successful!', currentUser);
      //   this.authService.saveFirebaseUser(currentUser.user.toJSON());
      //   // this.uiService.openSnackbar(res.message);
      //   // this.saveToken(res.data.token);
      //   // this.location.back();
      //   // // this.router.navigate(['/']);
      //   // // this.location.back();
      //   // this.isAuth.next(true);
      // }
    } catch (error) {
      console.error('Phone authentication failed!', error);
    }
  }

  async onLoginSubmit() {
    if (this.loginForm.invalid) return this.loginForm.markAllAsTouched();

    if (!this.appVerifier) this.openRecaptcha();

    let isValidEmail = validator.default.isEmail(this.loginForm.value.emailOrMobile);

    if (isValidEmail) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        if (res) {
          this.openVerifyForm = true;
          this.otpForm.get('emailOrMobile')?.patchValue(this.loginForm.value.emailOrMobile);
        }
      });
    } else await this.handleMobileAuth(this.loginForm.value.emailOrMobile);
  }

  async onVerifySubmit() {
    if (this.otpForm.invalid) return this.otpForm.markAllAsTouched();

    if (validator.default.isMobilePhone(this.otpForm.value?.emailOrMobile || '', 'en-IN')) {
      if (!this.confirmationResult.verificationId) return this.openRecaptcha();
      const credential = PhoneAuthProvider.credential(this.confirmationResult.verificationId, this.otpForm.value.otp); // create the phone auth credential
      const currentUser = await signInWithCredential(this.auth, credential); // sign in the user with the credential
      console.log('Phone authentication successful!', currentUser);
      this.authService.saveFirebaseUser(currentUser.user.toJSON());
    } else if (validator.default.isEmail(this.otpForm.value?.emailOrMobile || '')) {
      this.authService.otpVerify(this.otpForm.value).catch((err: any) => {
        this._toster.error(err?.error?.message, 'Error');
      });
    } else {
      alert('Please enter valid email or mobile');
    }
  }
}
