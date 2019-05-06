import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewItemPage } from '../new-item/new-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(NewItemPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
  }

  viewItem(item){

  }

}
