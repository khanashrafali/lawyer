import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncludeModule } from '../../includes/include.module';
import { NewArrivalModule } from '../../includes/new-arrival/new-arrival.module';
import { NewArrival2Module } from '../../includes/new-arrival2/new-arrival2.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, IncludeModule, NewArrival2Module, NewArrivalModule],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
