import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseManagementRoutingModule } from './case-management-routing.module';
import { AddTemplateComponent } from './add-template/add-template.component';
import { AddCaseComponent } from './add-case/add-case.component';
import { CaseListComponent } from './case-list/case-list.component';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AddTemplateComponent, AddCaseComponent, CaseListComponent, ViewComponent],
  imports: [CommonModule, CaseManagementRoutingModule, PaginationModule, AngularEditorModule],
})
export class CaseManagementModule {}
