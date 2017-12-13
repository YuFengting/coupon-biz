import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-password',
  templateUrl: 'update-password.html',
})
export class UpdatePasswordPage {
  ioslockoutline:string = 'ios-lock-outline';
  passwordShow:string = 'password';

  canGoSubmit: boolean = false;
  showoldpasswordclear: boolean = false;
  shownewpasswordclear: boolean = false;
  showsurepasswordclear: boolean = false;
  user:{oldpassword:'',newpassword:'',surepassword:''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl:ViewController,
  ) {

    this.user = { oldpassword:'',newpassword:'',surepassword:''}

  }

  ionViewWillEnter(){
    //进行定位
    // baidumap_location.getCurrentPosition(function (result) {
    //   alert(JSON.stringify(result, null, 4));
    // }, function (error) {
    //
    // });
  }

  showoldpasswordClear(){
    if(this.user.oldpassword != ""){
      this.showoldpasswordclear = true;
    }else {
      this.showoldpasswordclear = false;
    }
  }

  oldpasswordChange(){
    if(this.user.oldpassword != '' && this.user.oldpassword != null){
      this.showoldpasswordclear = true;
    }else{
      this.showoldpasswordclear = false;
    }
  }
  hideoldpasswordClear(){

  }
  shownewpasswordClear(){
    if(this.user.newpassword != ""){
      this.shownewpasswordclear = true;
    }else {
      this.shownewpasswordclear = false;
    }
  }

  newpasswordChange(){
    if(this.user.newpassword != '' && this.user.newpassword != null){
      this.shownewpasswordclear = true;
    }else{
      this.shownewpasswordclear = false;
    }
  }
  hidenewpasswordClear(){

  }
  showsurepasswordClear(){
    if(this.user.surepassword != ""){
      this.showsurepasswordclear = true;
    }else {
      this.showsurepasswordclear = false;
    }
  }

  surepasswordChange(){
    if(this.user.surepassword != '' && this.user.surepassword != null){
      this.showsurepasswordclear = true;
      if(this.user.newpassword == this.user.surepassword){
        this.canGoSubmit = true;
      }else{
        this.canGoSubmit = false;
      }
    }else{
      this.showsurepasswordclear = false;

    }
  }
  hidesurepasswordClear(){

  }

  clearoldPassword(){
    this.user.oldpassword = '';
    this.showoldpasswordclear = false;
  }
  clearnewPassword(){
    this.user.newpassword = '';
    this.shownewpasswordclear = false;
    this.canGoSubmit = false;
  }
  clearsurePassword(){
    this.user.surepassword = '';
    this.showsurepasswordclear = false;
    this.canGoSubmit = false;
  }

  updatePasswordSubmit(){
    //this.navCtrl.goToRoot('HomePage');
  }

}
