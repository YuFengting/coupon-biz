import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the MyHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-help',
  templateUrl: 'my-help.html',
})
export class MyHelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyHelpPage');
  }

  goReceivablesHelp(){
    this.app.getRootNav().push('ReceivablesHelpPage');
  }

  goObligationHelp(){
    this.app.getRootNav().push('ObligationHelpPage');
  }

}
