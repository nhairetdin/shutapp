import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  nextPage = 'LoginPage';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

}
