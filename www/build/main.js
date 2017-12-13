webpackJsonp([22],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apply-kupang-biz/apply-kupang-biz.module": [
		262,
		21
	],
	"../pages/bill/bill.module": [
		263,
		20
	],
	"../pages/home/home.module": [
		264,
		19
	],
	"../pages/home/payment-code/payment-code.module": [
		265,
		18
	],
	"../pages/home/phone-recharge-opencard/phone-recharge-opencard.module": [
		266,
		17
	],
	"../pages/login/login.module": [
		267,
		16
	],
	"../pages/login/update-password/update-password.module": [
		268,
		15
	],
	"../pages/mine/mine.module": [
		269,
		14
	],
	"../pages/mine/my-help/my-help.module": [
		270,
		13
	],
	"../pages/mine/my-help/obligation-help/obligation-help.module": [
		271,
		12
	],
	"../pages/mine/my-help/receivables-help/receivables-help.module": [
		272,
		11
	],
	"../pages/mine/my-msg/my-msg.module": [
		273,
		10
	],
	"../pages/mine/my-shops/my-shops.module": [
		274,
		9
	],
	"../pages/mine/setting/about-kupang/about-kupang.module": [
		275,
		8
	],
	"../pages/mine/setting/setting.module": [
		276,
		7
	],
	"../pages/pang-card/card-infor/card-infor.module": [
		277,
		6
	],
	"../pages/pang-card/pang-card-search/pang-card-search.module": [
		278,
		5
	],
	"../pages/pang-card/pang-card.module": [
		279,
		4
	],
	"../pages/scan-payment/scan-payment.module": [
		280,
		3
	],
	"../pages/settle-accounts/settle-account-detail/settle-account-detail.module": [
		281,
		2
	],
	"../pages/settle-accounts/settle-account-search/settle-account-search.module": [
		282,
		1
	],
	"../pages/settle-accounts/settle-accounts.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = 'HomePage';
        this.tab2Root = 'PangCardPage';
        this.tab3Root = 'SettleAccountsPage';
        this.tab4Root = 'BillPage';
        this.tab5Root = 'MinePage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\github\coupon-biz\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="ios-homeIcon"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="胖卡" tabIcon="ios-pangkaIcon"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="结算" tabIcon="ios-settleIcon"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="账单" tabIcon="ios-billIcon"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="我的" tabIcon="ios-mineIcon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\github\coupon-biz\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                mode: 'ios',
                backButtonText: ''
            }, {
                links: [
                    { loadChildren: '../pages/apply-kupang-biz/apply-kupang-biz.module#ApplyKupangBizPageModule', name: 'ApplyKupangBizPage', segment: 'apply-kupang-biz', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bill/bill.module#BillPageModule', name: 'BillPage', segment: 'bill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/payment-code/payment-code.module#PaymentCodePageModule', name: 'PaymentCodePage', segment: 'payment-code', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/phone-recharge-opencard/phone-recharge-opencard.module#PhoneRechargeOpencardPageModule', name: 'PhoneRechargeOpencardPage', segment: 'phone-recharge-opencard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/update-password/update-password.module#UpdatePasswordPageModule', name: 'UpdatePasswordPage', segment: 'update-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/mine.module#MinePageModule', name: 'MinePage', segment: 'mine', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-help/my-help.module#MyHelpPageModule', name: 'MyHelpPage', segment: 'my-help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-help/obligation-help/obligation-help.module#ObligationHelpPageModule', name: 'ObligationHelpPage', segment: 'obligation-help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-help/receivables-help/receivables-help.module#ReceivablesHelpPageModule', name: 'ReceivablesHelpPage', segment: 'receivables-help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-msg/my-msg.module#MyMsgPageModule', name: 'MyMsgPage', segment: 'my-msg', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/my-shops/my-shops.module#MyShopsPageModule', name: 'MyShopsPage', segment: 'my-shops', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/setting/about-kupang/about-kupang.module#AboutKupangPageModule', name: 'AboutKupangPage', segment: 'about-kupang', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mine/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pang-card/card-infor/card-infor.module#CardInforPageModule', name: 'CardInforPage', segment: 'card-infor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pang-card/pang-card-search/pang-card-search.module#PangCardSearchPageModule', name: 'PangCardSearchPage', segment: 'pang-card-search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pang-card/pang-card.module#PangCardPageModule', name: 'PangCardPage', segment: 'pang-card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scan-payment/scan-payment.module#ScanPaymentPageModule', name: 'ScanPaymentPage', segment: 'scan-payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settle-accounts/settle-account-detail/settle-account-detail.module#SettleAccountDetailPageModule', name: 'SettleAccountDetailPage', segment: 'settle-account-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settle-accounts/settle-account-search/settle-account-search.module#SettleAccountSearchPageModule', name: 'SettleAccountSearchPage', segment: 'settle-account-search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settle-accounts/settle-accounts.module#SettleAccountsPageModule', name: 'SettleAccountsPage', segment: 'settle-accounts', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\github\coupon-biz\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\github\coupon-biz\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map