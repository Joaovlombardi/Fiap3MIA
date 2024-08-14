import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaValoresPageRoutingModule } from './tela-valores-routing.module';

import { TelaValoresPage } from './tela-valores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaValoresPageRoutingModule
  ],
  declarations: [TelaValoresPage]
})
export class TelaValoresPageModule {}
