webpackJsonp([21],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyKupangBizPageModule", function() { return ApplyKupangBizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_kupang_biz__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyKupangBizPageModule = (function () {
    function ApplyKupangBizPageModule() {
    }
    return ApplyKupangBizPageModule;
}());
ApplyKupangBizPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__apply_kupang_biz__["a" /* ApplyKupangBizPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_kupang_biz__["a" /* ApplyKupangBizPage */]),
        ],
    })
], ApplyKupangBizPageModule);

//# sourceMappingURL=apply-kupang-biz.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyKupangBizPage; });
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
 * Generated class for the ApplyKupangBizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyKupangBizPage = (function () {
    function ApplyKupangBizPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showCodeOrTime = true;
        this.coutTime = 60;
        this.canGoSubmit = false;
        this.shops = { bossname: '', shopname: '', shopaddress: '', telnum: '', telcode: '' };
    }
    ApplyKupangBizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    ApplyKupangBizPage.prototype.codeChange = function () {
        if (this.shops.telcode != '' && this.shops.telcode != null) {
            this.canGoSubmit = true;
        }
        else {
            this.canGoSubmit = false;
        }
    };
    //验证码倒计时
    ApplyKupangBizPage.prototype.getLoginVerificationCode = function (teleNumber) {
        var _this = this;
        console.log(teleNumber);
        if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(teleNumber))) {
            // this.nativeService.showToast('手机号不正确，请填写正确的手机号');
            alert('手机号不正确，请填写正确的手机号');
            return false;
        }
        else {
            this.showCodeOrTime = false;
            var setInter_1 = setInterval(function () {
                _this.coutTime -= 1;
                if (_this.coutTime == 0) {
                    clearInterval(setInter_1);
                    _this.showCodeOrTime = true;
                    _this.coutTime = 60;
                }
            }, 1000);
        }
    };
    ApplyKupangBizPage.prototype.goApplyBiz = function () {
        if (this.canGoSubmit) {
            console.log(this.shops);
        }
    };
    return ApplyKupangBizPage;
}());
ApplyKupangBizPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-apply-kupang-biz',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\apply-kupang-biz\apply-kupang-biz.html"*/'<!--\n  Generated template for the ApplyKupangBizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>申请成为库胖商家</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="list-wrapper">\n    <div class="list-item displayFlex-center">\n      <label>商铺名</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.shopname" placeholder="请填写完整商铺名称" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>负责人</label>\n      <input class="inputBox" [(ngModel)]="shops.bossname" type="number" placeholder="请填写商铺负责人姓名" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>地&nbsp;&nbsp;&nbsp;址</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.shopaddress" placeholder="请填写完整商铺地址" />\n    </div>\n  </div>\n  <div class="list-wrapper">\n    <div class="list-item displayFlex-center">\n      <label>手机号</label>\n      <input class="inputBox" type="number" [(ngModel)]="shops.telnum" placeholder="商铺负责人手机号" />\n    </div>\n    <div class="list-item displayFlex-center">\n      <label>验证码</label>\n      <input class="inputBox" type="text" [(ngModel)]="shops.telcode"  placeholder="请输入短信验证码" tappable (change)="codeChange()" />\n      <span class="getCodeBox" *ngIf="showCodeOrTime" tappable (click)="getLoginVerificationCode(shops.telnum)" >获取</span>\n      <span *ngIf="!showCodeOrTime" class="getCodeBox">{{coutTime}}s</span>\n    </div>\n  </div>\n  <div class="sureBtnBox"><button ion-button full  class="commonSureBtn" [ngClass]="{\'disabled\':!canGoSubmit}" tappable (click)="goApplyBiz()">立即成为库胖商家</button></div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\apply-kupang-biz\apply-kupang-biz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ApplyKupangBizPage);

//# sourceMappingURL=apply-kupang-biz.js.map

/***/ })

});
//# sourceMappingURL=21.js.map