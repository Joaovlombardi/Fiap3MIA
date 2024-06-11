import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaMensagemPageRoutingModule } from './tela-mensagem-routing.module';

import { TelaMensagemPage } from './tela-mensagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaMensagemPageRoutingModule
  ],
  declarations: [TelaMensagemPage]
})
export class TelaMensagemPageModule {}
