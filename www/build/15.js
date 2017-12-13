webpackJsonp([15],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function() { return UpdatePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_password__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePasswordPageModule = (function () {
    function UpdatePasswordPageModule() {
    }
    return UpdatePasswordPageModule;
}());
UpdatePasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */]),
        ],
    })
], UpdatePasswordPageModule);

//# sourceMappingURL=update-password.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordPage; });
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
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePasswordPage = (function () {
    function UpdatePasswordPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.ioslockoutline = 'ios-lock-outline';
        this.passwordShow = 'password';
        this.canGoSubmit = false;
        this.showoldpasswordclear = false;
        this.shownewpasswordclear = false;
        this.showsurepasswordclear = false;
        this.user = { oldpassword: '', newpassword: '', surepassword: '' };
    }
    UpdatePasswordPage.prototype.ionViewWillEnter = function () {
        //进行定位
        // baidumap_location.getCurrentPosition(function (result) {
        //   alert(JSON.stringify(result, null, 4));
        // }, function (error) {
        //
        // });
    };
    UpdatePasswordPage.prototype.showoldpasswordClear = function () {
        if (this.user.oldpassword != "") {
            this.showoldpasswordclear = true;
        }
        else {
            this.showoldpasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.oldpasswordChange = function () {
        if (this.user.oldpassword != '' && this.user.oldpassword != null) {
            this.showoldpasswordclear = true;
        }
        else {
            this.showoldpasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.hideoldpasswordClear = function () {
    };
    UpdatePasswordPage.prototype.shownewpasswordClear = function () {
        if (this.user.newpassword != "") {
            this.shownewpasswordclear = true;
        }
        else {
            this.shownewpasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.newpasswordChange = function () {
        if (this.user.newpassword != '' && this.user.newpassword != null) {
            this.shownewpasswordclear = true;
        }
        else {
            this.shownewpasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.hidenewpasswordClear = function () {
    };
    UpdatePasswordPage.prototype.showsurepasswordClear = function () {
        if (this.user.surepassword != "") {
            this.showsurepasswordclear = true;
        }
        else {
            this.showsurepasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.surepasswordChange = function () {
        if (this.user.surepassword != '' && this.user.surepassword != null) {
            this.showsurepasswordclear = true;
            if (this.user.newpassword == this.user.surepassword) {
                this.canGoSubmit = true;
            }
            else {
                this.canGoSubmit = false;
            }
        }
        else {
            this.showsurepasswordclear = false;
        }
    };
    UpdatePasswordPage.prototype.hidesurepasswordClear = function () {
    };
    UpdatePasswordPage.prototype.clearoldPassword = function () {
        this.user.oldpassword = '';
        this.showoldpasswordclear = false;
    };
    UpdatePasswordPage.prototype.clearnewPassword = function () {
        this.user.newpassword = '';
        this.shownewpasswordclear = false;
        this.canGoSubmit = false;
    };
    UpdatePasswordPage.prototype.clearsurePassword = function () {
        this.user.surepassword = '';
        this.showsurepasswordclear = false;
        this.canGoSubmit = false;
    };
    UpdatePasswordPage.prototype.updatePasswordSubmit = function () {
        //this.navCtrl.goToRoot('HomePage');
    };
    return UpdatePasswordPage;
}());
UpdatePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-password',template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\login\update-password\update-password.html"*/'<!--\n  Generated template for the UpdatePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="loginWrapBox">\n    <!--<div class="loginListBox"><input type="tel" class="loginInput" placeholder="验证码" [(ngModel)]="user.code" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon><span class="getCodeBox" [ngClass]="{\'codeStyleBtn\':haveTelVal}" *ngIf="showCodeOrTime" (click)="codeOrTimeDisplay()" >获取验证码</span><span *ngIf="!showCodeOrTime" class="countTime">{{coutTime}}s</span></div>-->\n    <!--<div class="loginListBox"><input [type]="passwordShow" class="loginInput" placeholder="新密码" [(ngModel)]="user.password" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon><ion-icon [name]="ioslockoutline" (click)="changePasswordPlay()"></ion-icon></div>-->\n    <!--<div class="submitbtnBox">-->\n    <!--<button ion-button block [ngClass]="{\'loginSubmitBtn\':canGoSubmit}">登录</button>-->\n    <!--</div>-->\n    <div class="loginWaysBox">\n      <div class="acountPasswordLogin">\n        <div class="loginListBox"><input type="password" class="loginInput" placeholder="请输入旧密码" [(ngModel)]="user.oldpassword" tappable (change)="oldpasswordChange()"  (focus)="showoldpasswordClear()" (blur)="hideoldpasswordClear()"  /><ion-icon name="ios-close-circle" tappable (click)="clearoldPassword()" *ngIf="showoldpasswordclear"></ion-icon></div>\n        <div class="loginListBox"><input type="password" class="loginInput" placeholder="请输入新密码" [(ngModel)]="user.newpassword" tappable (change)="newpasswordChange()"  (focus)="shownewpasswordClear()" (blur)="hidenewpasswordClear()"  /><ion-icon name="ios-close-circle" tappable (click)="clearnewPassword()" *ngIf="shownewpasswordclear"></ion-icon></div>\n        <div class="loginListBox"><input type="password" class="loginInput" placeholder="确认新密码" [(ngModel)]="user.surepassword" tappable (change)="surepasswordChange()"  (focus)="showsurepasswordClear()" (blur)="hidesurepasswordClear()"  /><ion-icon name="ios-close-circle" tappable (click)="clearsurePassword()" *ngIf="showsurepasswordclear"></ion-icon></div>\n        <button ion-button block class="loginBtnBox" [ngClass]="{\'loginSubmitBtn\':canGoSubmit}" tappable (click)="updatePasswordSubmit()" >确认提交</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\login\update-password\update-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], UpdatePasswordPage);

//# sourceMappingURL=update-password.js.map

/***/ })

});
//# sourceMappingURL=15.js.map