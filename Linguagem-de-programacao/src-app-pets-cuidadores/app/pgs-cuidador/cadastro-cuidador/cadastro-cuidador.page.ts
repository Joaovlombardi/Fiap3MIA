import { Component, OnInit } from '@angular/core';
import { CuidadorService } from 'src/app/services/cuidador.service';
import { Cuidador } from 'src/app/models/Cuidador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidador',
  templateUrl: './cadastro-cuidador.page.html',
  styleUrls: ['./cadastro-cuidador.page.scss'],
})
export class CadastroCuidadorPage implements OnInit {

  cuidador : Cuidador = new Cuidador();

  constructor(
    private cuidadorService : CuidadorService,
    private route : Router
  ) { }

  ngOnInit() {
  }

  salvar(){
    this.cuidadorService.salvar(this.cuidador)
    this.route.navigateByUrl("/cuidador")
  }

}
