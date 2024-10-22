import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/Pets';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-pet',
  templateUrl: './alterar-pet.page.html',
  styleUrls: ['./alterar-pet.page.scss'],
})
export class AlterarPetPage implements OnInit {

  pet : Pets = new Pets();

  constructor(
    private petsService : PetsService,
    private route : Router,
    private rotaAtiva : ActivatedRoute
  ) { 
    this.pet.id = this.rotaAtiva.snapshot.params['id']
  }

  ngOnInit() {
    this.petsService.buscarPorId(this.pet.id).subscribe((dados: any)=> {
      this.pet.nome = dados["nome"]
      this.pet.especie = dados["especie"]
      this.pet.raca = dados["raca"]
      this.pet.idade = dados["idade"]
      this.pet.obs = dados["obs"]
    })
  }

  salvar(){
    this.petsService.alterar(this.pet)
    this.route.navigateByUrl("/")
  }

}
