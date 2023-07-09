import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-lawyer',
  templateUrl: './update-lawyer.component.html',
  styleUrls: ['./update-lawyer.component.css']
})
export class UpdateLawyerComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
