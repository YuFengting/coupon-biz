import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bill',
  templateUrl: 'bill.html',
})
export class BillPage {

  sortArrow:string = 'md-arrow-dropdown';
  currentBox:boolean = false;
  billLists:Array<any>;
  currentFlag:number = 1;
  showAllClassifyMask:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
    this.billLists = [
      {
        billType:'充值-微信充值',
        billMoney:'+2,000.00',
        billDate:'昨天 22:44 '
      },{
        billType:'充值-消费',
        billMoney:'-2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-支付宝充值',
        billMoney:'+2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-微信充值',
        billMoney:'+2,000.00',
        billDate:'昨天 22:44 '
      },{
        billType:'充值-消费',
        billMoney:'-2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-支付宝充值',
        billMoney:'+2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-微信充值',
        billMoney:'+2,000.00',
        billDate:'昨天 22:44 '
      },{
        billType:'充值-消费',
        billMoney:'-2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-支付宝充值',
        billMoney:'+2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-支付宝充值',
        billMoney:'+2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-微信充值',
        billMoney:'+2,000.00',
        billDate:'昨天 22:44 '
      },{
        billType:'充值-消费',
        billMoney:'-2,000.00',
        billDate:'12-06 22:44 '
      },{
        billType:'充值-支付宝充值',
        billMoney:'+2,000.00',
        billDate:'12-06 22:44 '
      }

    ]
  }

  ionViewDidLoad() {

  }

  showAllClassify(){
    if(this.currentBox){
      this.sortArrow = 'md-arrow-dropdown';
      this.currentBox = false;
      this.showAllClassifyMask = false;
    }else{
      this.sortArrow = 'md-arrow-dropup';
      this.currentBox = true;
      this.showAllClassifyMask = true;
    }
  }
  clickClassify(index,event){
    event.stopPropagation();
    this.currentFlag = index;
    console.log(event.target.innerText);
  }

  hideAllClassifyBox(){
    this.sortArrow = 'md-arrow-dropdown';
    this.currentBox = false;
    this.showAllClassifyMask = false;
  }

  goLoginPage(){
    this.app.getRootNav().push('LoginPage');
  }

}
