import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-law-firm',
  templateUrl: './add-law-firm.component.html',
  styleUrls: ['./add-law-firm.component.css']
})
export class AddLawFirmComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
