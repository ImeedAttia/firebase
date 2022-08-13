import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import { addDoc, CollectionReference, deleteDoc, DocumentData, updateDoc } from 'firebase/firestore';

interface users {
  id:string
  name: string,
  prenom : string
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user ={
    name: 'riadh',
    prenom: 'attia'
  }
  public data :any=[]
  item$: Observable<any[]> | undefined;
  item: any=[];
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
  ngOnInit(): void {
  }

}
