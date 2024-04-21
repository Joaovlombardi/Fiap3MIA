import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pergunta1=""
  pergunta2=""
  pergunta3=""
  res=""

  constructor(public alertcontroller : AlertController) {}

  adivinhar(){
    if(this.pergunta1 == "sim" && this.pergunta2 == "sim" && this.pergunta3 == "sim" ){
       this.res = "Cachorro" 
    }
    else if (this.pergunta1 == "sim" && this.pergunta2 == "sim" && this.pergunta3 == "nao" ){
      this.res = "Coelho" 
    }
    else if (this.pergunta1 == "sim" && this.pergunta2 == "nao" && this.pergunta3 == "nao" ){
      this.res = "Lobo-Marinho" 
    }
    else if (this.pergunta1 == "nao" && this.pergunta2 == "nao" && this.pergunta3 == "nao" ){
      this.res = "Tartaruga" 
    }
    else if (this.pergunta1 == "nao" && this.pergunta2 == "nao" && this.pergunta3 == "sim" ){
      this.res = "Golfinho" 
    }
    else if (this.pergunta1 == "nao" && this.pergunta2 == "sim" && this.pergunta3 == "sim" ){
      this.res = "Elefante" 
    }
    else if (this.pergunta1 == "sim" && this.pergunta2 == "nao" && this.pergunta3 == "sim" ){
      this.res = "Lontra" 
    }
    else if (this.pergunta1 == "nao" && this.pergunta2 == "sim" && this.pergunta3 == "nao" ){
      this.res = "Cobra" 
    }
    this.exibirAlert()
  }

  async exibirAlert(){
    const alert = await this.alertcontroller.create({
      message: `O animal é ${this.res} `
    });
    await alert.present();
  }

}
