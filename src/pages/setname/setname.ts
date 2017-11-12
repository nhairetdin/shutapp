import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setname',
  templateUrl: 'setname.html',
})
export class SetnamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetnamePage');
  }

  openChatPage() {
    this.navCtrl.setRoot('RoomsmenuPage');
  }
}
