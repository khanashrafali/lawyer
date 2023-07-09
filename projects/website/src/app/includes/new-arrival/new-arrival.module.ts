import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductItemModule } from '../../components/product-item/product-item.module';
import { NewArrivalComponent } from './new-arrival.component';

@NgModule({
  declarations: [NewArrivalComponent],
  imports: [CommonModule, RouterModule, ProductItemModule],
  exports: [NewArrivalComponent],
})
export class NewArrivalModule {}
