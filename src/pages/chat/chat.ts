import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events} from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  room: string;

  constructor(public event: Events, public data: DataserviceProvider, public menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.room = data.room;
    event.subscribe('roomChange', (num) => {
      console.log(num);
      this.room = this.data.room;
    });
  }

  openSettingsPage() {
    this.navCtrl.push('SettingsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
