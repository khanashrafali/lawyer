import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page500',
  templateUrl: './page500.component.html',
  styleUrls: ['./page500.component.css'],
})
export class Page500Component implements OnInit {
  message = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((rs: any) => {
      if (rs.message) {
        this.message = rs.message;
      }
    });
  }
}
