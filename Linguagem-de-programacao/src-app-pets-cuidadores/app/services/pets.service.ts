import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Pets } from '../models/Pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private afs: AngularFirestore) { }

  salvar(pets : Pets) {
    return this.afs.collection('pets').add({ ...pets})
  }

  buscarPets(){
    return this.afs.collection('pets').snapshotChanges();
  }

  buscarPorId(id : string){
    return this.afs.collection('pets').doc(id).valueChanges();
  }

  alterar(pets : Pets){
    return this.afs.collection('pets').doc(pets.id).update({ ...pets})
  }

  deletar(id : string) {
    return this.afs.doc('pets/' + id).delete();
  }
}
