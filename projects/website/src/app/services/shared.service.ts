import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiResponse } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  uploadFiles(blobs: any[]) {
    let form = new FormData();
    for (let blob of blobs) form.append('images', blob);
    return this.http.post<ApiResponse>(`${environment.apiUrl}/auth/upload-files`, form);
  }

  imageGuidline: any[] = [
    { key: 'Image format', value: `JPEG, PNG formats. Animated .gif files not accepted.` },
    {
      key: 'Image Size',
      value: `The minimum image size requirement is 1000 pixels. Image should not exceed 10,000px. Zoom function enabled images should be there.`,
    },
    { key: 'Image Frame', value: `At least 85% of the entire frame or background must be filled.` },
    {
      key: 'Background Colour',
      value: `White or transparent background is allowed. However white is preferred more. Colorful backgrounds are not at all accepted.`,
    },
    { key: 'Image Colour Mode', value: `RGB or CMYK can be used.` },
    {
      key: 'Cannot use',
      value: `You cannot use any badges used on Amazon, logos or trademarks of amazon, ALEXA PRIME or the Amazon similar design.`,
    },
    { key: 'Cannot include badges', value: `Like “Amazon’s choice”, “Top seller”, “Best seller”, “Amazon Alexa” and so on.` },
  ];
}
