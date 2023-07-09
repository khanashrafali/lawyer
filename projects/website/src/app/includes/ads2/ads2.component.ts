import { Component, OnInit, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AdsResponse } from '../../models/ads.response.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-ads2',
  templateUrl: './ads2.component.html',
  styleUrls: ['./ads2.component.css'],
})
export class Ads2Component implements OnInit {
  ads?: Observable<AdsResponse | null>;
  data:any =[];
  @Input() categories?: any[];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.ads = this.appService.ads; 
    this.appService.getHeading().then((rs)=>{
      this.data =rs.data.docs[0];
    }); 
  }

}
