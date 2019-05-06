import { Component } from '@angular/core';
import { AuthService } from './../../app/services/authService';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';


@Component({
  templateUrl: 'tabs.html',
  providers: [AuthService]
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = RegisterPage;

  constructor(
    public auth: AuthService) {
  }
}