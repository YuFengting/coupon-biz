webpackJsonp([14],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinePageModule", function() { return MinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mine__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MinePageModule = (function () {
    function MinePageModule() {
    }
    return MinePageModule;
}());
MinePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mine__["a" /* MinePage */]),
        ],
    })
], MinePageModule);

//# sourceMappingURL=mine.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinePage; });
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
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MinePage = (function () {
    function MinePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    MinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MinePage');
    };
    MinePage.prototype.goMyShops = function () {
        this.app.getRootNav().push('MyShopsPage');
    };
    MinePage.prototype.goMyMsg = function () {
        this.app.getRootNav().push('MyMsgPage');
    };
    MinePage.prototype.goMyHelp = function () {
        this.app.getRootNav().push('MyHelpPage');
    };
    MinePage.prototype.goSetting = function () {
        this.app.getRootNav().push('SettingPage');
    };
    return MinePage;
}());
MinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mine',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\mine\mine.html"*/'<!--\n  Generated template for the MinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list class="accountList">\n    <button ion-item tappable (click)="goMyShops()">\n      <ion-icon name="ios-myshop" class="saleKey gotoIcon"></ion-icon>我的店<ion-icon name="ios-identification"></ion-icon>\n    </button>\n\n    <button ion-item tappable (click)="goMyMsg()">\n      <ion-icon name="ios-mymsg" class="requestColor gotoIcon"></ion-icon>我的消息\n    </button>\n\n\n    <button ion-item tappable (click)="goMyHelp()">\n      <ion-icon name="ios-myhelp" class="helpColor gotoIcon"></ion-icon>我的帮助\n    </button>\n\n\n    <button ion-item tappable (click)="goSetting()">\n      <ion-icon name="ios-setting" class="AboutColor gotoIcon"></ion-icon>设置\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\mine\mine.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MinePage);

//# sourceMappingURL=mine.js.map

/***/ })

});
//# sourceMappingURL=14.js.map