import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from './../../app/services/authService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthService]
})
export class HomePage {
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