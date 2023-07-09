import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component implements OnInit {
  @Input() slider?: any[];
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (isPlatformBrowser(platformId)) this.isBrowser = true;
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      $('document').ready(function () {
        $('.d-carousel-cener').owlCarousel({
          center: true,
          items: 5,
          loop: true,
          nav: true,
          margin: 10,
          responsive: {
            0: { items: 1, nav: true },
            600: { items: 3, nav: true },
            1000: { items: 4, nav: true },
          },
        });
      });
    },5);
  }

  getSrcSet(file: any) {
    return [
      { file: file.xlg, width: '1400px' },
      { file: file.lg, width: '1200px' },
      { file: file.md, width: '800px' },
      { file: file.sm, width: '600px' },
      { file: file.xs, width: '200px' },
    ];
  }
}
