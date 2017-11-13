import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class DataserviceProvider {
  accountCreatedStatus: number;
  room: string;

  constructor(public fireauth: AngularFireAuth, public db: AngularFireDatabase) {

  }

  setRoom(room: string) {
    this.room = room;
  }

  getMessages() {

  }

  writeMessage(userInput: string) {
    this.db.list('/messages').push({
      username: this.fireauth.auth.currentUser.displayName,
      message: userInput
    });
  }
}
