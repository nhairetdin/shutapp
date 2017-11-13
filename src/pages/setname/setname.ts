import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-setname',
  templateUrl: 'setname.html',
})
export class SetnamePage {
  email: string;
  displayName: string;

  constructor(public userdata: DataserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.userdata.fireauth.auth.currentUser.email;
  }

  setDisplayName() {
    if(this.displayName != null && this.displayName !== '') {
      this.userdata.fireauth.auth.currentUser.updateProfile({
        displayName: this.displayName,
        photoURL: ''
      });
      return true;
    } else {
      return false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetnamePage');
  }

  openChatPage() {
    if(this.setDisplayName()) {
      this.navCtrl.setRoot('RoomsmenuPage');
    }
  }
}
