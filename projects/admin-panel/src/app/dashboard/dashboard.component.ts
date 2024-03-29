import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";

declare var $: any;
declare var init: any;

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}
}
