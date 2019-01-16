import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { interest } from '../../models/interest';


@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  data: any;
  salary: number;
  year: number;
  public datadok: interest[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  salarydok() {
    this.http.post("http://localhost:5000/api/Salary",
      {
        Salary: this.salary,
        Dok: this.data,
        Year: this.year,
      }).subscribe(
        it => {
          this.http.get<interest[]>("http://localhost:5000/api/Salary").subscribe(
            it => {
              this.datadok = it
            });
          console.log('success')
        });

  }

}
