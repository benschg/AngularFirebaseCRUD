import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GreatExperiencesService {

  constructor(private firestore: AngularFirestore) { }

  public form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)
  });

  // tslint:disable-next-line: typedef
  createCoffeeOrder(data) {
  return new Promise<any>((resolve, reject) => {
      this.firestore
          .collection('greatExperiences')
          .add(data)
          .then(res => {}, err => reject(err));
  });
  }
  // tslint:disable-next-line: typedef
  getCoffeeOrders() {
    return this.firestore.collection('greatExperiences').snapshotChanges();
  }
  // tslint:disable-next-line: typedef
  updateCoffeeOrder(data) {
    return this.firestore
        .collection('greatExperiences')
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }

 // tslint:disable-next-line: typedef
 deleteCoffeeOrder(data) {
  return this.firestore
      .collection('greatExperiences')
      .doc(data.payload.doc.id)
      .delete();
  }

}
