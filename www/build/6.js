webpackJsonp([6],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInforPageModule", function() { return CardInforPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_infor__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardInforPageModule = (function () {
    function CardInforPageModule() {
    }
    return CardInforPageModule;
}());
CardInforPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card_infor__["a" /* CardInforPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_infor__["a" /* CardInforPage */]),
        ],
    })
], CardInforPageModule);

//# sourceMappingURL=card-infor.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInforPage; });
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
 * Generated class for the CardInforPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardInforPage = (function () {
    function CardInforPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardInfor = {
            cardId: 'ss77534390',
            activedCardDate: '开卡日期',
            cardCity: '上海',
            cardName: '张丹',
            phoneNumber: '18735176298',
            cardMoney: '1000'
        };
    }
    CardInforPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardInforPage');
    };
    return CardInforPage;
}());
CardInforPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card-infor',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\pang-card\card-infor\card-infor.html"*/'<!--\n  Generated template for the CardInforPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>卡信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="pangCardListsBox">\n  <div class="cardLists displayFlex-center">\n    <label>库胖卡号</label>\n    <div class="relatedInfor">{{cardInfor.cardId}}</div>\n  </div>\n  <div class="cardLists displayFlex-center">\n    <label>开卡日期</label>\n    <div class="relatedInfor">{{cardInfor.activedCardDate}}</div>\n  </div>\n  <div class="cardLists displayFlex-center">\n    <label>所在城市</label>\n    <div class="relatedInfor">{{cardInfor.cardCity}}</div>\n  </div>\n</div>\n<div style="width:100%;height:10px;background: #efeff4;"></div>\n  <div class="pangCardListsBox">\n    <div class="cardLists displayFlex-center">\n      <label>卡主姓名</label>\n      <div class="relatedInfor">{{cardInfor.cardName}}</div>\n    </div>\n    <div class="cardLists displayFlex-center">\n      <label>手机号码</label>\n      <div class="relatedInfor">{{cardInfor.phoneNumber}}</div>\n    </div>\n    <div class="cardLists displayFlex-center">\n      <label>卡内余额</label>\n      <div class="relatedInfor">¥ {{cardInfor.cardMoney}}</div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\pang-card\card-infor\card-infor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CardInforPage);

//# sourceMappingURL=card-infor.js.map

/***/ })

});
//# sourceMappingURL=6.js.map