import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsResponse } from '../../models/ads.response.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-ads1',
  templateUrl: './ads1.component.html',
  styleUrls: ['./ads1.component.css'],
})
export class Ads1Component implements OnInit {
  ads?: Observable<AdsResponse | null>;
  @Input() slider?: any[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.ads = this.appService.ads;
  }
}
