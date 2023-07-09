import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleAccessRoutingModule } from './role-access-routing.module';
import { AddRoleAccessComponent } from './add-role-access/add-role-access.component';
import { RoleAccessListComponent } from './role-access-list/role-access-list.component';
import { UpdateRoleAccessComponent } from './update-role-access/update-role-access.component';


@NgModule({
  declarations: [
    AddRoleAccessComponent,
    RoleAccessListComponent,
    UpdateRoleAccessComponent
  ],
  imports: [
    CommonModule,
    RoleAccessRoutingModule
  ]
})
export class RoleAccessModule { }
