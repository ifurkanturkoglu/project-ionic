import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatspagePage } from './statspage.page';

const routes: Routes = [
  {
    path: '',
    component: StatspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatspagePageRoutingModule {}
