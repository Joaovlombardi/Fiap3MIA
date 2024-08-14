import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  pinFormatter(value: number) {
    return `${value}%`;
  }

  prestacao = 0
  taxa = 0
  meses = 0

  constructor(public router : Router) {}

  calcValor(){

    let i = 0;

    while(i < this.meses){
      this.prestacao = ((this.prestacao / 100) * this.taxa) + this.prestacao
      i++
    }

    this.router.navigateByUrl
    (`/tela-valores/${this.prestacao}`)

    this.prestacao = 0;
  }
}
