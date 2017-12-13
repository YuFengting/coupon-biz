import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the SettleAccountDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settle-account-detail',
  templateUrl: 'settle-account-detail.html',
})
export class SettleAccountDetailPage {

  selectdex:number = 1;
  detailInforLists1:Array<any>;
  detailInforLists2:Array<any>;
  detailInforLists3:Array<any>;
  selectAllObligation:boolean = false;
  selectAllReceivables:boolean = false;
  selectAllConfirmed:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
    this.detailInforLists1 = [
      {
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'10-22 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      }
    ];
    this.detailInforLists2 = [
      {
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      }
    ];
    this.detailInforLists3 = [
      {
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      },{
        businessName:'董小姐美容美发理发馆董小姐美容美发理发馆',
        date:'昨天 22:44',
        money:'800',
        cucumber:false
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettleAccountDetailPage');
  }

  selectClassify(dex){
    this.selectdex = dex;
    for (let i in this.detailInforLists1) {
      let putList = this.detailInforLists1[i];
      putList.cucumber = false;
    }
    for (let i in this.detailInforLists2) {
      let putList = this.detailInforLists2[i];
      putList.cucumber = false;
    }
    for (let i in this.detailInforLists3) {
      let putList = this.detailInforLists3[i];
      putList.cucumber = false;
    }
    this.selectAllObligation = false;
    this.selectAllReceivables = false;
    this.selectAllConfirmed = false;
  }

  selectThisLists1(event){
    if(event.target.checked){
      console.log(event.target.parentNode.nextElementSibling.innerText);
    }
    let ilength = 0;
    for (let i in this.detailInforLists1) {
      let putList = this.detailInforLists1[i];
      if(putList.cucumber){
        ilength++;
      }
    }
    if(this.detailInforLists1.length == ilength){
      this.selectAllObligation = true;
    }
  }
  selectThisLists2(event){
    if(event.target.checked){
      console.log(event.target.parentNode.nextElementSibling.innerText);
    }
    let ilength = 0;
    for (let i in this.detailInforLists2) {
      let putList = this.detailInforLists2[i];
      if(putList.cucumber){
        ilength++;
      }
    }
    if(this.detailInforLists2.length == ilength){
      this.selectAllReceivables = true;
    }
  }
  selectThisLists3(event){
    if(event.target.checked){
      console.log(event.target.parentNode.nextElementSibling.innerText);
    }
    let ilength = 0;
    for (let i in this.detailInforLists3) {
      let putList = this.detailInforLists3[i];
      if(putList.cucumber){
        ilength++;
      }
    }
    if(this.detailInforLists3.length == ilength){
      this.selectAllConfirmed = true;
    }
  }

  selectAllLists1(event){
    if(event.srcElement.checked){
      for(let i in this.detailInforLists1){
        let putList = this.detailInforLists1[i];
        putList.cucumber = true;
      }
    }else {
      for (let i in this.detailInforLists1) {
        let putList = this.detailInforLists1[i];
        putList.cucumber = false;
      }
    }
  }
  selectAllLists2(event){
    if(event.srcElement.checked){
      for(let i in this.detailInforLists2){
        let putList = this.detailInforLists2[i];
        putList.cucumber = true;
      }
    }else {
      for (let i in this.detailInforLists2) {
        let putList = this.detailInforLists2[i];
        putList.cucumber = false;
      }
    }
  }
  selectAllLists3(event){
    if(event.srcElement.checked){
      for(let i in this.detailInforLists3){
        let putList = this.detailInforLists3[i];
        putList.cucumber = true;
      }
    }else {
      for (let i in this.detailInforLists3) {
        let putList = this.detailInforLists3[i];
        putList.cucumber = false;
      }
    }
  }

  goSettleAccountsSearch(){
    this.app.getRootNav().push('SettleAccountSearchPage');
  }

}
