import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  altura="";
  peso=0;
  radioSelecionada="";

  constructor(public alertcontroller: AlertController){}

  calcularPesoIdeal(){
    if (this.radioSelecionada == "masculino"){
      this.peso = 72.7 * parseFloat(this.altura) - 58
    }
    else if (this.radioSelecionada == "feminino"){
      this.peso = 62.1 * parseFloat(this.altura) - 44.7
    }
    this.exibirAlert();
  }

  async exibirAlert(){
    const alert = await this.alertcontroller.create({
      header: 'APP Peso Ideal',
      message: `${this.peso.toFixed(1)}`
    })

    await alert.present();

  }

}
