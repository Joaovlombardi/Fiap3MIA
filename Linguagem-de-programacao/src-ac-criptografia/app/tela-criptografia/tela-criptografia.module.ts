import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCriptografiaPageRoutingModule } from './tela-criptografia-routing.module';

import { TelaCriptografiaPage } from './tela-criptografia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCriptografiaPageRoutingModule
  ],
  declarations: [TelaCriptografiaPage]
})
export class TelaCriptografiaPageModule {}
