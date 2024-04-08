import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ppl=""
  km=""
  combustivel=''
  res=0

  constructor(
    public tostcontroller : ToastController
  ) {}

  calcular(){

    if (this.combustivel == 'etanol') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km) / 9;
    }
    else if (this.combustivel == 'gasolina') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km) / 12;
    }
    else if (this.combustivel == 'diesel') {
      this.res = parseFloat(this.ppl) * parseFloat(this.km) / 15
    }
    this.exibirToast()
    }

    async exibirToast(){
      const toast = await this.tostcontroller.create({
        message: `O valor a pagar pelo combustível é de R$${this.res.toFixed(1)}`
      })
      await toast.present();
    }

  }

