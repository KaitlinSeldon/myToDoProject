import { AuthService, User } from './../../app/services/authService';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {
  user: User = {
    username: null,
    password: null,
    first_name: null,
    last_name: null
  }

  constructor(
    public auth: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
}