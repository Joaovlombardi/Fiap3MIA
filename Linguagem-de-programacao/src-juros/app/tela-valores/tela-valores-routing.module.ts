import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaValoresPage } from './tela-valores.page';

const routes: Routes = [
  {
    path: '',
    component: TelaValoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaValoresPageRoutingModule {}
