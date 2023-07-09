import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  orderId: any;
  total: any;

  constructor(private route: ActivatedRoute,private ui:UiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((rs: any) => {
      this.orderId = rs.orderId;
      this.total = rs.total;
    if (!this.ui.isBrowser) return;
      setTimeout(() => {
        window.scroll(0,0)
      }, 100);
    });
  }
}
