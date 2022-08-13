import { Component } from '@angular/core';
import { Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { addDoc, CollectionReference, deleteDoc, DocumentData, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
interface users {
  id:string
  name: string,
  prenom : string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firebase';
  public data :any=[]
  item$: Observable<any[]> | undefined;
  item: any=[];

  user ={
    name: 'riadh',
    prenom: 'attia'
  }

  private collections: CollectionReference<DocumentData>;
  constructor(public firestore: Firestore) {
    this.collections = collection(this.firestore, 'users')
    this.getdata()
}

getdata(){
  this.item$ = collectionData(this.collections,{  idField: 'id'}) as Observable<users[]>;
}

changedata(id:any,input:any){
  console.log(id)
  updateDoc(doc(this.firestore,'users',id),{name:input.value})
}

delete(id:any){
 deleteDoc( doc(this.firestore,'users',id));
}

create() {
  addDoc(this.collections, this.user);
}


}




