import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { NewItemPage } from '../new-item/new-item'
import { AuthService } from './../../app/services/authService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService]
})
export class HomePage {
  username: string;
  password: string;
  public items = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public auth: AuthService,
    public navParams: NavParams
    ) {}

    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
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

  saveItem(item: string){
    this.items.push(item);
  }

  viewItem(item: string){

  }

}

