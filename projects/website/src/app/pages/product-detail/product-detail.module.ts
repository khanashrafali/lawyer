import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductDetailComponent } from './product-detail.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { ProductItemModule } from '../../components/product-item/product-item.module';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    ProductDetailComponent,
    SimilarProductsComponent,
    ProductSliderComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgImageSliderModule,
    NgxImageZoomModule,
    MaterialModule,
    ProductItemModule,
    StarRatingModule

  ],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
