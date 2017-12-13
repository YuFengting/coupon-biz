import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardInforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-infor',
  templateUrl: 'card-infor.html',
})
export class CardInforPage {

  cardInfor:{};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cardInfor ={
      cardId:'ss77534390',
      activedCardDate:'开卡日期',
      cardCity:'上海',
      cardName:'张丹',
      phoneNumber:'18735176298',
      cardMoney:'1000'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardInforPage');
  }

}
