import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-tela-criptografia',
  templateUrl: './tela-criptografia.page.html',
  styleUrls: ['./tela-criptografia.page.scss'],
})
export class TelaCriptografiaPage implements OnInit {

  nomeCriptografado: any;
  emailCriptografado: any;
  notaCriptografado: any;
  secretKey : string = '';
  nome: string = '';
  email: string = '';
  nota: string = '';


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nomeCriptografado = this.activatedRoute.snapshot.paramMap.get('nomeCriptografado')
    this.emailCriptografado = this.activatedRoute.snapshot.paramMap.get('emailCriptografado')
    this.notaCriptografado = this.activatedRoute.snapshot.paramMap.get('notaCriptografado')
  }

  descripografar(){
    if (this.nomeCriptografado && this.emailCriptografado && this.notaCriptografado && this.secretKey) {
      const bytes1 = CryptoJS.AES.decrypt(this.nomeCriptografado, this.secretKey);
      const bytes2 = CryptoJS.AES.decrypt(this.emailCriptografado, this.secretKey);
      const bytes3 = CryptoJS.AES.decrypt(this.notaCriptografado, this.secretKey);
      const nomeDescriptografado = bytes1.toString(CryptoJS.enc.Utf8);
      const emailDescriptografado = bytes2.toString(CryptoJS.enc.Utf8);
      const notaDescriptografado = bytes3.toString(CryptoJS.enc.Utf8);
      this.nome = nomeDescriptografado;
      this.email = emailDescriptografado;
      this.nota = notaDescriptografado;
    }
  }

}
