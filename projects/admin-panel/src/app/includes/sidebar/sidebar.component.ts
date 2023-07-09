import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { OrderStatus, AuthData, AdminModule, userRole } from "../../models/apis.models";

declare var $: any;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  orderStatus=OrderStatus;
  authData: AuthData | null = null;
  adminModules = AdminModule;
  isOpen = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authData = this.authService.getAuthData;
    if (this.authData) this.loadNav();
  }

  loadNav() {
    $("document").ready(function () {
      // enable side bar scroll
      var $slimScrolls = $(".slimscroll");
      $slimScrolls.slimScroll({
        height: "auto",
        width: "100%",
        position: "right",
        size: "7px",
        color: "#ccc",
        allowPageScroll: false,
        wheelStep: 10,
        touchScrollStep: 100,
      });
      var wHeight = $(window).height() - 60;
      $slimScrolls.height(wHeight);
      $(".sidebar .slimScrollDiv").height(wHeight);
      $(window).resize(function () {
        var rHeight = $(window).height() - 60;
        $slimScrolls.height(rHeight);
        $(".sidebar .slimScrollDiv").height(rHeight);
      });
    });

    var Sidemenu = function (this: any) {
      this.$menuItem = $("#sidebar-menu a");
    };

    function init() {
      $("#sidebar-menu a").on("click", function (this: any, e: any) {
        if ($(this).parent().hasClass("submenu")) {
          e.preventDefault();
        }
        if (!$(this).hasClass("subdrop")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("subdrop");
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
        } else if ($(this).hasClass("subdrop")) {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
        }
      });
      $("#sidebar-menu ul li.submenu a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
    }

    // Sidebar Initiate
    init();
  }

  haveAccess(module: AdminModule, authData: AuthData | null) {
    return (authData?.adminRole?.permissions || [])?.findIndex((rd) => rd.module == module) >= 0 || authData?.role == userRole.SUPER_ADMIN
      ? true
      : false;
  }

  queryParams() {
    return { page: 1, pageSize: 10 };
  }

  queryParamsOrder(status: string) {
    return { page: 1, pageSize: 10, orderStatus: status };
  }
}
