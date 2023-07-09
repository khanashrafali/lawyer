import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Datum } from '../pages/product-detail/models/getProduct.response';
import { UiService } from './ui.service';

export interface CartData {
  items: { product: Datum; size: string; qty: number ,coupleName:string , customization:string }[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData$: BehaviorSubject<CartData> = new BehaviorSubject<CartData>({ items: [], total: 0 });

  constructor(private http: HttpClient, private ui: UiService) {}

  addItemToCart(product: any, qty: number, size: string ,coupleName:string ,customization:any) {
    let cartData = this.getCartDataInLS();

    if (!cartData) return;

    if (cartData.items.findIndex((ci: any) => ci.product._id == product._id) > -1) {
      return this.ui.openSnackbar('Item Already Added in Cart!');
    }

    cartData.items.push({ product, qty, size ,coupleName ,customization });
    cartData.total = cartData.total + product.sellingPrice * qty;

    console.log({ cartData, product, qty ,coupleName ,customization });

    if (this.ui.isBrowser) localStorage.setItem('cartData', JSON.stringify(cartData));

    this.ui.openSnackbar('Item Added To Cart!');
    // this.cartData$.next(cartData);
    this.cartData$.value.items = cartData.items;
    this.cartData$.value.total = cartData.total;
  }

  removeItemToCart(pid: string) {
    let cartData = this.getCartDataInLS();
    if (!cartData) return;
    let removedIndex = cartData.items.findIndex((c) => c.product._id == pid);
    let oldItems = [...cartData.items].filter((c) => c.product._id != pid);
    if (removedIndex < 0) return;
    let cartItem = cartData.items[removedIndex];

    let total = cartData.total - cartItem.product.sellingPrice * cartItem.qty;
    cartData = { ...cartData, items: oldItems, total };

    if (this.ui.isBrowser) localStorage.setItem('cartData', JSON.stringify(cartData));

    this.ui.openSnackbar('Item Removed From Cart!');
    this.cartData$.value.items.splice(removedIndex, 1);
    this.cartData$.value.total = total;
    return { removedIndex, cartItem, total };
  }

  increaseCartItemQty(id: string) {
    let cartData = this.getCartDataInLS();
    if (!cartData) return;
    let oldItems = [...cartData.items];
    let removedIndex = cartData.items.findIndex((c) => c.product._id == id);
    if (removedIndex < 0) return;

    let cartItem = cartData.items[removedIndex];

    if (cartItem.product.quantity == 5) return this.ui.openSnackbar('Only 5 Items Are Allowed.');
    if (cartItem.product.quantity == cartItem.qty) return this.ui.openSnackbar('Out of Stock.');

    cartItem.qty += 1;
    let total = cartData.total + cartItem.product.sellingPrice;
    oldItems[removedIndex] = cartItem;
    cartData = { ...cartData, items: oldItems, total };
    if (this.ui.isBrowser) localStorage.setItem('cartData', JSON.stringify(cartData));

    this.ui.openSnackbar('Item Quantity Increases!');
    this.cartData$.next(cartData);
    return { removedIndex, cartItem, total };
  }

  decreaseCartItemQty(id: string) {
    let cartData = this.getCartDataInLS();
    if (!cartData) return;
    let oldItems: any[] = [...cartData.items];
    let removedIndex = cartData.items.findIndex((c) => c.product._id == id);
    if (removedIndex < 0) return;
    let cartItem = cartData.items[removedIndex];

    if (!cartItem.qty) return;

    if (cartItem.qty == 1) return this.removeItemToCart(id);
    cartItem.qty -= 1;
    oldItems[removedIndex] = cartItem;
    let total = cartData.total - cartItem.product.sellingPrice;
    console.log(total, cartData.total, cartItem.product.sellingPrice);
    cartData = { ...cartData, items: oldItems, total };
    if (this.ui.isBrowser) localStorage.setItem('cartData', JSON.stringify(cartData));

    this.ui.openSnackbar('Item Quantity Decreases!');
    this.cartData$.next(cartData);
    return { removedIndex, cartItem, total };
  }

  clearCart() {
    if (!this.ui.isBrowser) return;
    localStorage.setItem('cartData', JSON.stringify({ items: [], total: 0 }));
    this.ui.openSnackbar('Cart Cleared!');
    this.cartData$.next({ items: [], total: 0 });
  }

  getCartDataInLS() {
    if (!this.ui.isBrowser) return;
    let cartData = localStorage.getItem('cartData');
    let data: CartData = { items: [], total: 0 };
    if (cartData) data = JSON.parse(cartData);
    this.cartData$.next(data);
    return data;
  }

  storeCartItemToDB() {
    let cartData = this.getCartDataInLS();
    if (!cartData) return;
    let items = cartData?.items.map((v) => ({ productId: v.product._id, size: v.size, quantity: v.qty ,coupleName:v.coupleName ,customization:v.customization}));
    this.http.post(`${environment.apiUrl}/cart/bulk-products`, { items }).subscribe((rs) => console.log('saved Data'));
  }

  isInCart(id: string, size: string) {
    return this.cartData$.value.items.find((v) => v.product._id == id && v.size == size) ? true : false;
  }
}
