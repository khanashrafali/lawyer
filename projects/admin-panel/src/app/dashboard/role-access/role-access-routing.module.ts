import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAccessListComponent } from './role-access-list/role-access-list.component';
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';
import { UpdateRoleAccessComponent } from './update-role-access/update-role-access.component';

const routes: Routes = [
  {path: '', component: RoleAccessListComponent},
  {path: 'add', component: AddRoleAccessComponent},
  {path: 'update/:roleAccessId', component: UpdateRoleAccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleAccessRoutingModule { }
