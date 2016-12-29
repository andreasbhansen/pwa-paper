import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http: Http) { }

  loadData() {
    return new Promise((resolve, reject) => {
      this.http.get('https://www.reddit.com/r/Art/.json')
        .map(res => res.json())
        .subscribe(
          posts => {
            resolve(posts);
          },
          err => {
            console.log('Loading of data failed, error', err)
          }
        );
    });
  }

}
