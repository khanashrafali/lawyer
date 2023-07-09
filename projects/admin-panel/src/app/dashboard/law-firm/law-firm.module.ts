import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawFirmRoutingModule } from './law-firm-routing.module';
import { AddLawFirmComponent } from './add-law-firm/add-law-firm.component';
import { LawFirmListComponent } from './law-firm-list/law-firm-list.component';
import { UpdateLawFirmComponent } from './update-law-firm/update-law-firm.component';


@NgModule({
  declarations: [
    AddLawFirmComponent,
    LawFirmListComponent,
    UpdateLawFirmComponent
  ],
  imports: [
    CommonModule,
    LawFirmRoutingModule
  ]
})
export class LawFirmModule { }
