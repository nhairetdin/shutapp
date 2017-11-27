import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class DataserviceProvider {
  accountCreatedStatus: number;
  room: string;
  roomsAsObject: object[] = [];

  constructor(public fireauth: AngularFireAuth, public db: AngularFireDatabase) {
    this.setRoom('Second room');
    this.getRooms();
  }

  setRoom(room: string) {
    this.room = room;
  }

  getMessages() {

  }

  writeMessage(userInput: string) {
    this.db.list(`/${this.room}/messages`).push({
      username: this.fireauth.auth.currentUser.displayName,
      message: userInput
    });
  }

  createRoom(roomName: string) {
    this.db.list('/rooms').push({
      name: roomName
    });
  }

  getRooms() {
    this.db.list('/rooms').subscribe(r => {
      this.roomsAsObject = r;
    });
  }

  printRooms() {
    this.roomsAsObject.forEach(r => {
      console.log(r);
    })
  }
}
