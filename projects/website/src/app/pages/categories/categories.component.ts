import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryData: any[] = [];
  slider2: any[] = [];
  pageData?: any;
  isLoading: boolean = true;
  isBrowser: boolean = false;

  constructor(private appService: AppService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.pageData = null;
    this.appService.getCategories().subscribe((rs: any) => {
      // console.log("categ",rs);
      this.categoryData = rs.data.docs;
      this.pageData = rs.data;

      if (this.isBrowser) {
        setTimeout(() => {
          window.scroll(0, 0);
        }, 100);
      }
    });

    // this.slider1 = rs.data.docs[0]?.slides || [];
    // this.slider2 = rs.data.docs[1]?.slides || [];
    // this.isLoading = false;
  }
}
