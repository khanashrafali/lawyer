import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PageData } from "../../models/apis.models";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.css"],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() pageData!: PageData;
  @Input() orderStatus!: string;
  @Input() route!: string;
  @Input() queryParams: any;
  hasPrev2!: boolean;
  hasPrev!: boolean;
  hasNext!: boolean;
  hasNext2!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const pages = Math.ceil(this.pageData?.count / this.pageSize);

    this.hasPrev = this.currentPage - 1 >= 1 ? true : false;
    this.hasPrev2 = this.currentPage - 2 >= 1 ? true : false;
    this.hasNext = pages - this.currentPage >= 1 ? true : false;
    this.hasNext2 = pages - this.currentPage + 1 >= 1 ? true : false;
  }

  onNext() {
    this.router.navigate([this.route], {
      queryParams: {
        ...this.queryParams,
        page: this.currentPage + 1,
        pageSize: this.pageSize,
        orderStatus: this.orderStatus
      },
    });
  }

  onPreviouse() {
    this.router.navigate([this.route], {
      queryParams: {
        ...this.queryParams,
        page: this.currentPage - 1,
        pageSize: this.pageSize,
        orderStatus: this.orderStatus
      },
    });
  }
}
