import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Datum } from '../../pages/product-detail/models/getProduct.response';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { CartData, CartService } from '../../services/cart.service';
import { UiService } from '../../services/ui.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogin?: boolean;
  isLoading: boolean = false;
  categories: any;
  brands: any;
  bootstrap:any;
  cartData!: Observable<CartData>;
  wishlistData!: Observable<Datum[]>;
  queryParams: any = {};
  constructor(
    public cartService: CartService,
    public wishService: WishlistService,
    public appService: AppService,
    private authService: AuthService,
    private uiService: UiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((rs) => (this.queryParams = rs));
    this.authService.isAuth.subscribe((rs) => (this.isLogin = rs));
    this.cartData = this.cartService.cartData$;
    this.wishlistData = this.wishService.wishData$;
    this.getCategories();
    this.getBrands();
  }

  getCategories() {
    this.appService.getCategories().subscribe((rs: any) => {
      this.categories = rs.data.docs;
      // console.log("cats",this.categories);
    });
  }

  getBrands() {
    this.appService.getBrands().then((rs: any) => {
      this.brands = rs.data.docs;
      // console.log("cats",this.categories);
    });
  }

  // getFilter(id:any){
  //  return {
  //   filterData:JSON.stringify({brands:[id]}) 
  //  } 
  // }
  searchProduct(e: Event) {
    let v = (e.target as HTMLInputElement).value?.trim();
    setTimeout(() => {
      this.router.navigate(['/products-listing'], { queryParams: { ...this.queryParams, search: v } });
    }, 100);
  }

  logout() {
    this.authService.logout();
  }

  increaseCartItme(pid: string) {
    this.cartService.increaseCartItemQty(pid);
  }

  decreaseCartItem(pid: string) {
    this.cartService.decreaseCartItemQty(pid);
  }

  deleteCartItem(pid: string) {
    this.cartService.removeItemToCart(pid);
  }

  // close(){
  //   const navLinks = document.querySelectorAll('.nav-item')
  //   const menuToggle = document.getElementById('navbarSupportedContent')
  //   const bsCollapse = new this.bootstrap.Collapse(menuToggle)
  //   navLinks.forEach((l) => {
  //       l.addEventListener('click', () => { bsCollapse.toggle() })
  //   })
  // }
}
