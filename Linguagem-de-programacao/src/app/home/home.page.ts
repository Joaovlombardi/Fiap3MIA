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
  valorPagar = 0

  constructor(public router : Router) {}

  calcValor(){
    this.valorPagar = this.prestacao * (1 + this.taxa) ^ this.meses
    this.router.navigateByUrl
    (`/tela-valores/${this.valorPagar}`)

  }

}
