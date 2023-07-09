import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../../../services/app.service';
import { UiService } from '../../../services/ui.service';
import { Datum } from '../models/getProduct.response';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css'],
})
export class SimilarProductsComponent implements OnInit {
  @Input() product!: Datum;
  products?: Observable<any>;

  constructor(private appService: AppService, private ui: UiService, private router: Router) {}

  ngOnInit(): void {
    if (this.product.category._id) {
      this.products = this.appService.getSimilarProducts(this.product.category._id);
      if (!this.ui.isBrowser) return;
      setTimeout(() => window.scroll(0, 0), 100);
    }
  }

  showMore() {
    this.router.navigate(['/products-listing'], {
      queryParams: { filterData: JSON.stringify({ categories: [this.product.category._id] }) },
    });
  }
}
