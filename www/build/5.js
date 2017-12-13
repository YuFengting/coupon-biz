webpackJsonp([5],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PangCardSearchPageModule", function() { return PangCardSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pang_card_search__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PangCardSearchPageModule = (function () {
    function PangCardSearchPageModule() {
    }
    return PangCardSearchPageModule;
}());
PangCardSearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pang_card_search__["a" /* PangCardSearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pang_card_search__["a" /* PangCardSearchPage */]),
        ],
    })
], PangCardSearchPageModule);

//# sourceMappingURL=pang-card-search.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PangCardSearchPage; });
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
 * Generated class for the PangCardSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PangCardSearchPage = (function () {
    function PangCardSearchPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.searchContent = false;
        this.pangCardLists = [
            {
                name: '李珊珊',
                phoneNumber: '15695889567',
                balance: '2562',
                activedCardDate: '今天  12:35'
            }, {
                name: '李珊',
                phoneNumber: '15695889567',
                balance: '2562',
                activedCardDate: '12-07  12:35'
            }, {
                name: '名字很长就隐藏',
                phoneNumber: '15695889567',
                balance: '2562',
                activedCardDate: '12-05  12:35'
            }
        ];
    }
    PangCardSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettleAccountSearchPage');
    };
    PangCardSearchPage.prototype.searchStoreName = function () {
        this.searchContent = true;
    };
    PangCardSearchPage.prototype.goCardInfor = function () {
        this.app.getRootNav().push('CardInforPage');
    };
    return PangCardSearchPage;
}());
PangCardSearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pang-card-search',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\pang-card\pang-card-search\pang-card-search.html"*/'<!--\n  Generated template for the SettleAccountSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar placeholder="请输入完整的(或前几位)手机号码" ></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button tappable (click)="searchStoreName()" >搜索</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="hasSearchContentBox" *ngIf="searchContent">\n    <div class="pangCardLists">\n      <div class="cardListBox" *ngFor="let item of pangCardLists" (click)="goCardInfor()">\n        <div class="cardInfor">\n          <span class="name ellipsis1">{{item.name}}</span><span class="phoneNumber ellipsis1">{{item.phoneNumber}}</span><span class="balance ellipsis1">余额：{{item.balance}}元</span>\n        </div>\n        <div class="activedCardDate"><span>开卡日期：</span>{{item.activedCardDate}}</div>\n      </div>\n    </div>\n  </div>\n  <div class="noSearchContentBox" *ngIf="!searchContent">\n    <img src="assets/imgs/settleAccounts/noContenySearch.png" />\n    <p class="noSearchTips">木有搜索到您要找的卡呀～～</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\pang-card\pang-card-search\pang-card-search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], PangCardSearchPage);

//# sourceMappingURL=pang-card-search.js.map

/***/ })

});
//# sourceMappingURL=5.js.map