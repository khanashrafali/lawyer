import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-new-arrival2',
  templateUrl: './new-arrival2.component.html',
  styleUrls: ['./new-arrival2.component.css'],
})
export class NewArrival2Component implements OnInit {
  products?: Observable<any[]>;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.products = this.appService.getTopSellingProducts().pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
