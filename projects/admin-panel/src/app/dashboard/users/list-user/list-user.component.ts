import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../auth/auth.service";
import { User, AuthData, AdminModule, userRole } from "../../../models/apis.models";
import { UiService } from "../../../services/ui.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUserComponent implements OnInit {
  dataIsLoaded = false;
  selectedCategory!: User;
  page: number = 1;
  pageSize: number = 10;
  pageData: { count: number; docs: User[] } = { count: 0, docs: [] };
  textSearch!: string;

  showFilter: boolean = false;
  isFilterApplied: boolean = false;
  filterForm!: FormGroup;

  authData: AuthData | null = null;
  adminModules = AdminModule;

  constructor(
    private userService: UsersService,
    private uiService: UiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authData = this.authService.getAuthData;

    this.route.queryParams.subscribe((rs:any) => {
      this.dataIsLoaded = false;
      this.page = +rs.page ? +rs.page : this.page;
      this.pageSize = +rs.pageSize ? +rs.pageSize : this.pageSize;
      this.initForm();
      this.fetchUsers();
    });
  }

  haveAccess(action: string, authData: AuthData | null) {
    return (authData?.adminRole?.permissions || [])?.findIndex(
      (rd) => rd.module == AdminModule.PAYOUT && (rd as any)[action]
    ) >= 0 || authData?.role == userRole.SUPER_ADMIN
      ? true
      : false;
  }

  initForm() {
    let filterData = localStorage.getItem("userFilter");

    let controls = {
      status: [true],
      createdAt: [null],
    };

    if (filterData) {
      this.isFilterApplied = true;
      let formToJson = JSON.parse(filterData);
      controls.status = [formToJson.status];
      controls.createdAt = [formToJson.createdAt];
    }

    this.filterForm = this.fb.group(controls);
  }

  applyFilter(formData: any) {
    this.isFilterApplied = true;
    this.page = 1;
    localStorage.setItem("userFilter", JSON.stringify(formData));
    this.fetchUsers();
  }

  clearFilter() {
    this.filterForm.reset({ status: true });
    this.isFilterApplied = false;
    localStorage.removeItem("userFilter");
    this.fetchUsers();
  }

  onChangePageSize(event: any) {
    this.dataIsLoaded = false;
    this.pageSize = +event.target.value;
    this.fetchUsers();
  }

  fetchUsers() {
    if (!this.haveAccess("read", this.authData)) return;

    this.dataIsLoaded = false;
    this.pageData.count = 0;
    this.pageData.docs = [];

    this.userService
      .fetchUsers(this.textSearch, this.page, this.pageSize, this.isFilterApplied, this.filterForm?.value)
      .subscribe(
        (rs) => {
          this.pageData = rs.data;
          this.dataIsLoaded = true;
        },
        (err) => {
          this.dataIsLoaded = false;
        }
      );
  }

  resetPagination() {
    this.router.navigate(["/admins"], { queryParams: { page: 1, pageSize: this.pageSize } });
  }

  onSearch(text: string) {
    this.textSearch = text;
    let oldPage = this.page;
    this.page = 1;
    this.fetchUsers();
    if (oldPage != 1) this.resetPagination();
  }

  updateUserStatus(userId: string, status: boolean) {
    this.uiService.openModal("#delete_modal", { modalTitle: "Update" }).afterClose.subscribe((rs) => {
      if (rs) {
        this.userService.updateStatus(userId, status).subscribe((rs) => {
          this.pageData.docs = this.pageData.docs.map((e) => {
            if (e._id == userId) {
              e.isActive = status;
            }
            return e;
          });
          this.uiService.openSnackbar(rs.message);
        });
      }
    });
  }
}
