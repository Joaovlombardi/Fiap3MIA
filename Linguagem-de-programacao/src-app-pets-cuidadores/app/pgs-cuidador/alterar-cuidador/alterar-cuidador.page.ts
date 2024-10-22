import { Component, OnInit } from '@angular/core';
import { CuidadorService } from 'src/app/services/cuidador.service';
import { Cuidador } from 'src/app/models/Cuidador';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-alterar-cuidador',
  templateUrl: './alterar-cuidador.page.html',
  styleUrls: ['./alterar-cuidador.page.scss'],
})
export class AlterarCuidadorPage implements OnInit {

  cuidador : Cuidador = new Cuidador();

  constructor(
    private cuidadorService : CuidadorService,
    private route : Router,
    private rotaAtiva : ActivatedRoute
  ) { 
    this.cuidador.id = this.rotaAtiva.snapshot.params['id']
  }

  ngOnInit() {
    this.cuidadorService.buscarPorId(this.cuidador.id).subscribe((dados: any)=> {
      this.cuidador.nome = dados["nome"]
      this.cuidador.telefone = dados["telefone"]
      this.cuidador.exp = dados["exp"]
      this.cuidador.especialidades = dados["especialidades"]
    })
  }

  salvar(){
    this.cuidadorService.alterar(this.cuidador)
    this.route.navigateByUrl("/cuidador")
  }

}
