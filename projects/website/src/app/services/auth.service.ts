import { isPlatformBrowser, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { ToastrService as ToasterService } from 'ngx-toastr';
import { BehaviorSubject, lastValueFrom, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiResponse } from './app.service';
import { UiService } from './ui.service';

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: any = '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private decodedToken: any;

  public isAuth: Subject<boolean> = new BehaviorSubject<boolean>(false);
  browser: boolean = false;

  constructor(
    private _http: HttpClient,
    private _toaster: ToasterService,
    private location: Location,
    private uiService: UiService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: any
  ) {
    if (isPlatformBrowser(platformId)) this.browser = true;
    if (this.browser) {
      this.decodedToken = JSON.parse(localStorage.getItem('hr_meta')!) || new DecodedToken();
    }
  }

  getMe() {
    return this._http.get<ApiResponse>(`${environment.apiUrl}/auth/me`);
  }

  updateProfile(data: any) {
    return this._http.put<ApiResponse>(`${environment.apiUrl}/users/update/me`, data);
  }

  saveToken(token: any) {
    if (!this.browser) return;
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('hr_auth', token);
    localStorage.setItem('hr_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  getTokenData() {
    if (!this.browser) return null;
    let v = localStorage.getItem('hr_meta');
    if (v) return JSON.parse(v);
    return null;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }
  login(objData: any) {
    return this._http.post<any>(`${environment.apiUrl}/auth/app-login`, objData);
  }

  saveFirebaseUser(userData: any) {
    return lastValueFrom(this._http.post<any>(`${environment.apiUrl}/auth/fire-user-login`, { fbUser: userData })).then((res: any) => {
      this.uiService.openSnackbar(res.message);
      this.saveToken(res.data.token);
      this.location.back();
      // this.router.navigate(['/']);
      // this.location.back();
      this.isAuth.next(true);
      return res;
    });
  }

  otpVerify(objData: any) {
    return lastValueFrom(this._http.post<any>(`${environment.apiUrl}/auth/verify-otp`, objData)).then((res: any) => {
      this.uiService.openSnackbar(res.message);
      this.saveToken(res.data.token);
      this.location.back();
      // this.router.navigate(['/']);
      // this.location.back();
      this.isAuth.next(true);
      return res;
    });
  }

  public getAuthToken(): string | null {
    if (!this.browser) return null;
    return localStorage.getItem('hr_auth')!;
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  logout() {
    if (!this.browser) return;
    this.isAuth.next(false);
    localStorage.clear();
    this.router.navigate(['/'], { replaceUrl: true });
  }

  autoLogin() {
    let token = this.getAuthToken();
    if (token) {
      this.saveToken(token);
      this.isAuth.next(true);
    }
  }
}
