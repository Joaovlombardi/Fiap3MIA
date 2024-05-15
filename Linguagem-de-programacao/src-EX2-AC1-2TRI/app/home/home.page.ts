import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    pinFormatter(value: number) {
      return `${value}%`;
    }

    resultado: number[] = [0, 0, 0];
    valorProduto: number[] = [0, 0, 0];
    desconto: number[] = [0, 0, 0];

  constructor() {}

  calcularValor(){
    this.resultado[0] = this.valorProduto[0] - (this.valorProduto[0] * this.desconto[0] / 100);
    return this.resultado[0]
  }

  calcularValor1(){
    this.resultado[1] = this.valorProduto[1] - (this.valorProduto[1] * this.desconto[1] / 100);
    return this.resultado[1]
  }

  calcularValor2(){
    this.resultado[2] = this.valorProduto[2] - (this.valorProduto[2] * this.desconto[2] / 100);
    return this.resultado[2]
  }

}
