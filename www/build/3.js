webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPaymentPageModule", function() { return ScanPaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_payment__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanPaymentPageModule = (function () {
    function ScanPaymentPageModule() {
    }
    return ScanPaymentPageModule;
}());
ScanPaymentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__scan_payment__["a" /* ScanPaymentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan_payment__["a" /* ScanPaymentPage */]),
        ],
    })
], ScanPaymentPageModule);

//# sourceMappingURL=scan-payment.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPaymentPage; });
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
 * Generated class for the ScanPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPaymentPage = (function () {
    function ScanPaymentPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ScanPaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPaymentPage');
    };
    ScanPaymentPage.prototype.closeModal = function () {
        console.log(this.consumeNum);
        this.viewCtrl.dismiss();
    };
    return ScanPaymentPage;
}());
ScanPaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan-payment',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\scan-payment\scan-payment.html"*/'<!--\n  Generated template for the ScanPaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title></ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content padding>\n<div class="maskBox" tappable (click)="closeModal()"></div>\n  <div class="sanPaymentBox">\n      <div class="cardInforBox">\n          <div class="ellipsis1">Barbershop董小姐理发馆库胖卡 拷贝</div>\n          <div>手机：138****7680</div>\n      </div>\n    <div class="payNumberBox">\n      <div class="consumeNumber">消费金额<input type="number" placeholder="请输入金额" [(ngModel)]="consumeNum" />元</div>\n      <div class="consumeBtnBox displayFlex-center">\n        <button ion-button full  class="commonSureBtn" tappable (click)="closeModal()">确认</button>\n        <button ion-button full  class="commonSureBtn disabled" tappable (click)="closeModal()">取消</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\scan-payment\scan-payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], ScanPaymentPage);

//# sourceMappingURL=scan-payment.js.map

/***/ })

});
//# sourceMappingURL=3.js.map