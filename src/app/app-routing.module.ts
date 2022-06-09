import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'toxicity',
    loadChildren: () =>
      import('./toxicity/toxicity.module').then(mod => mod.ToxicityModule)
  },
  {
    path: '',
    redirectTo: '/toxicity',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/toxicity'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
