import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DataserviceProvider } from '../providers/dataservice/dataservice';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

var config = {
    apiKey: "AIzaSyDdVtElAUTf0uUAXtzpEMTTvGUZ-aLB8a8",
    authDomain: "chatapp-c3701.firebaseapp.com",
    databaseURL: "https://chatapp-c3701.firebaseio.com",
    projectId: "chatapp-c3701",
    storageBucket: "chatapp-c3701.appspot.com",
    messagingSenderId: "793086936188"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataserviceProvider
  ]
})
export class AppModule {}
