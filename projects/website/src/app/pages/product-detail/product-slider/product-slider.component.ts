import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Datum } from '../models/getProduct.response';

declare var $: any;

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css'],
})
export class ProductSliderComponent implements OnInit {
  @Input() p?: Datum;
  images: any[] = [];
  selectedImg: number = 0;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (isPlatformBrowser(platformId)) this.isBrowser = true;
  }

  ngOnInit(): void {
    this.images = this.p!.images.map((v) => ({ image: v, thumbImage: v }));

    if (!this.isBrowser) return;

    $(window).load(function () {
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider',
      });

      $('#slider').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#carousel',
      });
    });
  }

  clickOnSlide(e: any) {
    this.selectedImg = e;
  }
}
