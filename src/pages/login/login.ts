import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  openRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  moveToChatPage() {
    this.app.getRootNav().setRoot('SetnamePage');
    // this.navCtrl.setRoot('ChatPage');
  }
}
