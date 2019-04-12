(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assistance/assistance.module": [
		"./src/app/assistance/assistance.module.ts",
		"assistance-assistance-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-layout></app-main-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lawquote';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/main-layout/main-layout.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empty-layout/empty-layout.component */ "./src/app/empty-layout/empty-layout.component.ts");
/* harmony import */ var _final_booking_final_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./final-booking/final-booking.component */ "./src/app/final-booking/final-booking.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _firm_profile_firm_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./firm-profile/firm-profile.component */ "./src/app/firm-profile/firm-profile.component.ts");
/* harmony import */ var _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./booking-success/booking-success.component */ "./src/app/booking-success/booking-success.component.ts");
/* harmony import */ var _search_results_search_results_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-results/search-results.service */ "./src/app/search-results/search-results.service.ts");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], data: { animation: 'HomePage', flag: 'true' }
    },
    {
        path: 'assistance', loadChildren: './assistance/assistance.module#AssistanceModule'
    },
    {
        path: 'empty', component: _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmptyLayoutComponent"]
    },
    {
        path: 'booking', component: _final_booking_final_booking_component__WEBPACK_IMPORTED_MODULE_8__["FinalBookingComponent"]
    },
    {
        path: 'search', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultsComponent"]
    },
    {
        path: 'firm-profile', component: _firm_profile_firm_profile_component__WEBPACK_IMPORTED_MODULE_10__["FirmProfileComponent"]
    },
    {
        path: 'success', component: _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_11__["BookingSuccessComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_5__["MainLayoutComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _empty_layout_empty_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmptyLayoutComponent"],
                _final_booking_final_booking_component__WEBPACK_IMPORTED_MODULE_8__["FinalBookingComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultsComponent"],
                _firm_profile_firm_profile_component__WEBPACK_IMPORTED_MODULE_10__["FirmProfileComponent"],
                _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_11__["BookingSuccessComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [_search_results_search_results_service__WEBPACK_IMPORTED_MODULE_12__["SearchResultsService"], _navigation_service__WEBPACK_IMPORTED_MODULE_13__["NavigationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking-success/booking-success.component.css":
/*!***************************************************************!*\
  !*** ./src/app/booking-success/booking-success.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonCss {\r\n    background-image: linear-gradient(#76A2FC,#0A425D);\r\n    Opacity: 100%;\r\n    text-align: center;\r\n    box-shadow: 0px 3px 6px #000000 16%;\r\n    border: none;\r\n    color:white;\r\n    font-size: 20px;\r\n    font-family: 'DIN-Medium, Regular';\r\n    width: 263.78px;\r\n    height: 47px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/booking-success/booking-success.component.html":
/*!****************************************************************!*\
  !*** ./src/app/booking-success/booking-success.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\" style=\"padding: 20px 0px 20px 0px;border-bottom:1px solid #F0F0F0;background-color:#F8F8F8\">\n        <div class=\"col-md-1\">&nbsp;</div>\n        <div class=\"col-md-1\" style=\"margin-top: auto;margin-bottom: auto\">\n          <img style=\"width: 50px;height: 50px;\" src=\"./../../assets/images/round.jpg\"></div>\n        <div class=\"col-md-8\">\n          <p style=\"color:#2E2E2E;opacity: 100%;font-size:25px;text-align: left\">Drinking Driving Offense\n            Consultation<br />\n            <span style=\"color:#AAB5E0;opacity: 100%;font-size:25px;\">Sky Lawyers | London Soho</span></p>\n        </div>\n        </div>\n<div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%;\">\n    <div><i class=\"fa fa-check-circle\" style=\"font-size:163px;color:#AAB5E0\"></i></div>\n</div>\n\n    <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%;\"><span style=\"font-size:25px;color:#2E2E2E;opacity:100%;font-family: 'DIN-Medium, Regular'\">Thank you for your booking</span>\n      </div>\n      <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%;text-align: center\">\n\n      <span style=\"font-size:17px;color:#AAB5E0;opacity:100%;\">Please check your email address to further proceed with <br/><span> your booking your consultation.</span></span>\n    </div>\n\n\n</div>\n\n<!-- Return to Home Button -->\n\n<div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 5% 10%\">\n    <div><button class = \"buttonCss\" [routerLink]=\"['']\">Return to home</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/booking-success/booking-success.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/booking-success/booking-success.component.ts ***!
  \**************************************************************/
/*! exports provided: BookingSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingSuccessComponent", function() { return BookingSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingSuccessComponent = /** @class */ (function () {
    function BookingSuccessComponent() {
    }
    BookingSuccessComponent.prototype.ngOnInit = function () {
    };
    BookingSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking-success',
            template: __webpack_require__(/*! ./booking-success.component.html */ "./src/app/booking-success/booking-success.component.html"),
            styles: [__webpack_require__(/*! ./booking-success.component.css */ "./src/app/booking-success/booking-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingSuccessComponent);
    return BookingSuccessComponent;
}());



/***/ }),

/***/ "./src/app/empty-layout/empty-layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/empty-layout/empty-layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .slider {\r\n    width: 300px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n  }\r\n  .slides {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    \r\n    border-radius: 5px;\r\n    \r\n    scroll-behavior: smooth;\r\n    \r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-scroll-snap-points-x: repeat(300px);\r\n        scroll-snap-points-x: repeat(300px);\r\n    -ms-scroll-snap-type: mandatory;\r\n        scroll-snap-type: mandatory;\r\n  }\r\n  .slides::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .slides::-webkit-scrollbar-thumb {\r\n    background: black;\r\n    border-radius: 10px;\r\n  }\r\n  .slides::-webkit-scrollbar-track {\r\n    background: transparent;\r\n  }\r\n  .slides > div {\r\n    flex-shrink: 0;\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 10px;\r\n    background: #eee;\r\n    -webkit-transform-origin: center center;\r\n            transform-origin: center center;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n    position: relative;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 100px;\r\n  }\r\n  .slides > div:target {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n  }\r\n  .author-info {\r\n    background: rgba(0, 0, 0, 0.75);\r\n    color: white;\r\n    padding: 0.75rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  .author-info a {\r\n    color: white;\r\n  }\r\n  img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .slider > a {\r\n    display: inline-flex;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background: white;\r\n    text-decoration: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    margin: 0 0 0.5rem 0;\r\n    position: relative;\r\n  }\r\n  .slider > a:active {\r\n    top: 1px;\r\n  }\r\n  .slider > a:focus {\r\n    background: #000;\r\n  }\r\n  /* Don't need button navigation */\r\n  @supports ((-ms-scroll-snap-type: ) or (scroll-snap-type: )) {\r\n    .slider > a {\r\n      display: none;\r\n    }\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: linear-gradient(to bottom, #74ABE2, #5563DE);\r\n    font-family : 'Ropa Sans', sans-serif;\r\n  }\r\n  .slider {\r\n    width: 300px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n  }\r\n  .slides {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    \r\n    border-radius: 5px;\r\n    \r\n    scroll-behavior: smooth;\r\n    \r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-scroll-snap-points-x: repeat(300px);\r\n        scroll-snap-points-x: repeat(300px);\r\n    -ms-scroll-snap-type: mandatory;\r\n        scroll-snap-type: mandatory;\r\n  }\r\n  .slides::-webkit-scrollbar {\r\n    width: 10px;\r\n    height: 10px;\r\n  }\r\n  .slides::-webkit-scrollbar-thumb {\r\n    background: black;\r\n    border-radius: 10px;\r\n  }\r\n  .slides::-webkit-scrollbar-track {\r\n    background: transparent;\r\n  }\r\n  .slides > div {\r\n    flex-shrink: 0;\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 10px;\r\n    background: #eee;\r\n    -webkit-transform-origin: center center;\r\n            transform-origin: center center;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n    position: relative;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 100px;\r\n  }\r\n  .slides > div:target {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n  }\r\n  .author-info {\r\n    background: rgba(0, 0, 0, 0.75);\r\n    color: white;\r\n    padding: 0.75rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  .author-info a {\r\n    color: white;\r\n  }\r\n  img {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .slider > a {\r\n    display: inline-flex;\r\n    width: 1.5rem;\r\n    height: 1.5rem;\r\n    background: white;\r\n    text-decoration: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    margin: 0 0 0.5rem 0;\r\n    position: relative;\r\n  }\r\n  .slider > a:active {\r\n    top: 1px;\r\n  }\r\n  .slider > a:focus {\r\n    background: #000;\r\n  }\r\n  /* Don't need button navigation */\r\n  @supports ((-ms-scroll-snap-type: ) or (scroll-snap-type: )) {\r\n    .slider > a {\r\n      display: none;\r\n    }\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  body {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: linear-gradient(to bottom, #74ABE2, #5563DE);\r\n    font-family: 'Ropa Sans', sans-serif;\r\n  }"

/***/ }),

/***/ "./src/app/empty-layout/empty-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/empty-layout/empty-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\r\n  \r\n  <a href=\"#slide-1\">3</a>\r\n  <a href=\"#slide-2\">2</a>\r\n  <a href=\"#slide-3\">3</a>\r\n  <a href=\"#slide-4\">4</a>\r\n  <a href=\"#slide-5\">5</a>\r\n\r\n  <div class=\"slides\">\r\n    <div id=\"slide-1\">\r\n      1\r\n    </div>\r\n    <div id=\"slide-2\">\r\n      2\r\n    </div>\r\n    <div id=\"slide-3\">\r\n      3\r\n    </div>\r\n    <div id=\"slide-4\">\r\n      4\r\n    </div>\r\n    <div id=\"slide-5\">\r\n      5\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/empty-layout/empty-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/empty-layout/empty-layout.component.ts ***!
  \********************************************************/
/*! exports provided: EmptyLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyLayoutComponent", function() { return EmptyLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyLayoutComponent = /** @class */ (function () {
    function EmptyLayoutComponent() {
    }
    EmptyLayoutComponent.prototype.ngOnInit = function () {
    };
    EmptyLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empty-layout',
            template: __webpack_require__(/*! ./empty-layout.component.html */ "./src/app/empty-layout/empty-layout.component.html"),
            styles: [__webpack_require__(/*! ./empty-layout.component.css */ "./src/app/empty-layout/empty-layout.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], EmptyLayoutComponent);
    return EmptyLayoutComponent;
}());



/***/ }),

/***/ "./src/app/final-booking/final-booking.component.css":
/*!***********************************************************!*\
  !*** ./src/app/final-booking/final-booking.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput {\r\n    font-size: 16px;\r\n    width: 100%;\r\n    padding: 10px 10px 10px 3px;\r\n    font-size: 16px;\r\n    outline:  none;\r\n    border: none;\r\n\r\n}\r\n\r\n.input-container {\r\n    border: 0.2px solid #AAB5E0;\r\n    border-radius: 10px; /* IE10 */\r\n    display: flex;\r\n    width: 100%; \r\n    margin-bottom: 7px;\r\n}\r\n\r\n.icon {\r\n    padding: 13px 7px 13px 13px;\r\n    font-size: 16px;\r\n    background: white;\r\n    color: #0A425D;\r\n    min-width: 16px;\r\n    text-align: center;\r\n}\r\n\r\n.buttonIcon {\r\n    padding: 20px 7px 13px 13px;\r\n    font-size: 19.12px;\r\n    color: white;\r\n    min-width: 16px;\r\n    text-align: center;\r\n    background-image: linear-gradient(#76A2FC, #0A425D);\r\n    padding-right: 13px;\r\n    width:70px;\r\n    height:62px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\ncolor:#AAB5E0;\r\nfont-size:16px;\r\nfont-family: 'DIN-Medium, Regular';\r\n}\r\n\r\n::-ms-input-placeholder {\r\ncolor:#AAB5E0;\r\nfont-size:16px;\r\nfont-family: 'DIN-Medium, Regular';\r\n}\r\n\r\n::placeholder {\r\ncolor:#AAB5E0;\r\nfont-size:16px;\r\nfont-family: 'DIN-Medium, Regular';\r\n}\r\n\r\nselect {\r\n    color:#AAB5E0;\r\n    font-size: 16px;\r\n    border: 0.2px solid #AAB5E0;\r\n    border-radius: 5px 5px 5px 5px;\r\n    font-family: DIN-Medium, Regular;\r\n    \r\n}\r\n\r\n.buttonCss {\r\n    background-image: linear-gradient(#76A2FC,#0A425D);\r\n    Opacity: 100%;\r\n    text-align: center;\r\n    box-shadow: 0px 3px 6px #000000 16%;\r\n    border: none;\r\n    color:white;\r\n    font-size: 16px;\r\n    font-family: DIN-Medium, Regular;\r\n    width: 211.72px;\r\n    height: 47px;\r\n\r\n}\r\n\r\n.CreditInput {\r\n    padding: 13px 13px 13px 13px;\r\n    font-size: 16px;\r\n}\r\n\r\n.loginButton {\r\n    font-size: 16px;\r\n    background-color: white;\r\n    border:none;\r\n    color:#AAB5E0;\r\n    width:230px;\r\n    text-align: left;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/final-booking/final-booking.component.html":
/*!************************************************************!*\
  !*** ./src/app/final-booking/final-booking.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class='row'>\n    <div class=\"col-md-9\" style=\"background-color:#F8F8F8;\">\n      <div class=\"container-fluid\">\n        <div class=\"row\" style=\"padding: 20px 0px 20px 0px;border-bottom:1px solid #AAB5E0\">\n          <div class=\"col-md-1\">&nbsp;</div>\n          <div class=\"col-md-1\" style=\"margin-top: auto;margin-bottom: auto\">\n            <img style=\"width: 50px;height: 50px;\" src=\"./../../assets/images/round.jpg\"></div>\n          <div class=\"col-md-8\">\n            <p style=\"color:#2E2E2E;opacity: 100%;font-size:25px;text-align: left\">Drinking Driving Offense\n              Consultation<br />\n              <span style=\"color:#AAB5E0;opacity: 100%;font-size:25px;\">Sky Lawyers | London Soho</span></p>\n          </div>\n          <div class=\"col-md-2\" style=\"margin-top:auto;margin-bottom: auto;\">\n            <p style=\"background-image:linear-gradient(#76A2FC,#0A425D);border: none;font-size:30px;text-align: center;\">$830.95</p>\n          </div>\n\n\n        </div>\n\n        <div class=\"row\" style=\"padding: 10px 0px 5px 0px;\">\n          <div class=\"col-md-1\">&nbsp;</div>\n          <div class=\"col-md-11\" style=\"border-bottom:1px solid #AAB5E0;font-family: DIN-Medium, Regular;font-size: 25px;\">Your\n            Personal Details</div>\n        </div>\n        \n        <!-- Personal Detail Name and Email -->\n        <div class=\"row\" style=\"padding: 10px 0px 20px 0px;\">\n          <div class=\"col-md-1\">&nbsp;</div>\n          <div class=\"col-md-5\" style=\"font-family: DIN-Medium, Regular;font-size: 25px;color:#2E2E2E\">\n            <form>\n              <div class=\"form-group\">\n\n                <div class=\"input-container\">\n                  <i class=\"fas fa-user icon\"></i>\n                  <input type=\"text\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Full Name\">\n                </div>\n                <div class=\"input-container\">\n                  <i class=\"fas fa-envelope icon\"></i>\n                  <input type=\"text\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email Address\">\n                </div>\n                <div class=\"input-container\">\n                  <i class=\"fa fa-phone icon\"></i>\n                  <input type=\"text\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Telephone Contact\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <!-- Login Button -->\n        <div class=\"row\" style=\"padding: 10px 0px 20px 0px;\">\n          <div class=\"col-md-1\">&nbsp;</div>\n          <div class=\"col-md-4\" style=\"font-family: DIN-Medium, Regular;font-size: 25px;color:#2E2E2E\">\n            <div class=\"input-container\">\n              <i class=\"fas fa-user buttonIcon\"></i>\n              <button class=\"loginButton\">Used Lawquote Before?<br /><span style=\"color:#279E9A;text-decoration: underline;text-align: left;\">Login\n                  Now</span></button>\n            </div>\n          </div>\n        </div>\n\n        <!-- Credit Card Info -->\n        <div class=\"row\" style=\"padding: 5px 0px 20px 0px;\">\n          <div class=\"col-md-1\">&nbsp;</div>\n          <div class=\"col-md-4\" style=\"font-family: DIN-Medium, Regular;\">\n            <form>\n              <div class=\"form-group\">\n\n                <div class=\"input-container\">\n                  <input class=\"CreditInput\" type=\"text\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                    placeholder=\"Credit Card Name\">\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"col-md-4\" style=\"font-family: DIN-Medium, Regular;font-size: 25px;color:#2E2E2E;\">\n            <form>\n              <div class=\"form-group\">\n\n                <div class=\"input-container\">\n                  <input type=\"text\" class=\"CreditInput\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                    placeholder=\"Credit Card Number\">\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n\n        <!-- Credit Card CVV Dropdown -->\n        <div class=\"row\" style=\"padding: 1px 0px 20px 0px;\">\n            <div class=\"col-md-1\">&nbsp;</div>\n\n            <div class=\"form-group col-md-2\">\n                <select id=\"inputState\" class=\"form-control\">\n                  <option selected>+31</option>\n                  <option>...</option>\n                </select>\n              </div>\n\n              <div class=\"form-group col-md-2\">\n                  <select id=\"inputState\" class=\"form-control\">\n                    <option selected>+31</option>\n                    <option>...</option>\n                  </select>\n                </div>\n\n                <div class=\"form-group col-md-2\">\n                    <select id=\"inputState\" class=\"form-control\">\n                      <option selected>+31</option>\n                      <option>...</option>\n                    </select>\n                  </div>\n</div>\n\n<!-- Credit Card Email and Phone -->\n\n<div class=\"row\" style=\"padding: 1px 0px 20px 0px;\">\n    <div class=\"col-md-1\">&nbsp;</div>\n    <div class=\"col-md-5\" style=\"font-family: DIN-Medium, Regular;font-size: 25px;color:#2E2E2E\">\n      <form>\n        <div class=\"form-group\">\n          <div class=\"input-container\">\n            <input type=\"text\" class=\"CreditInput\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email Address\">\n          </div>\n          <div class=\"input-container\">\n            <input type=\"text\" class=\"CreditInput\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Telephone\">\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- Confirm Button -->\n  <div class=\"row\" style=\"padding: 1px 0px 20px 0px;\">\n  <div class=\"col-md-1\">&nbsp;</div>\n  <div class=\"col-md-3\"><button class = \"buttonCss\" [routerLink]=\"['/success']\">Confirm Booking</button>\n  </div>\n  </div>\n\n\n      </div>\n\n\n    </div>\n\n    <div class=\"col-md-3\" style=\"margin-top:3%\">\n      <p style=\"color:#2E2E2E;opacity: 100%;font-size:25px;text-align: center\">Need Immediate Help?<br />\n        <span style=\"color:#AAB5E0;opacity: 100%;font-size:25px;\">Call +44 203 203 202</span></p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/final-booking/final-booking.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/final-booking/final-booking.component.ts ***!
  \**********************************************************/
/*! exports provided: FinalBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalBookingComponent", function() { return FinalBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinalBookingComponent = /** @class */ (function () {
    function FinalBookingComponent() {
    }
    FinalBookingComponent.prototype.ngOnInit = function () {
    };
    FinalBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-final-booking',
            template: __webpack_require__(/*! ./final-booking.component.html */ "./src/app/final-booking/final-booking.component.html"),
            styles: [__webpack_require__(/*! ./final-booking.component.css */ "./src/app/final-booking/final-booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FinalBookingComponent);
    return FinalBookingComponent;
}());



/***/ }),

/***/ "./src/app/firm-profile/firm-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/firm-profile/firm-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/firm-profile/firm-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/firm-profile/firm-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  firm-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/firm-profile/firm-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/firm-profile/firm-profile.component.ts ***!
  \********************************************************/
/*! exports provided: FirmProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmProfileComponent", function() { return FirmProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirmProfileComponent = /** @class */ (function () {
    function FirmProfileComponent() {
    }
    FirmProfileComponent.prototype.ngOnInit = function () {
    };
    FirmProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-firm-profile',
            template: __webpack_require__(/*! ./firm-profile.component.html */ "./src/app/firm-profile/firm-profile.component.html"),
            styles: [__webpack_require__(/*! ./firm-profile.component.css */ "./src/app/firm-profile/firm-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirmProfileComponent);
    return FirmProfileComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quoteButton {\r\n    opacity: 100%;\r\n    position: relative;\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09);\r\n    padding: 8px 8px 8px 8px;\r\n    width:40%;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    font-family: 'DIN-Medium, Regular';\r\n    color:white;\r\n    border:none;\r\n\r\n    \r\n}\r\n\r\n.heading1{\r\n    font-size: 2.5em;\r\n    font-family: 'DIN-Medium, Regular';\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    line-height: 85%\r\n}\r\n\r\n.para2 {\r\n    color:#7C89BE;\r\n    font-family: 'DIN-Medium, Regular';\r\n    opacity: 100%;\r\n    line-height: 110%;\r\n\r\n\r\n}\r\n\r\n.worksButton {\r\n    opacity: 100%;\r\n    margin-left:6%;\r\n    position: absolute;\r\n    background-image: linear-gradient( #0A425D,#295E8B, #4173AE, #74A1FA, #76A2FC);\r\n    padding: 8px 8px 8px 8px;\r\n    width:40%;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    font-family: 'DIN-Medium, Regular';\r\n    color:white;\r\n    border:none;\r\n}"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\">\n  <img src=\"./home-screen.jpeg\" style=\"width:100%;max-height: 600px;\" class=\"img-fluid\" alt=\"Responsive image\">\n  <div style=\"position: absolute;bottom:5%; left: 6%;\">\n\n    <p class=\"heading1\">We make legal quotes <br/>make sense.</p>\n    <p class=\"para2\">We understand your legal problems and quote out your<br/> Case to law firms throughout the United Kingdom.</p>\n      <button [routerLink]=\"['/assistance']\" type=\"button\" class=\"quoteButton\">Quote Now  ></button>\n\n      <button type=\"button\" class=\"worksButton\">How it Works</button>\n    \n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\" style=\"margin-top:2%\">\n  <p style=\"font-size: 40px;color:#0A425D;opacity: 100%;\">Client Stories</p>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <p style=\"color:#AAB5E0;opacity:100%\"><i class=\"fas fa-quote-left\" style=\"margin-right:2%\"></i>\n    I saved countless hours of disappointing expensive correspondence law firms.\n    <br/>Lawquote is a winning solution that find me a firm that won my case comfortably.\n    <i class=\"fas fa-quote-right\"></i></p>\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/main-layout/animation.ts":
/*!******************************************!*\
  !*** ./src/app/main-layout/animation.ts ***!
  \******************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => TrafficOffense', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({}),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ right: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('TrafficOffense => AssitanceType', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> FilterPage', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/main-layout/main-layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/main-layout/main-layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color:red;\r\n}\r\n.lawquote{\r\n    border-style: solid;\r\n    border-color: white;\r\n    color: white;\r\n    border-width: 2px;\r\n    /* padding: 0.5% 0.5% 0.5% 0.5%; */\r\n    padding: 0.5% 1%;\r\n    margin-left: 3%;\r\n    /* text-align: center; */\r\n    font-size: 0.9em;    \r\n}\r\n.lawquoteFooter {\r\n    padding: 2% 4%;\r\n    margin-left: 12%;\r\n    border-style: solid;\r\n    border-color: white;\r\n    color: white;\r\n    border-width: 2px;\r\n    font-size: 0.9em;\r\n}\r\n.navbarCustome {\r\n    background-color:#0A425D;\r\n}\r\n.quoteButton {\r\n    opacity: 100%;\r\n    position: relative;\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09);\r\n    padding: 8px 8px 8px 8px;\r\n    width:40%;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    font-family: DIN-Medium, Regular;\r\n    color:white\r\n    \r\n}\r\n.heading1{\r\n    font-size: 2.5em;\r\n    font-family: DIN-Medium, Regular;\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    line-height: 85%\r\n}\r\n.para2 {\r\n    color:#7C89BE;\r\n    font-family: DIN-Medium, Regular;\r\n    opacity: 100%;\r\n    line-height: 110%;\r\n\r\n\r\n}\r\n.worksButton {\r\n    opacity: 100%;\r\n    margin-left:6%;\r\n    position: absolute;\r\n    background-image: linear-gradient( #0A425D,#295E8B, #4173AE, #74A1FA, #76A2FC);\r\n    padding: 8px 8px 8px 8px;\r\n    width:40%;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    font-family: DIN-Medium, Regular;\r\n    color:white\r\n}"

/***/ }),

/***/ "./src/app/main-layout/main-layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-layout/main-layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  *ngIf=\"!_router.url.includes('assistance')\" class=\"navbar navbar-dark\" style=\"background-color:#0A425D\">\n  \n  <a class=\"lawquote\"  href=\"#\">LAWQUOTE</a>\n\n  <a href=\"#\">\n    <span class=\"glyphicon glyphicon-user\" style=\"color:white\"></span>\n  </a>\n  <i class=\"fas fa-user\" style=\"color:white\"></i>\n\n</nav>\n\n<!-- <div [@routeAnimations]=\"prepareRoute(outlet)\" >\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n  </div> -->\n\n  <router-outlet></router-outlet>\n\n<footer *ngIf=\"!_router.url.includes('assistance')\" class=\"page-footer font-small blue pt-4\" style=\"bottom:0;position:relative;background-color:#0A425D;width:100%\">\n\n  <!-- Footer Links -->\n  <div class=\"container-fluid text-center text-md-left\" >\n\n    <!-- Grid row -->\n    <div class=\"row\">\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 mt-md-0 mt-3\">\n\n        <!-- Content -->\n        <a class=\"lawquoteFooter\"  href=\"#\">LAWQUOTE</a>\n  \n\n      </div>\n      <!-- Grid column -->\n\n      <hr class=\"clearfix w-100 d-md-none pb-3\" >\n\n      <!-- Grid column -->\n      <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          \n\n          <ul class=\"list-unstyled\" >\n            <li>\n              <a style=\"color: white\" href=\"#!\">Testimonials</a>\n            </li>\n            <li>\n              <a style=\"color: white\" href=\"#!\">How it works</a>\n            </li>\n          \n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <a style=\"color: white\" href=\"#!\">Privacy</a>\n            </li>\n            <li>\n              <a style=\"color: white\" href=\"#!\">Terms and conditions</a>\n            </li>\n            <li>\n              <a style=\"color: white\" href=\"#!\">About us</a>\n            </li>\n      \n          </ul>\n\n        </div>\n        <!-- Grid column -->\n\n    </div>\n    <!-- Grid row -->\n\n  </div>\n  <!-- Footer Links -->\n\n \n\n</footer>\n<!-- Footer -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/main-layout/main-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-layout/main-layout.component.ts ***!
  \******************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/main-layout/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(_router) {
        this._router = _router;
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] && outlet.activatedRouteData['id'];
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.css */ "./src/app/main-layout/main-layout.component.css")],
            animations: [
                _animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/navigation.service.ts":
/*!***************************************!*\
  !*** ./src/app/navigation.service.ts ***!
  \***************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        this.router = router;
        this.history = [];
        this.loadRouting();
    }
    NavigationService.prototype.loadRouting = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            _this.history = _this.history.concat([urlAfterRedirects]);
        });
        // this.router.events
        //         .subscribe((event) => {
        //           if (event instanceof NavigationStart) {
        //             console.log('from ser', this.router.url)
        //             this.history =  this.router.url;
        //           }
        //         });
    };
    NavigationService.prototype.getHistory = function () {
        return this.history;
    };
    NavigationService.prototype.getPreviousUrl = function () {
        return this.history[this.history.length - 2] || '';
    };
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nul\r\n{\r\nlist-style-type: none;\r\n}\r\n.newButtonCss {\r\n    width: 164.6px;\r\n    height: 39px;\r\n    background-image: linear-gradient(#76A2FC, #232D4D);\r\n    opacity: 1;\r\n    border-radius: 15px;\r\n    border: none;\r\n    color: #EDEDED;\r\n    font-size: 17.7px;\r\n    font-family: 'Muli', sans-serif;\r\n    font-weight: Bold;\r\n}\r\n.collapseText {\r\n    font-family: 'Muli', sans-serif;\r\n    font-weight: bold;\r\n    color:#5B72C1;\r\n    font-size: 17.7px;\r\n    border-right: 2px solid #EDEDED;\r\n}\r\n.specialityButton {\r\n    border:2px solid #46599A;\r\n    border-radius: 21px;\r\n    width:160.7px;color:#46599A;\r\n    font-family:'Muli', sans-serif;\r\n    font-weight:bold;\r\n    background-color: white;\r\n    height: 44.7px;\r\n    margin-left: 2.5%;\r\n    margin-top: 1%;\r\n}\r\n.tableHeader {\r\n    color: #46599A;\r\n    font-size: 21.3px;\r\n    opacity: 0.49;\r\n    font-family: 'Muli', sans-serif;\r\n    font-weight: Bold;\r\n    text-align: left;\r\n}\r\n.tableData {\r\n    color: #46599A;\r\n    font-size: 17.7px;\r\n    font-family: 'Muli', sans-serif;\r\n    font-weight: Bold;\r\n    text-align: left;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style = \"background-color: #F8F8F8;padding:30px 0px 0px 0px\">\n    <p style=\"margin-left: 8%;\" class=\"heading\">Search Results</p>\n\n <div class=\"container\" style = \"background-color: white;border-radius: 15px;margin-top: 1%;\" *ngFor = \"let element of Array\" >\n    <div class=\"row\" style=\"padding: 20px 24px 20px 24px;\" >\n    <div class=\"col-md-1\" style=\"font-size:17px;color:#76A2FC;font-family: DIN-Medium, Regular;margin-bottom:auto;margin-top: auto;\">\n      <img style = \"width: 50px;height: 50px;\" src = \"/src/assets/images/round.jpg\"></div>\n    <div class=\"col-md-2\" style=\"margin-bottom:auto;margin-top: auto;color: #76A2FC\"><span style=\"color:#0A425D\">Law Firm Name<br/></span>Soho London</div>\n    <div class=\"col-md-4\">&nbsp;</div>\n    <div class=\"col-md-2\" style=\"margin-bottom:auto;margin-top: auto;font-size: 30px;opacity:100%;font-family: DIN-Medium, Regular\">$830.95</div>\n    <div class=\"col-md-3\"><button class = \"buttonCss\" [routerLink] = \"['/booking']\">Buy Now</button>\n    <button type=\"button\" class = \"buttonCss\" style=\"margin-top: 1%\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Firm Profile</button></div>\n    </div>\n    \n    </div>\n   \n  </div>\n  \n  -->\n\n  <div class=\"container-fluid\" style=\"padding-top:1%;margin-left:1%;\">\n    <div class=\"row\">\n    <div class=\"col-md-1\"><i [routerLink]=\"['/assistance']\" class=\"fa fa-chevron-circle-left\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\"></i></div>\n    <div class=\"col-md-3\"  [routerLink]=\"['/assistance']\" style=\"font-size:14px;color: #AAB5E0;margin-left:-4%;margin-top: auto;margin-bottom: 1%;\">Restart Questionnare</div>\n\n</div>\n</div>\n\n  <div style=\"text-align:center;font-family: 'Muli', sans-serif; Font-size: 32.4px;color:#0A425D;margin-left:auto;margin-right: auto;\">\n    Search Results\n  </div>\n\n  <div class=\"container-fluid\" style=\"width:90%;padding-top:1%;\" >\n    <div class=\"row\" style=\"border-bottom: 2px solid #EDEDED;\n    border-top: 2px solid #EDEDED;padding-left: 25px\">\n      <div class=\"col-md-2 tableHeader\">Firm Name</div>\n      <div class=\"col-md-2\">&nbsp;</div>\n      <div class=\"col-md-2 tableHeader\" >Initial Fee</div>\n\n      <div class=\"col-md-2 tableHeader\" >Retainer</div>\n      \n    </div>\n\n  </div>\n\n  <div class=\"container-fluid\" style=\"width:90%;padding-top:0.1%;\">\n \n    <div class=\"row\" *ngFor=\"let element of Array;let i = index\"style=\"padding: 31px 0px 22px 25px;box-shadow: 0px 0px 15px rgb(0,0,0,8%);border: none;border-radius: 11px;margin-top:40px;\">\n      <div class=\"col-md-1 tableData\" ><p><img style = \"width: 50px;height: 50px;\" src = \"/src/assets/images/girl.jpg\"></p></div>\n      <div class=\"col-md-3 tableData\" style=\"padding-left:3%\" ><p>Firm Name <br/>Area Name, City Name</p></div>\n      <div class=\"col-md-2 tableData\" >£305.00</div>\n\n      <div class=\"col-md-2 tableData\" >£25.00</div>\n      <div class=\"col-md-2\"><button class=\"newButtonCss\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + i\">Firm Profile</button></div>\n      <div class=\"col-md-2\"><button class=\"newButtonCss\" [routerLink] = \"['/booking']\" style=\"background-image: linear-gradient(#E38672,#EC886D ,#FF8B62);margin-left: -12%;\">Buy this Firm</button></div>\n\n      <div id = {{i}} class=\"collapse\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">&nbsp;</div>\n            <div class=\"col-md-4\" style=\"font-size:14.2px;color:#46599A;font-family:'Muli', sans-serif;font-weight:bold;\">Speciality focus-</div>\n          </div>\n        </div>\n        <div class=\"container\" style=\"border-top: 2px solid #EDEDED;\">\n          <div class=\"row\" style=\"padding-top:1.5%;\">\n        <div  class=\"col-md-6 collapseText\">{{element}} Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, \n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n      <div class=\"col-md-6\"><button class=\"specialityButton\" *ngFor=\"let element of specialityArray\">{{element}}</button>\n      </div>\n\n    </div>\n    </div>\n    </div>   \n    \n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent() {
        this.Array = [1, 2, 3, 4, 5];
        this.specialityArray = ['Immigration Law', 'Work Injury Law', 'Immigration Law', 'Work Injury Law'];
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-results/search-results.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsService", function() { return SearchResultsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsService = /** @class */ (function () {
    function SearchResultsService() {
    }
    SearchResultsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsService);
    return SearchResultsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rohan\lawquote\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map