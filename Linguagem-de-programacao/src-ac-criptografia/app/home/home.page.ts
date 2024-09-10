import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = '';
  email: string = '';
  nota: string = '';
  secretKey: string = '';
  nomeCriptografado: string = '';
  emailCriptografado: string = '';
  notaCriptografado: string = '';

  constructor(public router: Router) {}

  criptografrar() {
    if (this.nome && this.email && this.nota && this.secretKey) {
      const criptografarNome = CryptoJS.AES.encrypt(this.nome,this.secretKey).toString();
      const criptografarEmail = CryptoJS.AES.encrypt(this.email,this.secretKey).toString();
      const criptografarNota = CryptoJS.AES.encrypt(this.nota,this.secretKey).toString();

      this.nomeCriptografado = criptografarNome;
      this.emailCriptografado = criptografarEmail;
      this.notaCriptografado = criptografarNota;

      this.router.navigateByUrl
      (`tela-criptografia/${this.nomeCriptografado}/${this.emailCriptografado}/${this.notaCriptografado}`);
    }
  }

}
