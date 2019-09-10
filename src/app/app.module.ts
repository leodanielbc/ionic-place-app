import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { TerceraPage } from '../pages/tercera/tercera';

import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import { LugaresService } from '../services/lugares.service';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDWf8DgxQfOPC7mw5Rn7Fu55nvrmcQYcuE",
    authDomain: "ionicbasicplatzi01.firebaseapp.com",
    databaseURL: "https://ionicbasicplatzi01.firebaseio.com",
    projectId: "ionicbasicplatzi01",
    storageBucket: "ionicbasicplatzi01.appspot.com",
    messagingSenderId: "271965697524",
    appId: "1:271965697524:web:9c1c4f95ea84fc7d"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    AuthService
  ]
})
export class AppModule {}
