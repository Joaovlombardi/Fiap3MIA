import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  km=""
  modalidade=""
  res=0
  app=0
  motorista=0

  constructor(
    public alertcontroller : AlertController
  ) {}

  calcular(){

    if(this.modalidade == "normal"){
      this.res = parseFloat(this.km)* 2.5 + 5;
    }
    else if(this.modalidade == "superior"){
      this.res = parseFloat(this.km)* 3.5 + 7,5;
    }
    else if(this.modalidade == "vip"){
      this.res = parseFloat(this.km)* 5.5 + 10;
    }

    if(this.res < 150){
      this.app = this.res * 0.25
      this.motorista = this.res * 0.75
    }
    else if(this.res > 150){
      this.app = this.res * 0.20
      this.motorista = this.res * 0.80
    }
    this.exibirAlert()
  }

  async exibirAlert(){
    const alert = await this.alertcontroller.create({
      message: `O preço da viagem é de ${this.res},
      já o valor do motorista ficou ${this.motorista},
       e o valor para o aplicativo fica ${this.app} `
    });
    await alert.present();
  }

}
