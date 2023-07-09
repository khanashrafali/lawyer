import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { Ads1Component } from './ads1/ads1.component';
import { Ads2Component } from './ads2/ads2.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    Carousel2Component,
    Ads1Component,
    Ads2Component,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    Carousel2Component,
    Ads1Component,
    Ads2Component,
  ],
})
export class IncludeModule {}
