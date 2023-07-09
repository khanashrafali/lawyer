import { Component, Input, OnInit } from "@angular/core";
import { OrderStatus } from "../../models/apis.models";

@Component({
  selector: "app-order-status",
  templateUrl: "./order-status.component.html",
  styleUrls: ["./order-status.component.css"],
})
export class OrderStatusComponent implements OnInit {
  orderStatus = OrderStatus;
  @Input() status!: string;
  constructor() {}

  ngOnInit(): void {}
}
