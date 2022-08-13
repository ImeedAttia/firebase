import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData} from '@angular/fire/firestore';
import { addDoc, CollectionReference, deleteDoc, DocumentData, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../compnenets/Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private collections: CollectionReference<Contact>;
  constructor(public firestore: Firestore) {
    this.collections = collection(this.firestore, 'contacts')
  }

  getdata(){
    return collectionData(this.collections,{  idField: 'id'}) as Observable<Contact[]>;
  }
 // get(id: string) {
  //  const pokemonDocumentReference = doc(this.firestore, `pokemon/${id}`);
 //   return docData(pokemonDocumentReference, { idField: 'id' });
 // }
 delete(id:string){
  deleteDoc(doc(this.firestore,'contacts',id));
 }
 create(contact:Contact) {
  addDoc(this.collections, contact);
}
UpdateData(input:Contact){
  updateDoc(doc(this.firestore,`contacts/${input.id}`), { ...input })
}

}
