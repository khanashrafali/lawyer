import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { ApiResponse } from "../models/apis.models";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  fetchAppUsers() {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/users/list`);
  }

  fetchModuleCount() {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/users/admin-dashboard`);
  }

  changePassword(body: { oldPassword: string; newPassword: string; confirmPassword: string }) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/admin-change-password`, body);
  }

  uploadProductXls(formData: any) {
    let form = new FormData();
    form.append("data", formData.data);
    return this.http.post<ApiResponse>(`${environment.apiUrl}/products/bulk-upload`, form);
  }

  getCspItems() {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/csp-api/csp-item-list`, {});
  }
}
