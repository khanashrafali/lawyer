import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../models/getProduct.response';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product!: Datum;
  constructor() {}

  ngOnInit(): void {}
}
