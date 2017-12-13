import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ScanPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-payment',
  templateUrl: 'scan-payment.html',
})
export class ScanPaymentPage {
  consumeNum:number ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPaymentPage');
  }

  closeModal(){
    console.log(this.consumeNum);
    this.viewCtrl.dismiss();
  }

}
