import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishItemComponent } from './wish-item.component';

@NgModule({
  declarations: [WishItemComponent],
  imports: [CommonModule],
  exports: [WishItemComponent],
})
export class WishItemModule {}
