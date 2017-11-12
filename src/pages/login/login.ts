import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  msg: string;

  constructor(public userdata: DataserviceProvider, private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  openRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  signIn() {
    this.userdata.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(data => {
        this.app.getRootNav().setRoot('SetnamePage');
      })
      .catch(error => {
        this.msg = "Failed to login.";
      });
  }
}
