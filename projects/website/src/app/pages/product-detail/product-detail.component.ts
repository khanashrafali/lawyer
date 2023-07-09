import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { CartService } from '../../services/cart.service';
import { UiService } from '../../services/ui.service';
import { WishlistService } from '../../services/wishlist.service';
import { SeoService } from '../../shared/seo.service';
import { Datum, GetProduct } from './models/getProduct.response';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productData?: GetProduct;
  isBrowser: boolean = false;
  product?: Datum;
  selectedSize?: string;
  coupleName:any;
  customMsg:any;

  constructor(
    public cartService: CartService,
    public wishService: WishlistService,
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
    private ui: UiService,
    @Inject(PLATFORM_ID) platformId: any
  ) {
    if (isPlatformBrowser(platformId)) this.isBrowser = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      if (!params.get('slug')) return;

      this.productData = this.product = undefined;
      this.appService.getProductDetail(params.get('slug')!).subscribe((product) => {
        this.productData = product;
        this.product = this.productData.data.find((v) => v.slug == params.get('slug'))!;

        let size = this.route.snapshot.queryParamMap.get('size');
        if (size?.length) this.selectedSize = size;
        else this.selectedSize = this.product.sizes[0];

        this.seo.generateTags({ title: this.product.name, desc: this.product.shortDesc, image: this.product.images[0]});
        if (!this.ui.isBrowser) return;
      });
    });
    setTimeout(() => window.scroll(0, 0), 100);
  }

  addProductToCart(product: any) {
    if (this.cartService.isInCart(this.product!._id!, this.selectedSize!)) this.router.navigate(['/cart']);
    if (!this.product!.quantity) return;
    if (this.product!.quantity <= 0) this.router.navigate(['/product', product?.slug]);
    this.cartService.addItemToCart(product, 1, this.selectedSize! ,this.coupleName! ,this.customMsg!);
  }

  addToWishList(p: any) {
    this.wishService.addItemToWishList(p);
  }

  selectVariant(productId: string) {
    this.product = this.productData!.data.find((v: any) => v._id === productId)!;
    this.router.navigate(['/product', this.product.slug], { queryParams: { size: this.selectedSize } });
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  getName(event: any) {
    this.coupleName =event.target.value;
    console.log(event.target.value)
  }

  getCustom(msg: any) {
    this.customMsg =msg.target.value;

    console.log(msg.target.value)
  }
  sum(sp:any,mp:any){
    let per = (sp/mp)*100;
    console.log(per)
    let rem =per.toFixed(0)
    let percentage = 100-(+rem)
   return percentage
  }
}
