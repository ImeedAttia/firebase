import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { addDoc, CollectionReference, deleteDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Client } from '../compnenets/Models/client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private collections: CollectionReference;
  constructor(public firestore: Firestore) {
    this.collections = collection(this.firestore, 'client')
  }

    getData(){
      return collectionData(this.collections,{  idField: 'id'}) as Observable<Client[]>;
    }
    deleteData(id:string){
      deleteDoc(doc(this.firestore,'client',id));
    }
    createData(contact:Client) {
      addDoc(this.collections, contact);
    }
    updateData(input:Client){
      updateDoc(doc(this.firestore,`client/${input.id}`), { ...input })
    }


    

}
