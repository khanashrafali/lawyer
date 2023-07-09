import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { AuthData } from "../../models/apis.models";
import { dashboardCards } from "../../utils/data";
import { DashboardService } from "../dashboard.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  dataIsLoaded = false;
  cardData: any[] = [];
  authData: AuthData | null = null;
  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.authData = this.authService.getAuthData;
    this.dashboardService.fetchModuleCount().subscribe((rs) => {
      this.cardData = dashboardCards(rs.data);
      this.dataIsLoaded = true;
    });
  }
}
