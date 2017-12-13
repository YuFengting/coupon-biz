webpackJsonp([9],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShopsPageModule", function() { return MyShopsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_shops__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyShopsPageModule = (function () {
    function MyShopsPageModule() {
    }
    return MyShopsPageModule;
}());
MyShopsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_shops__["a" /* MyShopsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_shops__["a" /* MyShopsPage */]),
        ],
    })
], MyShopsPageModule);

//# sourceMappingURL=my-shops.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyShopsPage; });
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
 * Generated class for the MyShopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyShopsPage = (function () {
    function MyShopsPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.setArrowStyle1 = 'ios-arrow-down';
        this.setArrowStyle2 = 'ios-arrow-down';
        this.setArrowStyle3 = 'ios-arrow-down';
        this.hasImgBox = '';
        this.alipay = {
            accountNum: '',
            accountName: ''
        };
        this.weixinpay = {
            accountNum: '',
            accountName: ''
        };
        this.showAccountsInforFlag = false;
        this.showCertificateFlag = false;
        this.showShopsPicsFlag = false;
        this.shops = { bossname: '', shopname: '', shopaddress: '', telnum: '', telcode: '' };
    }
    MyShopsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyShopsPage');
    };
    MyShopsPage.prototype.showAccountInfor = function () {
        if (this.showAccountsInforFlag) {
            this.showAccountsInforFlag = false;
            this.setArrowStyle1 = 'ios-arrow-down';
        }
        else {
            this.showAccountsInforFlag = true;
            this.setArrowStyle1 = 'ios-arrow-up';
        }
    };
    MyShopsPage.prototype.showShopsCertificate = function () {
        if (this.showCertificateFlag) {
            this.showCertificateFlag = false;
            this.setArrowStyle2 = 'ios-arrow-down';
        }
        else {
            this.showCertificateFlag = true;
            this.setArrowStyle2 = 'ios-arrow-up';
        }
    };
    MyShopsPage.prototype.showShopsPics = function () {
        if (this.showShopsPicsFlag) {
            this.showShopsPicsFlag = false;
            this.setArrowStyle3 = 'ios-arrow-down';
        }
        else {
            this.showShopsPicsFlag = true;
            this.setArrowStyle3 = 'ios-arrow-up';
        }
    };
    MyShopsPage.prototype.selectUploadImg = function () {
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Modify your album',
            buttons: [
                {
                    text: '拍照',
                    // role: 'destructive',
                    handler: function () {
                    }
                },
                {
                    text: '从相册中选择',
                    handler: function () {
                    }
                },
                {
                    text: '取消 ',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return MyShopsPage;
}());
MyShopsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-shops',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\mine\my-shops\my-shops.html"*/'<!--\n  Generated template for the MyShopsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>店铺消息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="list-wrapper">\n    <div class="list-item displayFlex-center">\n      <label>店铺名称</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.shopname" placeholder="请填写店铺名称" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>经营区域</label>\n      <input class="inputBox" [(ngModel)]="shops.bossname" type="number" placeholder="请选择市区" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>店铺地址</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.shopaddress" placeholder="请填写店铺地址" />\n    </div>\n  </div>\n  <div class="list-wrapper">\n    <div class="list-item displayFlex-center">\n      <label>店主</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.shopname" placeholder="请填写负责人姓名" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>手机号</label>\n      <input class="inputBox" [(ngModel)]="shops.bossname" type="number" placeholder="请填写责任人手机号" />\n    </div>\n  </div>\n  <div class="list-wrapper">\n    <div class="list-item borderBotNone">\n      <span class="centerContent"  tappable (click)="showAccountInfor()">收款账号<ion-icon [(name)]="setArrowStyle1"></ion-icon></span>\n    </div>\n    <div class="showAccountsInforBox" *ngIf="showAccountsInforFlag">\n      <div class="accountHeader">支付宝【成为认证商家必填】</div>\n      <div class="inputAccountInfor">\n        <div class="accountList displayFlex-center"><label>账号</label><input type="text" [(ngModel)]="alipay.accountNum" /></div>\n        <div class="accountList displayFlex-center"><label>姓名</label><input type="text" [(ngModel)]="alipay.accountName" /></div>\n      </div>\n      <div class="accountHeader setMarginTop">微信支付</div>\n      <div class="inputAccountInfor">\n        <div class="accountList displayFlex-center"><label>账号</label><input type="text" [(ngModel)]="weixinpay.accountNum" /></div>\n        <div class="accountList displayFlex-center"><label>姓名</label><input type="text" [(ngModel)]="weixinpay.accountName" /></div>\n      </div>\n    </div>\n  </div>\n  <div class="list-wrapper">\n    <div class="list-item borderBotNone">\n      <span class="centerContent" tappable (click)="showShopsCertificate()">商铺证件<ion-icon [(name)]="setArrowStyle2"></ion-icon></span>\n    </div>\n    <div class="uploadPicWrapper" *ngIf="showCertificateFlag">\n      <ion-slides>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加证件</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加证件</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加证件</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加证件</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加证件</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n  <div class="list-wrapper">\n    <div class="list-item borderBotNone">\n      <span class="centerContent" tappable (click)="showShopsPics()">商铺照片<ion-icon [(name)]="setArrowStyle3"></ion-icon></span>\n    </div>\n    <div class="uploadPicWrapper" *ngIf="showShopsPicsFlag">\n      <ion-slides>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加照片</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加照片</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加照片</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加照片</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n        <ion-slide class="uploadPicBox">\n          <div class="addPicBtn" *ngIf="hasImgBox.length == 0" tappable (click)="selectUploadImg()">\n            <ion-icon name="ios-add-circle"></ion-icon><br/>\n            <span>点击添加照片</span>\n          </div>\n          <img class="uploadImgBox" *ngIf="hasImgBox.length > 0" [(src)]="hasImgBox">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n  <div class="myShopsBtnBox">\n    <button ion-button full  class="commonSureBtn"  tappable>保存商铺信息</button>\n    <button ion-button full  class="commonSureBtn redbg"  tappable>申请成为认证商铺</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\mine\my-shops\my-shops.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], MyShopsPage);

//# sourceMappingURL=my-shops.js.map

/***/ })

});
//# sourceMappingURL=9.js.map