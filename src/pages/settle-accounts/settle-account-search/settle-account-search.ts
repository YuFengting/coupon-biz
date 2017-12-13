import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the SettleAccountSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settle-account-search',
  templateUrl: 'settle-account-search.html',
})
export class SettleAccountSearchPage {

  searchContent:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettleAccountSearchPage');
  }

  searchStoreName(){
    this.searchContent = true;
  }

  goPrevPage(){
    this.app.goBack();
  }
}
