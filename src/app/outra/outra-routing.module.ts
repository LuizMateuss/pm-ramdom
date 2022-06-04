import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutraPage } from './outra.page';

const routes: Routes = [
  {
    path: '',
    component: OutraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutraPageRoutingModule {}
