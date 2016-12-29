import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data-provider';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {

  private posts: Array<any> = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, private data: DataProvider) { }

  ionViewDidLoad() {
    this.data.loadData()
      .then((posts: Array<any>) => {
        this.posts = posts['data']['children'].filter(post => post.data.preview);
      })
      .catch(err => {
        console.log('Error loading data in ionViewDidLoad')
      });
  }

  goToDetailPage(post) {
    this.navCtrl.push(DetailPage, {
      post
    });
  }

}
