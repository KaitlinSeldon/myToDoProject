import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  name: string;

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {

  }

  saveItem(){

    let newItem = {
      title: this.name,
      };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }


}
