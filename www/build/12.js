webpackJsonp([12],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObligationHelpPageModule", function() { return ObligationHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obligation_help__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObligationHelpPageModule = (function () {
    function ObligationHelpPageModule() {
    }
    return ObligationHelpPageModule;
}());
ObligationHelpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__obligation_help__["a" /* ObligationHelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__obligation_help__["a" /* ObligationHelpPage */]),
        ],
    })
], ObligationHelpPageModule);

//# sourceMappingURL=obligation-help.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObligationHelpPage; });
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
 * Generated class for the ObligationHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObligationHelpPage = (function () {
    function ObligationHelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ObligationHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObligationHelpPage');
    };
    return ObligationHelpPage;
}());
ObligationHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-obligation-help',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\mine\my-help\obligation-help\obligation-help.html"*/'<!--\n  Generated template for the ObligationHelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>待付款帮助</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="myHelpContent">\n  <p class="setMarginBot">因为消费者用了其他店的卡在您店里消费，所以其他店就欠您钱了，您可以通过发起结算请求来收回他店欠您的钱。</p>\n  <p>1.通过“待收款”发起结算请求</p>\n  <p>2.对方收到您的结算请求后，会通过您在库胖里留下的信息账号与您联系，并且打款转账给您。</p>\n  <p>3.当您收到对方打来的款项之后，需要进入“待确认”里确认已经收到对方的款项。</p>\n  <p class="setMarginTop">【注意】如果您不确认款项已收到，则系统会在7天之后自动确认。</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\mine\my-help\obligation-help\obligation-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ObligationHelpPage);

//# sourceMappingURL=obligation-help.js.map

/***/ })

});
//# sourceMappingURL=12.js.map