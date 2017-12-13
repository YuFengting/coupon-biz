import { Component } from '@angular/core';
import { IonicPage,NavController,ActionSheetController,App,ModalController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nickname:string;
  mobile:string;
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public app: App,public modalCtrl:ModalController) {
    this.nickname= '萌萌哒，给我个名份吧';
    this.mobile= '去火星了，怎么联系亲';
  }

  goPaymentOrOpenCard(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '扫码充值/开卡',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '手机号充值/开卡',
          handler: () => {
            this.app.getRootNav().push('PhoneRechargeOpencardPage');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  goMakeCollections(){
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '扫码收款',
          handler: () => {
            // this.app.getRootNav().push('ScanPaymentPage');
            let modal = this.modalCtrl.create('ScanPaymentPage');
            modal.present();
          }
        },
        {
          text: '手机号收款',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  goBusinessGetMoney(){
    this.app.getRootNav().push('PaymentCodePage');
  }

}
