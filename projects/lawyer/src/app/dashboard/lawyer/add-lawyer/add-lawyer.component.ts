import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-lawyer',
  templateUrl: './add-lawyer.component.html',
  styleUrls: ['./add-lawyer.component.css']
})
export class AddLawyerComponent implements OnInit {

  

  constructor(public location: Location) { }


  ngOnInit(): void {
  }

}
