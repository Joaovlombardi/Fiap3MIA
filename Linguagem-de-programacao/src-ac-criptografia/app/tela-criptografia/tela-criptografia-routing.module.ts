import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCriptografiaPage } from './tela-criptografia.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCriptografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCriptografiaPageRoutingModule {}
