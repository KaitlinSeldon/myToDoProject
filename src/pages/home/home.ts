import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, ModalController } from 'ionic-angular';
import { NewItemPage } from '../new-item/new-item'
=======
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../app/services/authService';
>>>>>>> ab635d114c843f081e0f27ebf10eafa393d54920

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService]
})
export class HomePage {
<<<<<<< HEAD
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
=======
  username: string;
  password: string;
  
  constructor(
    public auth: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams) { }

    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
    }
}
>>>>>>> ab635d114c843f081e0f27ebf10eafa393d54920
