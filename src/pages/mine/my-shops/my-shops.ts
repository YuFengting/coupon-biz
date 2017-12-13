import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MyShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-shops',
  templateUrl: 'my-shops.html',
})
export class MyShopsPage {

  shops:{bossname:'',shopname:'',shopaddress:'',telnum:'',telcode:''};
  setArrowStyle1:string = 'ios-arrow-down';
  setArrowStyle2:string = 'ios-arrow-down';
  setArrowStyle3:string = 'ios-arrow-down';
  hasImgBox:string = '';
  public alipay = {
    accountNum:'',
    accountName:''
  }
  public weixinpay ={
    accountNum:'',
    accountName:''
  }
  showAccountsInforFlag:boolean = false;
  showCertificateFlag:boolean = false;
  showShopsPicsFlag:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController) {
    this.shops = {bossname:'',shopname:'',shopaddress:'',telnum:'',telcode:''}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyShopsPage');
  }

  showAccountInfor(){
    if(this.showAccountsInforFlag){
      this.showAccountsInforFlag = false;
      this.setArrowStyle1 = 'ios-arrow-down';
    }else{
      this.showAccountsInforFlag = true;
      this.setArrowStyle1 ='ios-arrow-up';
    }
  }

  showShopsCertificate(){
    if(this.showCertificateFlag){
      this.showCertificateFlag = false;
      this.setArrowStyle2 = 'ios-arrow-down';
    }else{
      this.showCertificateFlag = true;
      this.setArrowStyle2 ='ios-arrow-up';
    }
  }
  showShopsPics(){
    if(this.showShopsPicsFlag){
      this.showShopsPicsFlag = false;
      this.setArrowStyle3 = 'ios-arrow-down';
    }else{
      this.showShopsPicsFlag = true;
      this.setArrowStyle3 ='ios-arrow-up';
    }
  }

  selectUploadImg(){
    const actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: '拍照',
          // role: 'destructive',
          handler: () => {
          }
        },
        {
          text: '从相册中选择',
          handler: () => {
          }
        },
        {
          text: '取消 ',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
