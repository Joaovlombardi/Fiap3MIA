import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-confirmar/:qntDias/:valorDiaria/:valorPagar',
    loadChildren: () => import('./tela-confirmar/tela-confirmar.module').then( m => m.TelaConfirmarPageModule)
  },
  {
    path: 'tela-mensagem/:valorPagar',
    loadChildren: () => import('./tela-mensagem/tela-mensagem.module').then( m => m.TelaMensagemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

