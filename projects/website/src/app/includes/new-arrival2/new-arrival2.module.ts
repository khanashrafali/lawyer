import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductItemV1Module } from '../../components/product-item-v1/product-item-v1.module';
import { MaterialModule } from '../../shared/material.module';
import { NewArrival2Component } from './new-arrival2.component';

@NgModule({
  declarations: [NewArrival2Component],
  imports: [CommonModule, RouterModule, MaterialModule, ProductItemV1Module],
  exports: [NewArrival2Component],
})
export class NewArrival2Module {}
