import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email: string;
  password: string;
  msg: string;

  constructor(public app: App, public userdata: DataserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  createAccount() {
    this.userdata.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(data => {
        this.app.getRootNav().setRoot('SetnamePage')
        console.log("created");
      })
      .catch(error => {
        this.msg = "Failed to register.";
        console.log("not created");
      });
  }
}
