import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-role-access',
  templateUrl: './add-role-access.component.html',
  styleUrls: ['./add-role-access.component.css']
})
export class AddRoleAccessComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
