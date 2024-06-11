import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, public router : Router) { }

  qntDias: any;
  valorDiaria: any;
  valorPagar: any;

  ngOnInit() {
    this.valorPagar = this.activatedRoute.snapshot.paramMap.get('valorPagar');
    this.qntDias = this.activatedRoute.snapshot.paramMap.get('qntDias')
    this.valorDiaria = this.activatedRoute.snapshot.paramMap.get('valorDiaria')
  }

  confirmar(){
    this.router.navigateByUrl
    (`/tela-mensagem/${this.valorPagar}`)
  }
}
