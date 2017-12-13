import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }

  goMyShops(){
    this.app.getRootNav().push('MyShopsPage');
  }
  goMyMsg(){
    this.app.getRootNav().push('MyMsgPage');
  }
  goMyHelp(){
    this.app.getRootNav().push('MyHelpPage');
  }
  goSetting(){
    this.app.getRootNav().push('SettingPage');
  }

}
