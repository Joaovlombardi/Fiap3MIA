import { Component, OnInit } from '@angular/core';
import { CuidadorService } from '../services/cuidador.service';
import { Cuidador } from '../models/Cuidador';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cuidador',
  templateUrl: 'cuidador.page.html',
  styleUrls: ['cuidador.page.scss'],
})
export class CuidadorPage implements OnInit{

  public listaCuidador : Cuidador[] = [];

  constructor(private cuidadorService : CuidadorService,
              private alertController : AlertController) {}

  ngOnInit(){
    this.buscarCuidador()
  }

  buscarCuidador(){
    this.cuidadorService.buscarCuidador ().subscribe(dadosRetorno => {
      this.listaCuidador = dadosRetorno.map((registro : any) =>(
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()["nome"],
          telefone: registro.payload.doc.data()["telefone"],
          exp: registro.payload.doc.data()["exp"],
          especialidades : registro.payload.doc.data()["especialidades"]
        }
      ));
    });
  }

  async deletarCuidador(id: string){
    const alert = await this.alertController.create({
      header: "Confirmar a exclusão deste Cuidador?",
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
            this.cuidadorService.deletar(id)
          }
        }
      ]
    })
    await alert.present()
    this.buscarCuidador
  }
}
