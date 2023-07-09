import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Datum } from '../pages/product-detail/models/getProduct.response';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  wishData$: BehaviorSubject<Datum[]> = new BehaviorSubject<Datum[]>([]);

  constructor(private http: HttpClient, private ui: UiService) {}

  addItemToWishList(item: any) {
    let wishData = this.getwishListDataInLS();
    let existIndex = wishData.findIndex((ci: any) => ci._id == item._id);

    if (existIndex > -1) wishData = wishData.filter((v: any) => v._id != item._id);
    else wishData = [...wishData, item];

    if (this.ui.isBrowser) localStorage.setItem('wishListData', JSON.stringify(wishData));

    this.ui.openSnackbar(`Item ${existIndex > -1 ? 'Removed' : 'Added'}  To WishList!`);
    this.wishData$.next(wishData);
  }

  removeItemToWishList(id: string) {
    let wishData = this.getwishListDataInLS();
    let oldItems = [...wishData];
    let updatedList = oldItems.filter((c) => c._id != id);
    let removedIndex = oldItems.findIndex((c: any) => c._id == id);

    if (removedIndex < 0) return;
    if (this.ui.isBrowser) localStorage.setItem('wishListData', JSON.stringify(updatedList));

    this.ui.openSnackbar('Item Removed From WishList!');
    this.wishData$.next(updatedList);
    return { removedIndex };
  }

  clearWishList() {
    if (!this.ui.isBrowser) return;
    localStorage.setItem('wishListData', JSON.stringify([]));
    this.ui.openSnackbar('WishList Cleared!');
    this.wishData$.next([]);
  }

  getwishListDataInLS() {
    if (!this.ui.isBrowser) return;
    let data = [];
    let cartData = localStorage.getItem('wishListData');
    if (cartData) data = JSON.parse(cartData);
    this.wishData$.next(data);
    return data;
  }

  isInWishList(id: string) {
    return this.wishData$.value.find((v) => v._id == id) ? true : false;
  }
}
