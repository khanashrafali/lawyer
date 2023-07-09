import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageData } from 'projects/admin-panel/src/app/models/apis.models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  // pageChange(e: number) {
  //   this.router.navigate([this.route], {
  //     queryParams: {
  //       ...this.queryParams,
  //       page: e,
  //       pageSize: this.pageSize,
  //       orderStatus: this.orderStatus,
  //     },
  //   });
  // }

  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() pageData!: PageData;
  @Input() orderStatus!: string;
  @Input() route!: string;
  queryParams: any;
  hasPrev2!: boolean;
  hasPrev!: boolean;
  hasNext!: boolean;
  hasNext2!: boolean;
  pages: number = 0;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((rs) => (this.queryParams = rs));
    this.pages = Math.ceil(this.pageData.count / this.pageSize);
    this.hasPrev = this.currentPage - 1 >= 1 ? true : false;
    this.hasPrev2 = this.currentPage - 2 >= 1 ? true : false;
    this.hasNext = this.pages - this.currentPage >= 1 ? true : false;
    this.hasNext2 = this.pages - (this.currentPage + 1) >= 1 ? true : false;
    console.log(this.hasNext2);
  }

  onNext(inc: number) {
    this.router.navigate([this.route], {
      queryParams: {
        ...this.queryParams,
        page: this.currentPage + inc,
        pageSize: this.pageSize,
        orderStatus: this.orderStatus,
      },
    });
  }

  onPreviouse(prev: number) {
    this.router.navigate([this.route], {
      queryParams: {
        ...this.queryParams,
        page: this.currentPage - prev,
        pageSize: this.pageSize,
        orderStatus: this.orderStatus,
      },
    });
  }
}
