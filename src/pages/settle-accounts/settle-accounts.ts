import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the SettleAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settle-accounts',
  templateUrl: 'settle-accounts.html',
})
export class SettleAccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettleAccountsPage');
  }
  goDetailPage(){
    this.app.getRootNav().push('SettleAccountDetailPage');
  }

}
