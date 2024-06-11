import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-mensagem',
  templateUrl: './tela-mensagem.page.html',
  styleUrls: ['./tela-mensagem.page.scss'],
})
export class TelaMensagemPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, public router : Router) { }

  valorPagar:any;

  ngOnInit() {
    this.valorPagar = this.activatedRoute.snapshot.paramMap.get('valorPagar');
  }
}
