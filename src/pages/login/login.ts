import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public showAgreement:string = '';

  haveTelVal: boolean = false;
  canGoSubmit: boolean = false;
  showtelclear: boolean = false;
  showcodeclear: boolean = false;
  showpasswordclear:boolean = false;
  user:{tel:'',code:'',password:''};
  showCodeOrTime:boolean = true;
  coutTime:number = 60;
  tabIndex:number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl:ViewController,
    public  app:App
  ) {

    this.user = {tel:'', code:'',password:''}

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');

  }

  selectLoginWays(index){
    this.tabIndex = index;
  }

  /*跳转修改密码页面*/
  updatePassword(){
    this.app.getRootNav().push('UpdatePasswordPage');
  }

  telChange(){
    if(this.user.tel != '' && this.user.tel != null){
      this.haveTelVal = true;
      this.showtelclear = true;
    }else{
      this.haveTelVal = false ;
      this.showtelclear = false;
    }
  }
  showtelClear(){
    if(this.user.tel != ""){
      this.showtelclear = true;
    }else {
      this.showtelclear = false;
    }
  }
  hidetelClear(){
    // this.showtelclear = false;
  }
  //清除手机号
  clearTel(){
    this.user.tel = '';
    this.haveTelVal = false ;
    this.showtelclear = false;
  }

  codeChange(){
    if(this.user.code != '' && this.user.code != null){
      this.canGoSubmit = true;
      this.showcodeclear = true;
    }else{
      this.canGoSubmit = false ;
      this.showcodeclear = false;
    }
  }
  showcodeClear(){
    if(this.user.code != ""){
      this.showcodeclear = true;
    }else {
      this.showcodeclear = false;
    }
  }
  hidecodeClear(){
    // this.showcodeclear = false;
  }
  //清除验证码
  clearCode(){
    this.user.code = '';
    this.canGoSubmit = false ;
    this.showcodeclear = false;
  }

  passwordChange(){
    if(this.user.password != '' && this.user.password != null){
      this.canGoSubmit = true;
      this.showpasswordclear = true;
    }else{
      this.canGoSubmit = false ;
      this.showpasswordclear = false;
    }
  }
  showpasswordClear(){
    if(this.user.password != ""){
      this.showpasswordclear = true;
    }else {
      this.showpasswordclear = false;
    }
  }
  hidepasswordClear(){
    // this.showcodeclear = false;
  }
  //清除密码
  clearPassword(){
    this.user.password = '';
    this.canGoSubmit = false ;
    this.showpasswordclear = false;
  }


  //验证码倒计时
  getLoginVerificationCode(teleNumber){
    console.log(teleNumber);
    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(teleNumber))){
      // this.nativeService.showToast('手机号不正确，请填写正确的手机号');
      return false;
    }else{
      if(this.haveTelVal){
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

  }
  nopasswordLogin(tel,code){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot('HomePage');
  }

  //服务协议
  showAgreementbtn(){
    this.showAgreement = 'translateY(0)'
  }
  closeAgreementBtn(){
    this.showAgreement = 'translateY(100%)'
  }

  goAppKupangBiz(){
    this.app.getRootNav().push('ApplyKupangBizPage');
  }

}
