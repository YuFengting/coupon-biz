import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyMsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-msg',
  templateUrl: 'my-msg.html',
})
export class MyMsgPage {

  hasMsgContent:boolean = true;
  msgflag:number = 1;
  sysMsgLists:Array<any>;
  settleMsgLists:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sysMsgLists = [
      {
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'10/15',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      }
    ]
    this.settleMsgLists = [
      {
        msgdate:'17/10/15',
        msgtitle:'海鲜烧烤龙虾店',
        msgcontent:'董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
      },{
        msgdate:'',
        msgtitle:'特惠活动',
        msgcontent:'董小姐理发店活动大来袭，快快关注吧~'
      },{
        msgdate:'17/10/15',
        msgtitle:'海鲜烧烤龙虾店',
        msgcontent:'董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
      },{
        msgdate:'17/10/15',
        msgtitle:'海鲜烧烤龙虾店',
        msgcontent:'董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
      },{
        msgdate:'17/10/15',
        msgtitle:'海鲜烧烤龙虾店',
        msgcontent:'董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyMsgPage');
  }

  changeMsgLists(index){
    this.msgflag = index;
  }

}
