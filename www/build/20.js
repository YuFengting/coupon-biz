webpackJsonp([20],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillPageModule", function() { return BillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillPageModule = (function () {
    function BillPageModule() {
    }
    return BillPageModule;
}());
BillPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bill__["a" /* BillPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bill__["a" /* BillPage */]),
        ],
    })
], BillPageModule);

//# sourceMappingURL=bill.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillPage; });
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
 * Generated class for the BillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillPage = (function () {
    function BillPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.sortArrow = 'md-arrow-dropdown';
        this.currentBox = false;
        this.currentFlag = 1;
        this.showAllClassifyMask = false;
        this.billLists = [
            {
                billType: '充值-微信充值',
                billMoney: '+2,000.00',
                billDate: '昨天 22:44 '
            }, {
                billType: '充值-消费',
                billMoney: '-2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-支付宝充值',
                billMoney: '+2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-微信充值',
                billMoney: '+2,000.00',
                billDate: '昨天 22:44 '
            }, {
                billType: '充值-消费',
                billMoney: '-2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-支付宝充值',
                billMoney: '+2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-微信充值',
                billMoney: '+2,000.00',
                billDate: '昨天 22:44 '
            }, {
                billType: '充值-消费',
                billMoney: '-2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-支付宝充值',
                billMoney: '+2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-支付宝充值',
                billMoney: '+2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-微信充值',
                billMoney: '+2,000.00',
                billDate: '昨天 22:44 '
            }, {
                billType: '充值-消费',
                billMoney: '-2,000.00',
                billDate: '12-06 22:44 '
            }, {
                billType: '充值-支付宝充值',
                billMoney: '+2,000.00',
                billDate: '12-06 22:44 '
            }
        ];
    }
    BillPage.prototype.ionViewDidLoad = function () {
    };
    BillPage.prototype.showAllClassify = function () {
        if (this.currentBox) {
            this.sortArrow = 'md-arrow-dropdown';
            this.currentBox = false;
            this.showAllClassifyMask = false;
        }
        else {
            this.sortArrow = 'md-arrow-dropup';
            this.currentBox = true;
            this.showAllClassifyMask = true;
        }
    };
    BillPage.prototype.clickClassify = function (index, event) {
        event.stopPropagation();
        this.currentFlag = index;
        console.log(event.target.innerText);
    };
    BillPage.prototype.hideAllClassifyBox = function () {
        this.sortArrow = 'md-arrow-dropdown';
        this.currentBox = false;
        this.showAllClassifyMask = false;
    };
    BillPage.prototype.goLoginPage = function () {
        this.app.getRootNav().push('LoginPage');
    };
    return BillPage;
}());
BillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bill',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\bill\bill.html"*/'<!--\n  Generated template for the BillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账单</ion-title>\n    <ion-buttons end>\n    <button ion-button tappable (click)="goLoginPage()" >登录</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="billHeaderBox" id="billHeaderBox"><span class="allAssortment" [class.actived]="currentBox" tappable (click)="showAllClassify()">全部分类 <ion-icon [(name)]="sortArrow"></ion-icon></span></div>\n<div class="billListsBox" *ngFor="let item of billLists">\n  <div class="billItemWrap displayFlex-between"><span class="billType">{{item.billType}}</span><span class="billMoney">{{item.billMoney}}</span><span class="billDate">{{item.billDate}}</span></div>\n</div>\n</ion-content>\n<div class="showAllAssortmentBox" *ngIf="showAllClassifyMask" tappable (click)="hideAllClassifyBox()">\n  <div class="allAssortmentLists">\n    <span [class.current]="currentFlag == 1" tappable (click)="clickClassify(1,$event)">全部分类</span><span [class.current]="currentFlag == 2" tappable (click)="clickClassify(2,$event)">总充值</span><span [class.current]="currentFlag == 3" tappable (click)="clickClassify(3,$event)">本店收本店</span><span [class.current]="currentFlag == 4" tappable (click)="clickClassify(4,$event)">本店收他店</span><span [class.current]="currentFlag == 5" tappable (click)="clickClassify(5,$event)">他店收本店</span>\n  </div>\n</div>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\bill\bill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], BillPage);

//# sourceMappingURL=bill.js.map

/***/ })

});
//# sourceMappingURL=20.js.map