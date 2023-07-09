import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';
import { UpdateLawyerComponent } from './update-lawyer/update-lawyer.component';
import { AddLawyerComponent } from './add-lawyer/add-lawyer.component';

const routes: Routes = [
  {
    path:'', component:LawyerListComponent
  },
  {
    path: 'add', component: AddLawyerComponent
  },
  {
    path: 'update/:lawerId', component: UpdateLawyerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }
