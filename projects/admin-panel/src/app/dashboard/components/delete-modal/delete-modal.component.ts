import { Component, OnInit } from "@angular/core";
import { UiService } from "../../../services/ui.service";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.css"],
})
export class DeleteModalComponent implements OnInit {
  modelInfo: any;
  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.onModalDataChange().subscribe((rs:any) => {
      this.modelInfo = rs;
    });
  }

  onCancel() {
    this.uiService.closeModal("#delete_modal", false);
  }

  onDelete() {
    this.uiService.closeModal("#delete_modal", true);
  }
}
