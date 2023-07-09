import { Component, OnInit } from "@angular/core";
import { UiService } from "../../../services/ui.service";

@Component({
  selector: "app-info-modal",
  templateUrl: "./info-modal.component.html",
  styleUrls: ["./info-modal.component.css"],
})
export class InfoModalComponent implements OnInit {
  modelInfo: any;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.onModalDataChange().subscribe((rs) => {
      this.modelInfo = rs;
    });
  }

  onModalClose(status: boolean) {
    this.uiService.closeModal("#ImageGuideline");
  }
}
