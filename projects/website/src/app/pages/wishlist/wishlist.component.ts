import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { WishlistService } from '../../services/wishlist.service';
import { Datum } from '../product-detail/models/getProduct.response';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishListData?: Observable<Datum[]>;
  constructor(private wishService: WishlistService,private ui:UiService) {}

  ngOnInit(): void {
    this.getAllWishList();
  }

  getAllWishList() {
    this.wishListData = this.wishService.wishData$;
    if (!this.ui.isBrowser) return;

    setTimeout(() => {
      window.scroll(0,0)
    }, 100);
  }
}
