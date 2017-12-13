import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplyKupangBizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-kupang-biz',
  templateUrl: 'apply-kupang-biz.html',
})
export class ApplyKupangBizPage {

  showCodeOrTime:boolean=true;
  coutTime:number = 60;
  shops:{bossname:'',shopname:'',shopaddress:'',telnum:'',telcode:''};
  canGoSubmit:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.shops = {bossname:'',shopname:'',shopaddress:'',telnum:'',telcode:''}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  codeChange(){
    if(this.shops.telcode != '' && this.shops.telcode != null){
      this.canGoSubmit = true;
    }else{
      this.canGoSubmit = false ;
    }
  }

  //验证码倒计时
  getLoginVerificationCode(teleNumber){
    console.log(teleNumber);
    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(teleNumber))){
      // this.nativeService.showToast('手机号不正确，请填写正确的手机号');
      alert('手机号不正确，请填写正确的手机号');
      return false;
    }else{
      this.showCodeOrTime = false;
      let setInter = setInterval( ()=>{
        this.coutTime -= 1;
        if(this.coutTime == 0){
          clearInterval(setInter);
          this.showCodeOrTime = true;
          this.coutTime = 60;
        }
      },1000);
    }
  }

  goApplyBiz(){
    if(this.canGoSubmit){
      console.log(this.shops);
    }
  }


}
