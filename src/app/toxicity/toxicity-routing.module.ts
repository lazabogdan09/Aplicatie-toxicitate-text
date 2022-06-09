import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToxicityComponent } from './toxicity.component';

const routes: Routes = [
  {
    path: '',
    component: ToxicityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToxicityRoutingModule { }
