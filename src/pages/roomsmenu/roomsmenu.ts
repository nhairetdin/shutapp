import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-roomsmenu',
  templateUrl: 'roomsmenu.html',
})
export class RoomsmenuPage {
  rootPage = "ChatPage";

  constructor(public event: Events, public data: DataserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsmenuPage');
  }

  setRoom(room: string) {
    this.data.setRoom(room);
    this.event.publish("roomChange", 1);
  }
}
