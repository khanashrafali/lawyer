import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { OrderDetailData } from './model';
import { OrderDetailResponse } from './order-detail.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  orderDetail?: Observable<OrderDetailResponse>;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private ui:UiService
  ) {}

  ngOnInit(): void {
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
    this.route.params.subscribe((rs) => {
      this.orderDetail = this.appService.orderDetail(rs['orderId']);
    });
  }

  logout() {
    this.authService.logout();
  }
}
