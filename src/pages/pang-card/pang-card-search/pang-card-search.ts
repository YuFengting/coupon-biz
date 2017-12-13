import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the PangCardSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pang-card-search',
  templateUrl: 'pang-card-search.html',
})
export class PangCardSearchPage {

  searchContent:boolean = false;
  pangCardLists:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
    this.pangCardLists =[
      {
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'今天  12:35'
      },{
        name:'李珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'12-07  12:35'
      },{
        name:'名字很长就隐藏',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'12-05  12:35'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettleAccountSearchPage');
  }

  searchStoreName(){
    this.searchContent = true;
  }
  goCardInfor(){
    this.app.getRootNav().push('CardInforPage');
  }


}
