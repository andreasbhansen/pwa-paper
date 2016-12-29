import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  post: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    const { data } = navParams.get('post');
    this.post = data;
  }

  ionViewDidLoad() {

  }

}
