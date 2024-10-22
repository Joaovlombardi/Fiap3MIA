import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Pets } from '../models/Pets';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public listaPets: Pets[] = [];

  constructor(private petsService : PetsService,
              private alertController : AlertController) {}

  ngOnInit(){
    this.buscarPets()
  }

  buscarPets(){
    this.petsService.buscarPets().subscribe(dadosRetorno => {
      this.listaPets = dadosRetorno.map((registro : any) =>(
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()["nome"],
          especie: registro.payload.doc.data()["especie"],
          raca: registro.payload.doc.data()["raca"],
          idade : registro.payload.doc.data()["idade"],
          obs: registro.payload.doc.data()["obs"]
        }
      ));
    });
  }

  async deletarPet(id: string){
    const alert = await this.alertController.create({
      header: "Confirmar a exclusão deste Pet?",
      buttons: [
        {
          text : "Não",
          role : "cancel",
          handler: () => {

          }
        },
        {
          text : "Sim",
          role : "confirm",
          handler: () => {
            this.petsService.deletar(id)
          }
        }
      ]
    })
    await alert.present()
    this.buscarPets
  }
}
