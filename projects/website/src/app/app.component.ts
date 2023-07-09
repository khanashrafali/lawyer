import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { UiService } from './services/ui.service';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website';

  constructor(
    public cartService: CartService,
    public wlService: WishlistService,
    public appService: AppService,
    private authService: AuthService,
    private ui: UiService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartDataInLS();
    this.wlService.getwishListDataInLS();
    this.authService.autoLogin();
    this.appService.getAds();
  }
}
