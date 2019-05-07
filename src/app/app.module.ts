import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { NewItemPage } from '../pages/new-item/new-item'
=======
import { RegisterPage } from '../pages/register/register';
>>>>>>> ab635d114c843f081e0f27ebf10eafa393d54920


@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    NewItemPage,
    
=======
    RegisterPage,
    TabsPage
>>>>>>> ab635d114c843f081e0f27ebf10eafa393d54920
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    NewItemPage,
   
=======
    RegisterPage,
    TabsPage
>>>>>>> ab635d114c843f081e0f27ebf10eafa393d54920
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
