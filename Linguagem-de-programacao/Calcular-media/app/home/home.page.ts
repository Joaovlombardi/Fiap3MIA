import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  nota1="";
  nota2="";
  nota3="";
  nota4="";

  media=0;
  mensagem="";

  calcMedia(){
    this.media=(parseFloat(this.nota1)+parseFloat(this.nota2)+parseFloat(this.nota3)+parseFloat(this.nota4))/4;

    if(this.media <= 2.9){
      this.mensagem="Você está retido";
      console.log(this.mensagem);
    }
    if(this.media >= 3 && this.media < 5.9){
      this.mensagem="Você está de recuperação"
      console.log(this.mensagem);
    }
    if(this.media >= 6){
      this.mensagem="Você está aprovado"
      console.log(this.mensagem);
    }
  }
}
