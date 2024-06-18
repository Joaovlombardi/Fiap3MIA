import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  temp1 = 0
  temp2 = 0
  temp3 = 0
  temp4 = 0
  temp = 0 
  res = 0
  fruta: string[] = [];

  constructor(public router: Router) {}

  calcMedia() {
    this.res = (this.temp1 + this.temp2 + this.temp3 + this.temp4) / 4;

    this.fruta = [];

    if (this.res >= 18 && this.res <= 24) {
      this.fruta.push("Maça");
    } 
    if (this.res >= 26 && this.res <= 30) {
      this.fruta.push("Banana");
    }
    if (this.res >= 25 && this.res <= 30) {
      this.fruta.push("Laranja");
    }
    if (this.res >= 24 && this.res <= 30) {
      this.fruta.push("Manga");
    }
    if (this.res >= 15 && this.res <= 25) {
      this.fruta.push("Morango");
    }
    if (this.res >= 15 && this.res <= 30) {
      this.fruta.push("Uva");
    }
    if (this.res >= 20 && this.res <= 30) {
      this.fruta.push("Abacate");
    }
    if (this.res >= 24 && this.res <= 30) {
      this.fruta.push("Abacaxi");
    }
    if (this.res >= 21 && this.res <= 33) {
      this.fruta.push("Mamão");
    }
    if (this.res >= 25 && this.res <= 30) {
      this.fruta.push("Melancia");
    }

    this.router.navigateByUrl(`/tela-frutas/${this.res}/${this.fruta}`);
  }
}



