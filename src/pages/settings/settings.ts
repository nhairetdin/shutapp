import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  displayName: string;

  constructor(public userdata: DataserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  openChatPage() {
    this.navCtrl.setRoot('RoomsmenuPage');
  }

  setDisplayName() {
    if(this.displayName != null && this.displayName !== '') {
      this.userdata.fireauth.auth.currentUser.updateProfile({
        displayName: this.displayName,
        photoURL: ''
      });
      this.navCtrl.pop();
    }
  }
}
