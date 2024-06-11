import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaMensagemPage } from './tela-mensagem.page';

const routes: Routes = [
  {
    path: '',
    component: TelaMensagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaMensagemPageRoutingModule {}
