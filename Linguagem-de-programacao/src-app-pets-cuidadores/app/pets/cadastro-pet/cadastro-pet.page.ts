import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/Pets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.page.html',
  styleUrls: ['./cadastro-pet.page.scss'],
})
export class CadastroPetPage implements OnInit {

  pet : Pets = new Pets();

  constructor(
    private petsService : PetsService,
    private route : Router
  ) { }

  ngOnInit() {
  }

  salvar(){
    this.petsService.salvar(this.pet)
    this.route.navigateByUrl("/")
  }

}
