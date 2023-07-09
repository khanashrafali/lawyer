import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdsResponse } from '../models/ads.response.model';
import { OrderDetailData } from '../pages/order-detail/model';
import { OrderDetailResponse } from '../pages/order-detail/order-detail.model';
import { OrdersData } from '../pages/order-history/model';
import { GetProduct } from '../pages/product-detail/models/getProduct.response';
import { GetAppHome } from '../pages/welcome/models/app-home.response';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';

export interface ApiResponse {
  message: string;
  data: any;
  statusCode: number;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  ads: BehaviorSubject<AdsResponse | null> = new BehaviorSubject<AdsResponse | null>(null);

  constructor(private http: HttpClient, private authService: AuthService, private cartService: CartService) {}

  getCategories(objData?: any) {
    let url = `${environment.apiUrl}/categories`;
    if(objData?.isGender) url += `?isGender=${objData.isGender}`
    return this.http.get<ApiResponse>(url);
  }

  // wishlist apis

  addItemToWishList(obj: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/wishlist`, obj));
  }

  removeItemFromWishList(id: string) {
    return lastValueFrom(this.http.delete(`${environment.apiUrl}/wishlist/${id}`));
  }

  getWishList() {
    return this.http.get(`${environment.apiUrl}/wishlist`);
  }

  clearWishList() {
    return lastValueFrom(this.http.get(`${environment.apiUrl}`));
  }

  // cart apis
  addItemToCart(obj: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/cart`, obj));
  }

  increaseCartQty(id: any, obj: any) {
    return lastValueFrom(this.http.put(`${environment.apiUrl}/cart/increase/${id}`, obj));
  }
  decreaseCartQty(id: any, obj: any) {
    return lastValueFrom(this.http.put(`${environment.apiUrl}/cart/decrease/${id}`, obj));
  }

  deleteCartItem(id: string) {
    return lastValueFrom(this.http.delete(`${environment.apiUrl}/cart/${id}`));
  }

  clearCart() {
    return lastValueFrom(this.http.get(`${environment.apiUrl}/cart/clear`));
  }

  getCart() {
    return this.http.get(`${environment.apiUrl}/cart`);
  }

  // cart apis

  getCarousel() {
    return lastValueFrom(this.http.get<ApiResponse>(`${environment.apiUrl}/slider`));
  }

  // products api

  getTopSellingProducts() {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/products/top-selling`, {
      params: { page: 1, pageSize: 6, isFeatured: true },
    });
  }

  getNewArrivalsProducts() {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/products`, {
      params: { page: 1, pageSize: 6 },
    });
  }

  getProductDetail(slug: string) {
    return this.http.get<GetProduct>(`${environment.apiUrl}/products/${slug}`);
  }

  getSimilarProducts(catId: string) {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/products`, {
      params: { page: 1, pageSize: 6, category: catId },
    });
  }

  getProductsWithFilters(params: any) {
    return this.http.get<ApiResponse>(`${environment.apiUrl}/products`, {
      params,
    });
  }

  getProductsByCategory(params: any) {
    return this.http.post<ApiResponse>(`${environment.apiUrl}/products/search`, params);
  }

  // ads api

  getAds() {
    lastValueFrom(this.http.get<AdsResponse>(`${environment.apiUrl}/ads`)).then((rs) => this.ads.next(rs));
  }

  // brand api

  getBrands(queryParams?: any) {
    return lastValueFrom(
      this.http.get<ApiResponse>(`${environment.apiUrl}/brands`, {
        params: queryParams,
      })
    );
  }

  generateOrder() {
    return lastValueFrom(
      this.http.post<ApiResponse>(`${environment.apiUrl}/order/create-order`, {
        paymentMethod: 'Prepaid',
        shippingAddress: '6286127f4de01d2308141182',
      })
    );
  }

  //address

  // cart apis
  addAddress(obj: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/address`, obj));
  }

  // cart apis
  updateAddress(id:any,obj: any) {
    return lastValueFrom(this.http.put(`${environment.apiUrl}/address/${id}`, obj));
  }

  // cart apis
  deleteAddress(id: any) {
    return lastValueFrom(this.http.delete(`${environment.apiUrl}/address/${id}`));
  }
  getAddress() {
    return lastValueFrom(this.http.get<ApiResponse>(`${environment.apiUrl}/address`));
  }

  generateRPayOrder(objData: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/order/create-rpay-order`, objData));
  }

  createPrepaidOrder(body: { rpay_orderId: string; rpay_paymentId: string; rpay_signature: string; reasonMessage: string }) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/order/place-order`, body));
  }

  createCODOrder(body: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/order/place-cod-order`, body));
  }

  getMyOrders(queryParams: any) {
    let params: any = {};
    if (queryParams?.page && queryParams?.pageSize) {
      params.page = +queryParams.page;
      params.pageSize = +queryParams.pageSize;
    }

    if (queryParams?.orderStatus) {
      params.currentOrderStatus = queryParams?.orderStatus;
    }

    return this.http.get<OrdersData>(`${environment.apiUrl}/order`, { params });
  }

  orderDetail(orderId: string) {
    return this.http.get<OrderDetailResponse>(`${environment.apiUrl}/order/${orderId}`);
  }

  cancelOrder(orderId: number) {
    return this.http.put(`${environment.apiUrl}/order/${orderId}`, {
      reasonMessage: '',
    });
  }
  returnItem(orderId: String, productId: String) {
    return this.http.put(`${environment.apiUrl}/order/${orderId}/${productId}`, {
      reasonMessage: '',
    });
  }

  getAppHome() {
    return this.http.get<GetAppHome>(`${environment.apiUrl}/users/app-home`);
  }

  getHeading() {
    return lastValueFrom(this.http.get<ApiResponse>(`${environment.apiUrl}/dynamic-heading`));
  }


  // cart apis
  checkCoupon(obj: any) {
    return lastValueFrom(this.http.post(`${environment.apiUrl}/coupons/apply`, obj));
  }

  // check availability apis
  checkAvailability(pickup_postcode: any,delivery_postcode: any) {
    return lastValueFrom(this.http.get(`${environment.apiUrl}/ship-rocket/serviceability?pickup_postcode=${pickup_postcode}&delivery_postcode=${delivery_postcode}&weight=1&cod=1`));
  }

  getServiceCharge() {
    return lastValueFrom(this.http.get<ApiResponse>(`${environment.apiUrl}/ship-charge`));
  }
  // setDefaultState() {
  //   // if (this.authService.getAuthToken()) {
  //   // this.authService.isAuth.next(true);
  //   // this.getCart().subscribe((rs: any) => {
  //   // });
  //   this.getWishList().subscribe((rs: any) => {
  //     this.wishlistData.next(rs.data?.items?.length || 0);
  //   });
  //   // }
  // }
}
