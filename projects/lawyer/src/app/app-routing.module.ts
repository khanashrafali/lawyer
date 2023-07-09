import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { Page500Component } from './components/page500/page500.component';

const routes: Routes = [
  { path: 'error', component: Page500Component },
  { path: '', redirectTo: 'law-firm', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
