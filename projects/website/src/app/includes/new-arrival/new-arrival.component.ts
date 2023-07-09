import { Component, Input, OnInit } from '@angular/core';
import { GetAppHome, Product } from '../../pages/welcome/models/app-home.response';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css'],
})
export class NewArrivalComponent implements OnInit {
  products: Product[] = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getNewArrivalsProducts().subscribe((rs) => {
      this.products = rs.data.docs;
    });
  }


}
