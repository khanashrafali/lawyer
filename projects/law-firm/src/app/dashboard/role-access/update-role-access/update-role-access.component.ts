import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-role-access',
  templateUrl: './update-role-access.component.html',
  styleUrls: ['./update-role-access.component.css']
})
export class UpdateRoleAccessComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
