import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  brands: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService
      .getBrands({ page: 1, pageSize: 5 })
      .then((rs) => (this.brands = rs.data.docs))
      .catch((err) => console.log(err));
  }
  getFilter(id:any){
    return {
     filterData:JSON.stringify({brands:[id]}) 
    } 
   }
}
