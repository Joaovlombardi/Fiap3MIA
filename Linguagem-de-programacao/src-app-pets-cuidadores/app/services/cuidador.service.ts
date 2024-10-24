import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Cuidador } from '../models/Cuidador';

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {

  constructor(private afs: AngularFirestore) { }

  salvar(cuidador : Cuidador) {
    return this.afs.collection('cuidadores').add({ ...cuidador})
  }

  buscarCuidador(){
    return this.afs.collection('cuidadores').snapshotChanges();
  }

  buscarPorId(id : string){
    return this.afs.collection('cuidadores').doc(id).valueChanges();
  }

  alterar(cuidador : Cuidador){
    return this.afs.collection('cuidadores').doc(cuidador.id).update({ ...cuidador})
  }

  deletar(id : string) {
    return this.afs.doc('cuidadores/' + id).delete();
  }
}