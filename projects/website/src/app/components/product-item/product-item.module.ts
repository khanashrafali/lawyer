import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { MaterialModule } from '../../shared/material.module';
import { ProductItemComponent } from './product-item.component';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [CommonModule, RouterModule, MaterialModule, StarRatingModule],
  exports: [ProductItemComponent],
})
export class ProductItemModule {}
