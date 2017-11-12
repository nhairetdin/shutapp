import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class DataserviceProvider {
  accountCreatedStatus: number;
  room: string;

  constructor(public fireauth: AngularFireAuth) {
    this.setRoom('Room 1');
  }

  setRoom(room: string) {
    this.room = room;
  }
}
