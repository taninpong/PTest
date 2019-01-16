import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DetaildataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detaildata',
  templateUrl: 'detaildata.html',
})
export class DetaildataPage {
  data: any;
  item: any;
  name: any;
  price: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.data = this.navParams.get('dataid');
    console.log(this.data)

    this.http.get("http://localhost:5000/api/Cart/GetItemDetail/" + this.data).subscribe(
      it => {
        this.item = it
        this.name = this.item.name
        this.price = this.item.price
        console.log('xxxx');
        console.log(this.name);
        console.log(this.price);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetaildataPage');
  }
  createitem(){
    
    this.navCtrl.popToRoot();
  }
}
