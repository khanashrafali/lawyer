import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.css'],
})
export class CaseListComponent implements OnInit {
  page: number = 1;
  pageSize: number = 10;
  pageData: { count: number; docs: any[] } = {
    count: 0,
    docs: [
      {
        id: 1,
        name: 'Template 1',
        case: 'Case 1',
        template_no: 432,
        active: true,
        created_at: '2023-07-09',
      },
      {
        id: 2,
        name: 'Template 2',
        case: 'Case 2',
        template_no: 123,
        active: false,
        created_at: '2023-07-08',
      },
      {
        id: 3,
        name: 'Template 3',
        case: 'Case 3',
        template_no: 567,
        active: true,
        created_at: '2023-07-07',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
