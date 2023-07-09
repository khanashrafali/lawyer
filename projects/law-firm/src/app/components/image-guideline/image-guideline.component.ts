import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-image-guideline",
  templateUrl: "./image-guideline.component.html",
  styleUrls: ["./image-guideline.component.css"],
})
export class ImageGuidelineComponent implements OnInit {
  @Input() size?: string;
  updateId:any;
  updateParam:any;
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.updateId = param.get("sliderId")!;
    });
  }
}
