import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the PangCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pang-card',
  templateUrl: 'pang-card.html',
})
export class PangCardPage {

  pangCardLists:Array<any>;
  sortArrow:string = 'md-arrow-dropdown';
  sortType:number =1;
  showCardSort:boolean = false;
  public event = {
    timeStarts: (new Date()).toISOString()
  }

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
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'12-02  12:35'
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'10-22  12:35'
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'12-02  12:35'
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'10-22  12:35'
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'12-02  12:35'
      },{
        name:'李珊珊',
        phoneNumber:'15695889567',
        balance:'2562',
        activedCardDate:'10-22  12:35'
      }
    ]
  }

  ionViewDidLoad() {
      this.sortArrow = 'md-arrow-dropdown';
      this.showCardSort = false;
  }

  showAllSortLists(){
    if(this.sortArrow == 'md-arrow-dropdown'){
      this.sortArrow = 'md-arrow-dropup';
      this.showCardSort = true;
    }else{
      this.sortArrow = 'md-arrow-dropdown';
      this.showCardSort = false;
    }

  }

  selectCardSort(dex){
    this.sortType = dex;
    event.stopPropagation();
  }

  hideCardSort(){
    this.sortArrow = 'md-arrow-dropdown';
    this.showCardSort = false;
  }

  getDate(){
    const Dates = new Date(this.event.timeStarts);
    const year: number = Dates.getFullYear();
    const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const activedCardDate0 = year+'-'+month+'-'+day;
    console.log(activedCardDate0);
  }

  goCardInfor(){
    this.app.getRootNav().push('CardInforPage');
  }

  goPangCardSearch(){
    this.app.getRootNav().push('PangCardSearchPage');
  }

}
