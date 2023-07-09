import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: '[app-wish-item]',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css'],
})
export class WishItemComponent implements OnInit {
  @Input() wItem!: any;
  coupleName:any =''
  customization:any =''
  constructor(private wishService: WishlistService, private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  addToCart(product: any) {
    let variantQuantity = product?.variants[0]?.variant?.quantity;
    if (variantQuantity <= 0) {
      this.router.navigate(['/product', product?.slug]);
    } else {
      this.cartService.addItemToCart(product, 1, product.sizes[0] ,this.coupleName ,this.customization);
    }
  }

  deleteitem(id: string) {
    this.wishService.removeItemToWishList(id);
  }
}
