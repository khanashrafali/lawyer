import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-law-firm',
  templateUrl: './update-law-firm.component.html',
  styleUrls: ['./update-law-firm.component.css']
})
export class UpdateLawFirmComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
