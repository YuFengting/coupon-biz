import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the PaymentCodePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-code',
  templateUrl: 'payment-code.html',
})
export class PaymentCodePage {
  // payCode: String = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
    //传入后台返回的参数
    // this.payCode = Utils.genQrCode(this.navParams.get('qrCode'));
  }

}
