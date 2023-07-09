import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-uploaded-image",
  templateUrl: "./uploaded-image.component.html",
  styleUrls: ["./uploaded-image.component.css"],
})
export class UploadedImageComponent implements OnInit {
  @Input() imageUrls!: string[];
  @Input() disableLink: boolean = false;
  @Input() label: string = "image";
  constructor() {}

  ngOnInit(): void {
  }
}
