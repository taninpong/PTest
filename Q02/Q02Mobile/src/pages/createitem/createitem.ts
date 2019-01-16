import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CreateitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createitem',
  templateUrl: 'createitem.html',
})
export class CreateitemPage {
  Price: any;
  Name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateitemPage');
  }

  createitem(){
    this.http.post("http://localhost:5000/api/Cart/Post",
    {
      Name: this.Name,
      Price: this.Price,
    }).subscribe(
      it => {
        console.log('success')
      });

    this.navCtrl.popToRoot();
  }

}
