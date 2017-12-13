webpackJsonp([19],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //首页
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */])],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]],
        providers: [],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.nickname = '萌萌哒，给我个名份吧';
        this.mobile = '去火星了，怎么联系亲';
    }
    HomePage.prototype.goPaymentOrOpenCard = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: '扫码充值/开卡',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '手机号充值/开卡',
                    handler: function () {
                        _this.app.getRootNav().push('PhoneRechargeOpencardPage');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.goMakeCollections = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: '扫码收款',
                    handler: function () {
                        // this.app.getRootNav().push('ScanPaymentPage');
                        var modal = _this.modalCtrl.create('ScanPaymentPage');
                        modal.present();
                    }
                },
                {
                    text: '手机号收款',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.goBusinessGetMoney = function () {
        this.app.getRootNav().push('PaymentCodePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="homeToolBar">\n    <!--<ion-title>首页</ion-title>-->\n    <!--<ion-buttons end>-->\n    <!--<button ion-button tappable (click)="goLoginPage()" >登录</button>-->\n    <!--</ion-buttons>-->\n    <div class="homeHeaderBox displayFlex-center">\n      <img src="assets/imgs/home/kupangLogo.png">\n      <!--<img src="assets/img/home/kupangLogo.png"  *ngIf="null == avatarUrl">-->\n      <!--<img src="{{avatarUrl}}" *ngIf="null != avatarUrl" >-->\n      <div class="userInfor">\n        <p class="name">{{nickname}}</p>\n        <p class="phonenumber">{{mobile}}</p>\n      </div>\n    </div>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="homePageContent">\n    <div class="cardPackpageBox">\n      <span class="storePaymentCodeBox" tappable (click)="goBusinessGetMoney()"><ion-icon name="ios-store-paycode"></ion-icon>店家收款二维码</span>\n      <!--<span class="cardBillBox" tappable (click)="goBillBox()">账单</span>-->\n    </div>\n    <div class="paymentScanBox">\n      <div class="imgBox" tappable (click)="goPaymentOrOpenCard()">\n        <img src="assets/imgs/home/openCard-recharge.png">\n        <p>充值/开卡</p>\n      </div>\n      <div class="imgBox" tappable (click)="goMakeCollections()">\n        <img src="assets/imgs/home/businessGetMoney.png">\n        <p>收款</p>\n      </div>\n    </div>\n    <!--<div class="meFeastBox"><img src="assets/imgs/home/feastImg.png" tappable (click)="goMyTreat()"></div>-->\n    <div style="width: 100%;height:5px;background: #f0eff5;"></div>\n    <div class="currentInforBox">\n      <h2 class="title">当前信息</h2>\n      <div class="newsInforLists">\n        <div class="inforBox displayFlex-center">\n          <img src="assets/imgs/home/newsIcon1.png">\n          <div class="detailInfor">\n            <div class="titleBox titleBox1">个人卡讯</div>\n            <p>Besokuse您已成功开卡，500元金额赠送您，激活立马使用。</p>\n          </div>\n        </div>\n        <div class="inforBox displayFlex-center">\n          <img src="assets/imgs/home/newsIcon2.png">\n          <div class="detailInfor">\n            <div class="titleBox titleBox2">商家活动</div>\n            <p>董小姐理发馆假期打折大优惠，对折享受一次洗发欢迎大家的到来。</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=19.js.map