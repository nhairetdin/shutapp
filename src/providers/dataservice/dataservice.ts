import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataserviceProvider {

  room: string;

  constructor() {
    this.setRoom('Room 1');
  }

  setRoom(room: string) {
    this.room = room;
  }
}
