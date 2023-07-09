import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { ApiResponse, AuthData } from "../models/apis.models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(formData: { email: string; password: string }) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/admin-login`, formData);
  }


  resetPassword(formData: any) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/reset-password`, formData);
  }

  verifyForgotPasswordOtp(formData: any) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/reset-password-by-otp`, formData);
  }

  sendForgotPasswordOtp(formData: any) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/send-forgot-password-otp-admin`, formData);
  }

  clearAuthData() {
    localStorage.removeItem("adminAuthData");
  }

  saveAuthData(authData: ApiResponse) {
    localStorage.setItem("adminAuthData", JSON.stringify(authData.data));
  }

  get getAuthData() {
    let authData = localStorage.getItem("adminAuthData");
    if (!authData) {
      return null;
    }
    return JSON.parse(authData) as AuthData;
  }

  logout() {
    this.clearAuthData();
    this.router.navigate(["/login"]);
  }
}
