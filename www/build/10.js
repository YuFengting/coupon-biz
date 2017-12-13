webpackJsonp([10],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMsgPageModule", function() { return MyMsgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_msg__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyMsgPageModule = (function () {
    function MyMsgPageModule() {
    }
    return MyMsgPageModule;
}());
MyMsgPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_msg__["a" /* MyMsgPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_msg__["a" /* MyMsgPage */]),
        ],
    })
], MyMsgPageModule);

//# sourceMappingURL=my-msg.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMsgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyMsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyMsgPage = (function () {
    function MyMsgPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hasMsgContent = true;
        this.msgflag = 1;
        this.sysMsgLists = [
            {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '10/15',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }
        ];
        this.settleMsgLists = [
            {
                msgdate: '17/10/15',
                msgtitle: '海鲜烧烤龙虾店',
                msgcontent: '董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
            }, {
                msgdate: '',
                msgtitle: '特惠活动',
                msgcontent: '董小姐理发店活动大来袭，快快关注吧~'
            }, {
                msgdate: '17/10/15',
                msgtitle: '海鲜烧烤龙虾店',
                msgcontent: '董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
            }, {
                msgdate: '17/10/15',
                msgtitle: '海鲜烧烤龙虾店',
                msgcontent: '董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
            }, {
                msgdate: '17/10/15',
                msgtitle: '海鲜烧烤龙虾店',
                msgcontent: '董小姐理发馆已收到你一笔600元的跨店交易结算款项请求并确认已结算。'
            }
        ];
    }
    MyMsgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyMsgPage');
    };
    MyMsgPage.prototype.changeMsgLists = function (index) {
        this.msgflag = index;
    };
    return MyMsgPage;
}());
MyMsgPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-msg',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\mine\my-msg\my-msg.html"*/'<!--\n  Generated template for the MyMsgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的消息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n<div class="myMsgContent" *ngIf="hasMsgContent">\n  <div class="myMsgHeader"><span [class.current]="msgflag == 1" tappable (click)="changeMsgLists(1)">系统消息</span><span [class.current]="msgflag == 2" tappable (click)="changeMsgLists(2)">结算消息</span></div>\n  <div class="systemMsgBox" *ngIf="msgflag == 1" >\n    <div class="myMsgLists" *ngFor="let item of sysMsgLists">\n      <div class="dateTimeBox"><span>{{item.msgdate}}</span></div>\n      <div class="myMsgDetail">\n          <div class="msgHeader">{{item.msgtitle}}</div>\n          <div class="detailInfor">{{item.msgcontent}}</div>\n      </div>\n    </div>\n  </div>\n  <div class="settleAccountsMsgBox" *ngIf="msgflag == 2">\n    <div class="myMsgLists" *ngFor="let item of settleMsgLists">\n      <div class="dateTimeBox" *ngIf="item.msgdate"><span>{{item.msgdate}}</span></div>\n      <div class="myMsgDetail">\n        <!--<div class="msgHeader displayFlex-between"><span>{{item.msgtitle}}</span><span class="settleMsgDateBox">{{item.msgdate}}</span></div>-->\n        <div class="msgHeader">{{item.msgtitle}}</div>\n        <div class="detailInfor">{{item.msgcontent}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="noMyMsgContent" *ngIf="!hasMsgContent">\n  <img src="assets/imgs/mine/noMyMsgIcon.png">\n  <p>暂无消息</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\mine\my-msg\my-msg.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MyMsgPage);

//# sourceMappingURL=my-msg.js.map

/***/ })

});
//# sourceMappingURL=10.js.map