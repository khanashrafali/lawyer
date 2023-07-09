import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemV1Component } from './product-item-v1.component';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [ProductItemV1Component],
  imports: [CommonModule, RouterModule, MaterialModule, StarRatingModule],
  exports: [ProductItemV1Component],
})
export class ProductItemV1Module {}
