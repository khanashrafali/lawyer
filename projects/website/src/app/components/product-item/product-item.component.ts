import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImage } from 'projects/admin-panel/src/app/models/apis.models';
import { Product } from '../../pages/welcome/models/app-home.response';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() p!: Product;
  coupleName:any =''
  percentage:any;
  // sum:any;
  customization:any =''
  constructor(public cartService: CartService, public wishService: WishlistService, private router: Router) {}

  ngOnInit(): void {}

  addProductToCart() {
    if (this.cartService.isInCart(this.p._id, this.p.sizes[0])) this.router.navigate(['/cart']);
    if (this.p.quantity <= 0) this.router.navigate(['/product', this.p?.slug]);
    else this.cartService.addItemToCart(this.p, 1, this.p.sizes[0],this.coupleName ,this.customization);
  }

  addToWishList() {
    this.wishService.addItemToWishList(this.p);
  } 
  
  sum(sp:any,mp:any){
    let per = (sp/mp)*100;
    console.log(per)
    let rem =per.toFixed(0)
    this.percentage = 100-(+rem)
   return this.percentage
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




  getStarsCount(count: number) {
    let stars = [];
    for (let i of Array(count).keys()) stars.push(true);
    for (let i of Array(5 - count).keys()) stars.push(false);
    return stars;
  }
}
