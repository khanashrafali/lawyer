import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { environment } from "projects/admin-panel/src/environments/environment";
import { ApiResponse } from "../../models/apis.models";
import { DATE } from "../../utils/data";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUsers(textSearch?: string, page?: number, pageSize?: number, setFilter?: boolean, filterData?: any) {
    let url = ``;
    if (page && pageSize) {
      url += `page=${page}&pageSize=${pageSize}&`;
    }

    if (textSearch?.length) {
      url += `textSearch=${textSearch}&`;
    }

    if (setFilter) {
      url += `status=${filterData.status}&`;

      if (filterData.createdAt && filterData.createdAt != "null") {
        url += `createdAt=${moment(filterData.createdAt).format(DATE)}`;
      }
    }

    return this.http.get<ApiResponse>(`${environment.apiUrl}/users?${url}`);
  }

  updateStatus(userId: string, status: boolean) {
    return this.http.patch<ApiResponse>(`${environment.apiUrl}/users/${userId}`, {
      status,
    });
  }

  fetchFeedBacks(page?: number, pageSize?: number) {
    let url = ``;
    if (page && pageSize) url += `page=${page}&pageSize=${pageSize}&`;
    return this.http.get<ApiResponse>(`${environment.apiUrl}/queries?${url}`);
  }

  fetchFeedBack(id: string) {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/queries/${id}`);
  }
}
