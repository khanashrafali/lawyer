import { Component, Input, OnInit } from "@angular/core";
import { PaymentStatus, ApprovalStatus } from "../../models/apis.models";

@Component({
  selector: "app-payment-status",
  templateUrl: "./payment-status.component.html",
  styleUrls: ["./payment-status.component.css"],
})
export class PaymentStatusComponent implements OnInit {
  PaymentStatus = PaymentStatus;
  ApprovalStatus = ApprovalStatus;
  @Input() status!: string;
  constructor() {}

  ngOnInit(): void {}
}
