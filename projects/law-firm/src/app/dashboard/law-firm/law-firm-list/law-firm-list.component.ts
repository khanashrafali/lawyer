import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-law-firm-list',
  templateUrl: './law-firm-list.component.html',
  styleUrls: ['./law-firm-list.component.css']
})
export class LawFirmListComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;
  pageData: { count: number; docs: [] } = { count: 0, docs: [] };

  constructor() { }

  ngOnInit(): void {
  }

}
