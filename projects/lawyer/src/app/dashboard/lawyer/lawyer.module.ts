import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { AddLawyerComponent } from './add-lawyer/add-lawyer.component';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';
import { UpdateLawyerComponent } from './update-lawyer/update-lawyer.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AddLawyerComponent,
    LawyerListComponent,
    UpdateLawyerComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule,
    NgSelectModule
  ]
})
export class LawyerModule { }
