import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() slider?: any[];
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (isPlatformBrowser(platformId)) this.isBrowser = true;
  }

  ngOnInit(): void {
    if (this.isBrowser) this.setUpSlider();
  }

  setUpSlider() {
    setTimeout(() => {
      $('document').ready(function () {
        $('.sliderCont').flexslider({
          animation: 'fade',
          // Primary Controls
          controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
          directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
          prevText: '<i class="fa fa-angle-left"></i>', //String: Set the text for the "previous" directionNav item
          nextText: '<i class="fa fa-angle-right"></i>', //String: Set the text for the "next" directionNav item
        });
      });
    }, 10);
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
