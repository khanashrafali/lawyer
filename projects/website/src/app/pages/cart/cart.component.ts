import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { CartData, CartService } from '../../services/cart.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData?: Observable<CartData>;
  constructor(
    public appService: AppService,
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private ui: UiService
  ) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartData = this.cartService.cartData$;
    if (!this.ui.isBrowser) return;
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }

  increaseCartItem(pid: string) {
    this.cartService.increaseCartItemQty(pid);
  }

  decreaseCartItem(pid: string) {
    this.cartService.decreaseCartItemQty(pid);
  }

  deleteCartitem(pid: string) {
    this.cartService.removeItemToCart(pid);
  }

  clearCartItems() {
    if (!confirm('Are you sure want to clear ?')) return;
    this.cartService.clearCart();
  }

  placeOrder() {
    this.authService.isAuth.subscribe((rs) => {
      if (rs) this.router.navigate(['/address']);
      else this.router.navigate(['/login']);
    });
  }
}
