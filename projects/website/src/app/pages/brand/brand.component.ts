import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandData: any[] = [];
  pageData?: any;
  slider2: any[] = [];
  isLoading: boolean = true;

  constructor(private appService:AppService,private ui:UiService) { }

  ngOnInit(): void {
    this.pageData = null;
    this.appService
    this.appService.getBrands().then((rs:any)=>{
      // console.log("categ",rs);
      this.brandData =rs.data.docs;
      this.pageData = rs.data;
    if (!this.ui.isBrowser) return;
      setTimeout(() => {
        window.scroll(0,0)
      }, 100);
    }).catch((err) => console.log(err));
  }

}
