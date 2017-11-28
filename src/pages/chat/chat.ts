import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events} from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  room: string;
  userInput: string;
  messages;
  messagesArr: object[] = [];

  constructor(public event: Events, public data: DataserviceProvider, public menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.room = data.room;
    this.roomChange();
    // this.data.db.list(`/${this.data.room}/messages`).subscribe(data => {
    //   this.messagesArr = data;
    // });

    event.subscribe('roomChange', (num) => {
      console.log(num);
      this.room = this.data.room;
      this.roomChange();
      // this.messagesArr = this.data.getMessages();
      // this.data.db.list(`/${this.data.room}/messages`).subscribe(data => {
      //   this.messagesArr = data;
      // });
    });
  }

  roomChange() {
    this.data.db.list(`/${this.data.room}/messages`).subscribe(data => {
      this.messagesArr = data;
    });
  }

  openSettingsPage() {
    this.navCtrl.push('SettingsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMsg() {
    this.data.writeMessage(this.userInput);
    this.userInput = "";
  }
}
