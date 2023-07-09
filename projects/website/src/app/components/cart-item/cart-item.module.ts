import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';

@NgModule({
  declarations: [CartItemComponent],
  imports: [CommonModule],
  exports: [CartItemComponent],
})
export class CartItemModule {}
