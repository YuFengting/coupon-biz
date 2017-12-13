webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettleAccountDetailPageModule", function() { return SettleAccountDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settle_account_detail__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettleAccountDetailPageModule = (function () {
    function SettleAccountDetailPageModule() {
    }
    return SettleAccountDetailPageModule;
}());
SettleAccountDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settle_account_detail__["a" /* SettleAccountDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settle_account_detail__["a" /* SettleAccountDetailPage */]),
        ],
    })
], SettleAccountDetailPageModule);

//# sourceMappingURL=settle-account-detail.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettleAccountDetailPage; });
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
 * Generated class for the SettleAccountDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettleAccountDetailPage = (function () {
    function SettleAccountDetailPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.selectdex = 1;
        this.selectAllObligation = false;
        this.selectAllReceivables = false;
        this.selectAllConfirmed = false;
        this.detailInforLists1 = [
            {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '10-22 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }
        ];
        this.detailInforLists2 = [
            {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }
        ];
        this.detailInforLists3 = [
            {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }, {
                businessName: '董小姐美容美发理发馆董小姐美容美发理发馆',
                date: '昨天 22:44',
                money: '800',
                cucumber: false
            }
        ];
    }
    SettleAccountDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettleAccountDetailPage');
    };
    SettleAccountDetailPage.prototype.selectClassify = function (dex) {
        this.selectdex = dex;
        for (var i in this.detailInforLists1) {
            var putList = this.detailInforLists1[i];
            putList.cucumber = false;
        }
        for (var i in this.detailInforLists2) {
            var putList = this.detailInforLists2[i];
            putList.cucumber = false;
        }
        for (var i in this.detailInforLists3) {
            var putList = this.detailInforLists3[i];
            putList.cucumber = false;
        }
        this.selectAllObligation = false;
        this.selectAllReceivables = false;
        this.selectAllConfirmed = false;
    };
    SettleAccountDetailPage.prototype.selectThisLists1 = function (event) {
        if (event.target.checked) {
            console.log(event.target.parentNode.nextElementSibling.innerText);
        }
        var ilength = 0;
        for (var i in this.detailInforLists1) {
            var putList = this.detailInforLists1[i];
            if (putList.cucumber) {
                ilength++;
            }
        }
        if (this.detailInforLists1.length == ilength) {
            this.selectAllObligation = true;
        }
    };
    SettleAccountDetailPage.prototype.selectThisLists2 = function (event) {
        if (event.target.checked) {
            console.log(event.target.parentNode.nextElementSibling.innerText);
        }
        var ilength = 0;
        for (var i in this.detailInforLists2) {
            var putList = this.detailInforLists2[i];
            if (putList.cucumber) {
                ilength++;
            }
        }
        if (this.detailInforLists2.length == ilength) {
            this.selectAllReceivables = true;
        }
    };
    SettleAccountDetailPage.prototype.selectThisLists3 = function (event) {
        if (event.target.checked) {
            console.log(event.target.parentNode.nextElementSibling.innerText);
        }
        var ilength = 0;
        for (var i in this.detailInforLists3) {
            var putList = this.detailInforLists3[i];
            if (putList.cucumber) {
                ilength++;
            }
        }
        if (this.detailInforLists3.length == ilength) {
            this.selectAllConfirmed = true;
        }
    };
    SettleAccountDetailPage.prototype.selectAllLists1 = function (event) {
        if (event.srcElement.checked) {
            for (var i in this.detailInforLists1) {
                var putList = this.detailInforLists1[i];
                putList.cucumber = true;
            }
        }
        else {
            for (var i in this.detailInforLists1) {
                var putList = this.detailInforLists1[i];
                putList.cucumber = false;
            }
        }
    };
    SettleAccountDetailPage.prototype.selectAllLists2 = function (event) {
        if (event.srcElement.checked) {
            for (var i in this.detailInforLists2) {
                var putList = this.detailInforLists2[i];
                putList.cucumber = true;
            }
        }
        else {
            for (var i in this.detailInforLists2) {
                var putList = this.detailInforLists2[i];
                putList.cucumber = false;
            }
        }
    };
    SettleAccountDetailPage.prototype.selectAllLists3 = function (event) {
        if (event.srcElement.checked) {
            for (var i in this.detailInforLists3) {
                var putList = this.detailInforLists3[i];
                putList.cucumber = true;
            }
        }
        else {
            for (var i in this.detailInforLists3) {
                var putList = this.detailInforLists3[i];
                putList.cucumber = false;
            }
        }
    };
    SettleAccountDetailPage.prototype.goSettleAccountsSearch = function () {
        this.app.getRootNav().push('SettleAccountSearchPage');
    };
    return SettleAccountDetailPage;
}());
SettleAccountDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settle-account-detail',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\settle-accounts\settle-account-detail\settle-account-detail.html"*/'<!--\n  Generated template for the SettleAccountDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>跨店结算详情</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="goSettleAccountsSearch()"><ion-icon name="ios-search" class="searchIconBox" ></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="settleAccountsDetailHeader displayFlex-center">\n  <div class="titleName"><span [class.currentTitle]="selectdex == 1" (click)="selectClassify(1)">待付款</span></div>\n  <div class="titleName"><span [class.currentTitle]="selectdex == 2" (click)="selectClassify(2)">待收款</span></div>\n  <div class="titleName"><span [class.currentTitle]="selectdex == 3" (click)="selectClassify(3)">待确认</span></div>\n</div>\n<div class="detailInforLists" *ngIf="selectdex == 1">\n  <div class="inforItemBox" *ngFor="let item of detailInforLists1">\n    <div class="businessInfor displayFlex-center">\n      <span class="checkboxWrapper"><input class="checkBox" [(ngModel)]="item.cucumber" type="checkbox"  (change)="selectThisLists1($event)" /><label class="imitateCheckbox"></label></span><span class="ellipsis1">{{item.businessName}}</span>\n    </div>\n    <div class="dateBalanceBox displayFlex-between"><span class="dateBox">{{item.date}}</span><span class="balanceBox">¥ {{item.money}}</span></div>\n  </div>\n</div>\n<div class="detailInforLists" *ngIf="selectdex == 2">\n  <div class="inforItemBox" *ngFor="let item of detailInforLists2">\n    <div class="businessInfor displayFlex-center">\n      <span class="checkboxWrapper"><input class="checkBox" type="checkbox" [(ngModel)]="item.cucumber" (change)="selectThisLists2($event)" /><label class="imitateCheckbox"></label></span><span class="ellipsis1">{{item.businessName}}</span>\n    </div>\n    <div class="dateBalanceBox displayFlex-between"><span class="dateBox">{{item.date}}</span><span class="balanceBox">¥ {{item.money}}</span></div>\n  </div>\n</div>\n<div class="detailInforLists" *ngIf="selectdex == 3">\n  <div class="inforItemBox" *ngFor="let item of detailInforLists3">\n    <div class="businessInfor displayFlex-center">\n      <span class="checkboxWrapper"><input class="checkBox" type="checkbox" [(ngModel)]="item.cucumber" (change)="selectThisLists3($event)"  /><label class="imitateCheckbox"></label></span><span class="ellipsis1">{{item.businessName}}</span>\n    </div>\n    <div class="dateBalanceBox displayFlex-between"><span class="dateBox">{{item.date}}</span><span class="balanceBox">¥ {{item.money}}</span></div>\n  </div>\n</div>\n<div class="handleAccountsBox displayFlex-between"  *ngIf="selectdex == 1">\n    <span><span class="checkboxWrapper"><input type="checkbox" [(ngModel)]="selectAllObligation" (change)="selectAllLists1($event)"  /><label class="imitateCheckbox"></label></span>全选</span>\n    <span class="buttonBox"><button ion-button full  class="commonSureBtn">已付，请求确认</button></span>\n</div>\n<div class="handleAccountsBox displayFlex-between" *ngIf="selectdex == 2">\n  <span><span class="checkboxWrapper"><input type="checkbox" [(ngModel)]="selectAllReceivables" (change)="selectAllLists2($event)"  /><label class="imitateCheckbox"></label></span>全选</span>\n  <span class="buttonBox" ><button ion-button full  class="commonSureBtn">请付欠我款项</button></span>\n</div>\n<div class="handleAccountsBox displayFlex-between" *ngIf="selectdex == 3">\n  <span><span class="checkboxWrapper"><input type="checkbox" [(ngModel)]="selectAllConfirmed"  (change)="selectAllLists3($event)"  /><label class="imitateCheckbox"></label></span>全选</span>\n  <span class="buttonBox"><button ion-button full  class="commonSureBtn">确认，款项已收</button></span>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\settle-accounts\settle-account-detail\settle-account-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], SettleAccountDetailPage);

//# sourceMappingURL=settle-account-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map