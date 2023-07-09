import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UploadedImageComponent } from "./uploaded-image.component";

@NgModule({
  declarations: [UploadedImageComponent],
  imports: [CommonModule],
  exports: [UploadedImageComponent],
})
export class UploadedImageModule {}
