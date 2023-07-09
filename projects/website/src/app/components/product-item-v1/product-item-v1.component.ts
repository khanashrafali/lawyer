import { Component, Input, OnInit } from '@angular/core';
import { ProductImage } from 'projects/admin-panel/src/app/models/apis.models';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item-v1',
  templateUrl: './product-item-v1.component.html',
  styleUrls: ['./product-item-v1.component.css'],
})
export class ProductItemV1Component implements OnInit {
  @Input() p: any;
  constructor(
    public wishService: WishlistService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}

  addToWishList(product: any) {
    this.wishService.addItemToWishList(product);
  }

  getSrcSet(file: ProductImage) {
    return [
      { file: file.xlg, width: '1400px' },
      { file: file.lg, width: '1200px' },
      { file: file.md, width: '1000px' },
      { file: file.sm, width: '800px' },
      { file: file.xs, width: '400px' },
    ];
  }
}
