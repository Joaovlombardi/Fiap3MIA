import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pinFormatter(value: number) {
    return `${value} Dias`;
  }

  valorDiaria=0
  qntDias=0
  valorPagar=0

  constructor(public router : Router) {}

  telaValor(){
    this.valorPagar = this.valorDiaria * this.qntDias
    this.router.navigateByUrl
    (`/tela-confirmar/${this.qntDias}/${this.valorDiaria}/${this.valorPagar}`)
  }

}
