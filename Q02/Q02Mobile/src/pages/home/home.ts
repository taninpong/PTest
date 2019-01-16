import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { item } from '../../Models/item';
import { DetaildataPage } from '../detaildata/detaildata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public item: item[];

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ionViewDidEnter() {
    this.http.get<item[]>("http://localhost:5000/api/Cart/GetItem").subscribe(
      it => {
        this.item = it;
      });
  }

  Additem(){
    this.navCtrl.push("CreateitemPage");
  }

  Detail(id){
    this.navCtrl.push("DetaildataPage",{
      dataid:id

    });
  }

}
