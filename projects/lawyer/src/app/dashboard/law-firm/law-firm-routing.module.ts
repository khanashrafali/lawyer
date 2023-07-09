import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawFirmListComponent } from './law-firm-list/law-firm-list.component';
import { AddLawFirmComponent } from './add-law-firm/add-law-firm.component';
import { UpdateLawFirmComponent } from './update-law-firm/update-law-firm.component';

const routes: Routes = [
  {path: '', component: LawFirmListComponent},
  {path: 'add', component: AddLawFirmComponent},
  {path: 'update/:lawFirmId', component: UpdateLawFirmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawFirmRoutingModule { }
