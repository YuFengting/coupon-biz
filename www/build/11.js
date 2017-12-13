webpackJsonp([11],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceivablesHelpPageModule", function() { return ReceivablesHelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receivables_help__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReceivablesHelpPageModule = (function () {
    function ReceivablesHelpPageModule() {
    }
    return ReceivablesHelpPageModule;
}());
ReceivablesHelpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__receivables_help__["a" /* ReceivablesHelpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receivables_help__["a" /* ReceivablesHelpPage */]),
        ],
    })
], ReceivablesHelpPageModule);

//# sourceMappingURL=receivables-help.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivablesHelpPage; });
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
 * Generated class for the ReceivablesHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceivablesHelpPage = (function () {
    function ReceivablesHelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReceivablesHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceivablesHelpPage');
    };
    return ReceivablesHelpPage;
}());
ReceivablesHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-receivables-help',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\mine\my-help\receivables-help\receivables-help.html"*/'<!--\n  Generated template for the ReceivablesHelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>待收款帮助</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="myHelpContent">\n    <p class="setMarginBot">因为消费者用了您的店卡去其他店消费了，所以您就欠其他店钱。其他店向您发起收款请求后，您就会在这里看到其他店的结算打款请求</p>\n    <p>1.当您收到其他店的结算请求之后，“待付款”里会显示您需要打款给他店的详情。</p>\n    <p>2.您可以通过平台上对方的支付宝或微信账号转账给对方。</p>\n    <p>3.当您打款成功后，需要在“待付款”里请求对方确认收款。对方一旦确认收款之后，该笔跨店消费结算即平账了。</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\mine\my-help\receivables-help\receivables-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ReceivablesHelpPage);

//# sourceMappingURL=receivables-help.js.map

/***/ })

});
//# sourceMappingURL=11.js.map