import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCaseComponent } from './add-case/add-case.component';
import { CaseListComponent } from './case-list/case-list.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: CaseListComponent,
  },
  {
    path: 'add-template',
    component: AddTemplateComponent,
  },
  {
    path: 'add-case',
    component: AddCaseComponent,
  },
  {
    path: 'view/:caseId',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseManagementRoutingModule {}
