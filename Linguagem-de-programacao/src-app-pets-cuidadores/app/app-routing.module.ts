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
    path: 'pets/cadastro-pet',
    loadChildren: () => import('./pets/cadastro-pet/cadastro-pet.module').then( m => m.CadastroPetPageModule)
  },
  {
    path: 'pets/alterar-pet/:id',
    loadChildren: () => import('./pets/alterar-pet/alterar-pet.module').then( m => m.AlterarPetPageModule)
  },
  {
    path: 'cuidador',
    loadChildren: () => import('./cuidador/cuidador.module').then( m => m.CuidadorPageModule)
  },
  {
    path: 'pgs-cuidador/cadastro-cuidador',
    loadChildren: () => import('./pgs-cuidador/cadastro-cuidador/cadastro-cuidador.module').then( m => m.CadastroCuidadorPageModule)
  },
  {
    path: 'pgs-cuidador/alterar-cuidador/:id',
    loadChildren: () => import('./pgs-cuidador/alterar-cuidador/alterar-cuidador.module').then( m => m.AlterarCuidadorPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
