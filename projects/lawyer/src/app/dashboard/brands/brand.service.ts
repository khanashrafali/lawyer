import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin-panel/src/environments/environment';
import { ApiResponse } from '../../models/apis.models';
import { SharedService } from '../../services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient, private sharedShared: SharedService) {}

  uploadFiles(blobs: any[]) {
    let form = new FormData();
    for (let blob of blobs) form.append('file', blob);
    return this.http.post<ApiResponse>(`${environment.apiUrl}/brands/uploads`, form);
  }

  async addBrand(formData: any) {
    let uploadedFile = (await this.uploadFiles([formData.image]).toPromise())?.data;
    formData.image = {
      xs: uploadedFile.xs.Location,
      sm: uploadedFile.sm.Location,
      md: uploadedFile.md.Location,
      lg: uploadedFile.lg.Location,
      xlg: uploadedFile.xlg.Location,
      icon: uploadedFile.icon.Location,
      original: uploadedFile.original.Location,
    };
    return this.http.post<ApiResponse>(`${environment.apiUrl}/brands`, formData).toPromise();
  }

  async updateBrand(brandId: string, formData: any) {
    if (typeof formData.image == 'object' && formData.image != null) {
      let image = (await this.uploadFiles([formData.image]).toPromise())?.data;
      formData.image = {
        xs: image.xs.Location,
        sm: image.sm.Location,
        md: image.md.Location,
        lg: image.lg.Location,
        xlg: image.xlg.Location,
        icon: image.icon.Location,
        original: image.original.Location,
      };
    } else {
      delete formData.image;
    }
    return this.http.put<ApiResponse>(`${environment.apiUrl}/brands/${brandId}`, formData).toPromise();
  }

  getBrand(brandId: string) {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/brands/${brandId}`);
  }

  getBrands(queryParams?: any) {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/brands`);
  }

  deleteBrand(brandId: string) {
    return this.http.delete<ApiResponse>(`${environment.apiUrl}/brands/${brandId}`);
  }

  updateBrandStatus(brandId: string, isApproved: boolean) {
    return this.http.patch<ApiResponse>(`${environment.apiUrl}/brands/${brandId}`, {
      isApproved,
    });
  }
}
