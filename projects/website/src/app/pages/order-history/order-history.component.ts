import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { Doc } from './model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  isLoading: boolean = false;
  pageData?: { docs: Doc[]; count: number };
  page: number = 1;
  pageSize: number = 10;
  queryParams: any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private authService: AuthService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((rs: any) => {
      this.pageData = undefined;
      this.page = +rs.page ? +rs.page : this.page;
      this.pageSize = +rs.pageSize ? +rs.pageSize : this.pageSize;
      this.queryParams = rs;
      this.getMyOrders({
        page: this.page,
        pageSize: this.pageSize,
      });
    });
  }

  changeOrderStatus(e: any) {
    let status = (e.target as HTMLSelectElement).value;
    let data: any = {
      page: this.page,
      pageSize: this.pageSize,
    };

    if (['DELIVERED', 'CANCELLED', 'RETURNED'].includes(status)) {
      data.orderStatus = status;
    }

    this.getMyOrders(data);
  }

  getMyOrders(data: any) {
    this.isLoading = true;
    lastValueFrom(this.appService.getMyOrders(data))
      .then((res) => {
        this.pageData = { docs: res.data.docs, count: res.data.count };
        this.isLoading = false;

        if (!this.uiService.isBrowser) return;
        setTimeout(() => {
          window.scroll(0, 0);
        }, 100);
      })
      .catch((err) => {
        this.isLoading = false;
        if (err.status == 0) {
          return this.uiService.openSnackbar('Please check your internet connection.', 'Alert');
        }
        return this.uiService.openSnackbar(err.error.message, 'Alert');
      });
  }

  cancelOrder(orderId: number) {
    if (confirm('Are you sure? You want to cancel')) {
      this.appService.cancelOrder(orderId).subscribe(
        (rs) => {
          this.uiService.openSnackbar('Your order cancel successfully');
          this.getMyOrders({
            page: this.page,
            pageSize: this.pageSize,
          });
        },
        (err) => {
          this.uiService.openSnackbar(err.error.message);
        }
      );
    }
  }
  returnProduct(orderId: String, productId: String) {
    if (confirm('Are you sure? You want to return')) {
      // console.log('Hello');
      this.appService.returnItem(orderId, productId).subscribe((rs: any) => {
        this.uiService.openSnackbar(rs.message, 'Success');
        this.getMyOrders({
          page: this.page,
          pageSize: this.pageSize,
        });
      });
    }
  }

  // openDialog(order: any): void {
  //   this.dialog
  //     .open(RatingFormComponent, {
  //       // width: '250px',
  //       data: {
  //         title: 'Reviews',
  //         order: order._id,
  //         product: order.product._id,
  //       },
  //     })
  //     .afterClosed()
  //     .subscribe((rs) => {
  //       if (rs == true) {
  //         order.reviewAvailable = true;
  //       }
  //     });
  // }

  orderimage(item: any) {
    if (item?.variant?.images?.length) {
      return item?.variant?.images[0];
    } else if (item?.product?.images?.length) {
      return item?.product?.images[0];
    } else return 'assets/error.png';
  }

  getFormattedVariantInfo(v: any) {
    let data: any[] = [];
    for (let k in v) {
      let keys = ['deleted', '_id', 'mrp', 'sellingPrice', 'badalDaloPrice', 'SKU', 'quantity', 'images', 'imgCount'];
      if (keys.includes(k)) continue;
      console.log(k, v);
      data.push({ key: k, val: v[k] });
    }
    return data;
  }

  logout() {
    this.authService.logout();
  }
}
