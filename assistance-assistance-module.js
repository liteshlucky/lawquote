(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assistance-assistance-module"],{

/***/ "./src/app/assistance/assistance-type/assistance-type.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/assistance/assistance-type/assistance-type.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:red;\r\n}.question {\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    font-size: 2em;\r\n}#slide {\r\n    position: absolute;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: slide 0.5s forwards;\r\n    -webkit-animation-delay: 0.05s;\r\n    animation: slide 0.5s forwards;\r\n    animation-delay: 0.05s;\r\n}@-webkit-keyframes slide {\r\n    100% { right: 0; }\r\n}@keyframes slide {\r\n    100% { right: 0; }\r\n}.options {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 415.92px;\r\n    height: 62.5px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    padding:0.6%;\r\n}button {\r\n    border-style: solid;\r\n    border-color: #AAB5E0;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 416px;\r\n    text-align: left;\r\n    height: 62px;\r\n    color: #AAB5E0;\r\n    padding:10px 20px 20px 20px;\r\n    margin-top: 15px;\r\n\toutline:none;\r\n\ttext-transform:capitalize;\r\n\tfont-size:14px;\r\n}.nextQuestion {\r\n    border-color: #279E9A;\r\n    border-width: 1px;\r\n    background-color:#F8F8F8;\r\n    width: 415.99px;\r\n    height: 47.85px;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: #279E9A;\r\n    padding:0.6%;\r\n}li.active button{\r\n    background-color:#0A425D !important;\r\n    color:white;\r\n}.changeButtonCss{\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09) !important;\r\n    border: none;\r\n    opacity: 100%;\r\n    color:white;\r\n\r\n}button i{margin-right:10px;}"

/***/ }),

/***/ "./src/app/assistance/assistance-type/assistance-type.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/assistance/assistance-type/assistance-type.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n                <div class=\"progress\" style = \"overflow: inherit\">\n                        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 20%;background-image: linear-gradient( 276deg,#76A2FC,#0A425D);\n                          \" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">20%</div>\n                      </div>\n                          \n                      \n                    \n                    <div style=\"background-color:#F8F8F8;\">\n                    \n                            <div class=\"container-fluid\" style=\"padding-top:2%;\">\n                                    <div class=\"row\">\n                                    <div class=\"col-md-1\">&nbsp;</div>\n                                    <div class=\"col-md-1\" ><i class=\"fa fa-chevron-circle-left\" [routerLink] = \"['']\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\"></i>\n                                    </div>\n                                    <div class=\"col-md-1\"  style=\"font-size:14px;color: #AAB5E0;margin-left:-4%;margin-top: auto;margin-bottom: 1%;\" >Previous</div>\n                                    <div class=\"col-md-6\">&nbsp;</div>\n                                    <div class=\"col-md-1\"  style=\"font-size:14px;color: #AAB5E0;margin-top: auto;margin-bottom: 1%;margin-right: -5.5%;  margin-left: 9%;\">Close</div>\n                                    <div class=\"col-md-1\" ><i  [routerLink] = \"['']\" class=\"fa fa-times-circle\" style=\"font-size:50px;color: #AAB5E0;margin-right: 3%;\" aria-hidden=\"true\"></i>\n                                    </div>\n                            \n                                </div>\n                                </div>\n                      <div>\n                      </div>\n                        \n                    \n                    <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%\">\n                    <p class=\"question\" style=\"font-family: 'Muli', sans-serif; font-weight: Bold;\">\n                        What time of assistance do you need?\n                    </p>\n                    </div>\n                    \n                    <ul style=\"padding-bottom: 4.1%;\" >  \n                    <li class=\"d-flex justify-content-center\" [class.active]=\"i == selectedRow\"  *ngFor=\"let element of optionsArray; let i = index\">\n                        <button (click)=\"setClickedRow(i, element.link)\"><span style=\"color:#0A425D;font-size:22px;margin-right:10px;\">{{element.option}}</span><span>{{element.name}}</span></button></li>\n                    \n                    <li style=\"margin-top: 3%;\" class=\"d-flex justify-content-center\"><button (click) = \"navigateTo()\" class=\"nextQuestion\" [disabled] = \"nextButtonDisableFlag\" [class.changeButtonCss]=\"nextButtonCssFlag\">Next Question</button></li>\n                    \n                    </ul>\n                    \n                    </div>\n                    \n                          \n          "

/***/ }),

/***/ "./src/app/assistance/assistance-type/assistance-type.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/assistance/assistance-type/assistance-type.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssistanceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistanceTypeComponent", function() { return AssistanceTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssistanceTypeComponent = /** @class */ (function () {
    function AssistanceTypeComponent(router, ns) {
        this.router = router;
        this.ns = ns;
        this.nextButtonCssFlag = false;
        this.nextButtonFlag = true;
        this.optionsArray = [{ name: 'Debt Recovery', option: 'A', link: 'debt-recovery' }, { name: 'Property Conveyancing', option: 'B', link: 'traffic-offense' },
            { name: 'Traffic Offenses', option: 'C', link: 'traffic-offense' }, { name: 'Immigration Assistance', option: 'D', link: 'immigration' },
            { name: 'Wills & Probate', option: 'E', link: 'wills' }];
        this.setClickedRow = function (index, link) {
            console.log('dddd', link);
            this.nextButtonCssFlag = true;
            this.nextButtonDisableFlag = false;
            this.selectedLink = link;
            this.selectedRow = index;
        };
    }
    AssistanceTypeComponent.prototype.ngOnInit = function () {
    };
    AssistanceTypeComponent.prototype.navigateTo = function () {
        this.router.navigate(['/assistance/' + this.selectedLink, 1], { skipLocationChange: true });
    };
    AssistanceTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assistance-type',
            template: __webpack_require__(/*! ./assistance-type.component.html */ "./src/app/assistance/assistance-type/assistance-type.component.html"),
            styles: [__webpack_require__(/*! ./assistance-type.component.css */ "./src/app/assistance/assistance-type/assistance-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], AssistanceTypeComponent);
    return AssistanceTypeComponent;
}());



/***/ }),

/***/ "./src/app/assistance/assistance.module.ts":
/*!*************************************************!*\
  !*** ./src/app/assistance/assistance.module.ts ***!
  \*************************************************/
/*! exports provided: AssistanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistanceModule", function() { return AssistanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assistance_type_assistance_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistance-type/assistance-type.component */ "./src/app/assistance/assistance-type/assistance-type.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _traffic_offense_traffic_offense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traffic-offense/traffic-offense.component */ "./src/app/assistance/traffic-offense/traffic-offense.component.ts");
/* harmony import */ var _immigration_immigration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./immigration/immigration.component */ "./src/app/assistance/immigration/immigration.component.ts");
/* harmony import */ var _email_submission_email_submission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-submission/email-submission.component */ "./src/app/assistance/email-submission/email-submission.component.ts");
/* harmony import */ var _wills_wills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wills/wills.component */ "./src/app/assistance/wills/wills.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var assistanceRouting = [
    {
        path: '', component: _assistance_type_assistance_type_component__WEBPACK_IMPORTED_MODULE_2__["AssistanceTypeComponent"], data: { animation: 'AssitanceType', flag: 'false' }
    },
    {
        path: 'traffic-offense/:id', component: _traffic_offense_traffic_offense_component__WEBPACK_IMPORTED_MODULE_4__["TrafficOffenseComponent"], data: { animation: 'TrafficOffense',
            flag: 'false' }
    },
    {
        path: 'wills/:id', component: _wills_wills_component__WEBPACK_IMPORTED_MODULE_7__["WillsComponent"], data: { animation: 'Wills',
            flag: 'false' }
    },
    {
        path: 'immigration/:id', component: _immigration_immigration_component__WEBPACK_IMPORTED_MODULE_5__["ImmigrationComponent"], data: { animation: 'Immigration', flag: 'false' }
    },
    {
        path: 'email', component: _email_submission_email_submission_component__WEBPACK_IMPORTED_MODULE_6__["EmailSubmissionComponent"], data: { animation: 'Immigration', flag: 'false' }
    }
];
var AssistanceModule = /** @class */ (function () {
    function AssistanceModule() {
    }
    AssistanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(assistanceRouting)
            ],
            declarations: [_assistance_type_assistance_type_component__WEBPACK_IMPORTED_MODULE_2__["AssistanceTypeComponent"], _traffic_offense_traffic_offense_component__WEBPACK_IMPORTED_MODULE_4__["TrafficOffenseComponent"], _immigration_immigration_component__WEBPACK_IMPORTED_MODULE_5__["ImmigrationComponent"], _email_submission_email_submission_component__WEBPACK_IMPORTED_MODULE_6__["EmailSubmissionComponent"], _wills_wills_component__WEBPACK_IMPORTED_MODULE_7__["WillsComponent"]]
        })
    ], AssistanceModule);
    return AssistanceModule;
}());



/***/ }),

/***/ "./src/app/assistance/email-submission/email-submission.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/assistance/email-submission/email-submission.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background-color:#F8F8F8;\r\n}.question {\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    font-size: 2em;\r\n}.heading1{\r\n    font-size: 1.5em;\r\n    font-family: DIN-Medium, Regular;\r\n    color: #76A2FC;\r\n    opacity: 100%;\r\n    line-height: 85%\r\n}.hint {\r\n    font-size: 1.2em;\r\n    font-family: DIN-Medium, Regular;\r\n    color: #76A2FC;\r\n    opacity: 10%;\r\n    line-height: 85%\r\n}.worksButton {\r\n    opacity: 100%;\r\n    position: absolute;\r\n    text-align: center;\r\n    background-color: #76A2FC;\r\n    padding: 8px 8px 8px 8px;\r\n    border-radius: 10px;\r\n    font-size: 1.2em;\r\n    font-family: DIN-Medium, Regular;\r\n    color:white\r\n}#slide {\r\n    position: absolute;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: blue;\r\n    -webkit-animation: slide 0.5s forwards;\r\n    -webkit-animation-delay: 0.05s;\r\n    animation: slide 0.5s forwards;\r\n    animation-delay: 0.05s;\r\n}@-webkit-keyframes slide {\r\n    100% { right: 0; }\r\n}@keyframes slide {\r\n    100% { right: 0; }\r\n}.options {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 280px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    font-family: DIN-Medium, Regular;\r\n    padding:0.6%;\r\n}button {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 280px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    font-family: DIN-Medium, Regular;\r\n    padding:0.6%;\r\n    margin-top: 0.6%;\r\n}.nextQuestion {\r\n    border-color: #279E9A;\r\n    border-width: 1px;\r\n    background-color:#F8F8F8;\r\n    width: 280px;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: #279E9A;\r\n    font-family: DIN-Medium, Regular;\r\n    padding:0.6%;\r\n    font-family: DIN-Medium, Regular\r\n}li.active button{\r\n    background-color:#0A425D !important;\r\n    color:white;\r\n}.changeButtonCss{\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09) !important;\r\n    background-color: black;\r\n    opacity: 100%;\r\n    color:white\r\n\r\n}"

/***/ }),

/***/ "./src/app/assistance/email-submission/email-submission.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/assistance/email-submission/email-submission.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"slide\" style=\"background-color:#F8F8F8;\">\n\n\n  <div class=\"progress\" >\n      <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 75%;background-image: linear-gradient( 276deg,#76A2FC,#0A425D);\n      \" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\n    </div>  \n    \n  \n  \n    <div style=\"padding:3% 0% 0% 4%\">\n        <i class=\"fa fa-chevron-circle-left\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\" ></i>\n        <span style=\"font-size:14px;color: #AAB5E0;\">Previous</span>\n        <span style=\"font-size:14px;color: #AAB5E0;margin-left:80%;\">Close\n        <i class=\"fa fa-times-circle\" aria-hidden=\"true\" style=\"font-size:50px;color: #AAB5E0;\"></i></span>\n    </div>  \n      \n  \n  <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%\">\n    <p class=\"heading1\">Thanks a lot! Show me my Wills Quotes</p>\n  </div>\n\n  <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%\">\n    <p class=\"hint\" >You can leave this  blank, if you dont't want quotes emailed to you</p> \n\n    \n  </div>\n    <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%\">\n\n\n \n  <form>\n    <div  class=\"form-group\">   \n        <i style = \"color: #76A2FC;font-size: 40px\" class=\"fa fa-envelope\" aria-hidden=\"true\"></i>   \n      <input  type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Type your email here\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    \n    </form>\n  </div>\n  <div class=\"d-flex justify-content-center\" style=\"padding: 2% 10% 0% 10%\">\n\n  <button type=\"button\" class=\"worksButton\" [routerLink]=\"['/booking']\">Submit</button>\n\n  </div>\n  \n  \n  </div>\n  \n  \n  \n\n"

/***/ }),

/***/ "./src/app/assistance/email-submission/email-submission.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/assistance/email-submission/email-submission.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmailSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSubmissionComponent", function() { return EmailSubmissionComponent; });
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

var EmailSubmissionComponent = /** @class */ (function () {
    function EmailSubmissionComponent() {
    }
    EmailSubmissionComponent.prototype.ngOnInit = function () {
    };
    EmailSubmissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-submission',
            template: __webpack_require__(/*! ./email-submission.component.html */ "./src/app/assistance/email-submission/email-submission.component.html"),
            styles: [__webpack_require__(/*! ./email-submission.component.css */ "./src/app/assistance/email-submission/email-submission.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailSubmissionComponent);
    return EmailSubmissionComponent;
}());



/***/ }),

/***/ "./src/app/assistance/immigration/immigration.component.css":
/*!******************************************************************!*\
  !*** ./src/app/assistance/immigration/immigration.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:#F8F8F8;\r\n}.question {\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    font-size: 2em;\r\n}#slide {\r\n    position: absolute;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: slide 0.5s forwards;\r\n    -webkit-animation-delay: 0.05s;\r\n    animation: slide 0.5s forwards;\r\n    animation-delay: 0.05s;\r\n}@-webkit-keyframes slide {\r\n    100% { right: 0; }\r\n}@keyframes slide {\r\n    100% { right: 0; }\r\n}.options {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 415.92px;\r\n    height: 62.5px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    padding:0.6%;\r\n}button {\r\n    border-style: solid;\r\n    border-color: #AAB5E0;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 416px;\r\n    text-align: left;\r\n    height: 62px;\r\n    color: #AAB5E0;\r\n    padding:20px;\r\n    margin-top: 15px;\r\n\toutline:none;\r\n\ttext-transform:capitalize;\r\n\tfont-size:14px;\r\n}.nextQuestion {\r\n    border-color: #279E9A;\r\n    border-width: 1px;\r\n    background-color:#F8F8F8;\r\n    width: 415.99px;\r\n    height: 47.85px;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: #279E9A;\r\n    padding:0.6%;\r\n}li.active button{\r\n    background-color:#0A425D !important;\r\n    color:white;\r\n}.changeButtonCss{\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09) !important;\r\n    border: none;\r\n    opacity: 100%;\r\n    color:white;\r\n\r\n}button i{margin-right:10px;}"

/***/ }),

/***/ "./src/app/assistance/immigration/immigration.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/assistance/immigration/immigration.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" style = \"overflow: inherit\">\n  <div class=\"progress-bar\" role=\"progressbar\" [style.width] = \"progress\" style=\"background-image: linear-gradient( 276deg,#76A2FC,#0A425D);\n  \" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{progress}}</div>\n</div>\n<div id=\"slide\" style=\"background-color:#F8F8F8;\">\n\n<div class=\"container-fluid\" style=\"padding-top:2%;\">\n      <div class=\"row\">\n      <div class=\"col-md-1\">&nbsp;</div>\n      <div class=\"col-md-1\" style=\"position:fixed;left:8%\"><i class=\"fa fa-chevron-circle-left\" (click) = \"previousUrlFunction()\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"col-md-1\"  style=\"position:fixed;font-size:14px;color: #AAB5E0;left: 12.4%;padding-top:1.2%\">Previous</div>\n      <div class=\"col-md-6\">&nbsp;</div>\n      <div class=\"col-md-1\"  style=\"font-size:14px;color: #AAB5E0;position:fixed;padding-top:1.2%;left: 80%;\">Close</div>\n      <div class=\"col-md-1\"><i class=\"fa fa-times-circle\" style=\"font-size:50px;position:fixed;left:84%;color: #AAB5E0;\" aria-hidden=\"true\"></i>\n      </div>\n\n  </div>\n  </div>\n\n  \n\n<div class=\"d-flex justify-content-center\" style=\"padding: 6% 10% 0% 10%\">\n<p class=\"question\"style=\"font-family: 'Muli', sans-serif; font-weight: Bold;\">\n  {{question}}\n</p>\n</div>\n\n<ul style=\"padding-bottom: 4.1%;\" >  \n<li class=\"d-flex justify-content-center\" [class.active]=\"i == selectedRow\"  *ngFor=\"let element of optionsArray; let i = index\">\n  <button (click)=\"setClickedRow(i, element.link)\"><span style=\"color:#0A425D;font-size:22px;margin-right:10px;\">{{element.option}}</span><span>{{element.name}}</span></button></li>\n\n<li style=\"margin-top: 3%;\" class=\"d-flex justify-content-center\"><button (click) = \"navigateTo()\" class=\"nextQuestion\" [disabled]=\"nextButtonDisableFlag\" [class.changeButtonCss]=\"nextButtonCssFlag\">Next Question</button></li>\n\n</ul>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/assistance/immigration/immigration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/assistance/immigration/immigration.component.ts ***!
  \*****************************************************************/
/*! exports provided: ImmigrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmigrationComponent", function() { return ImmigrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/navigation.service */ "./src/app/navigation.service.ts");
/* harmony import */ var _immigration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./immigration */ "./src/app/assistance/immigration/immigration.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImmigrationComponent = /** @class */ (function () {
    function ImmigrationComponent(router, activatedRoute, ns) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ns = ns;
        this.immigrationArray = _immigration__WEBPACK_IMPORTED_MODULE_3__["ImmigrationQuestion"];
        this.cssFlag = false;
        this.nextButtonFlag = true;
        console.log('prev', this.ns.getPreviousUrl());
        this.activatedRoute.params.subscribe(function (params) {
            console.log('pa', params.id.slice(0, -2));
            _this.previousUrl = params.id.slice(0, -2);
            if (params.id == 1) {
                _this.question = _this.immigrationArray[0].i1.question;
                _this.progress = _this.immigrationArray[0].progress;
                _this.optionsArray = _this.immigrationArray[0].i1.options;
            }
            else if (params.id == 1.1) {
                _this.question = _this.immigrationArray[1].i1a.question;
                _this.progress = _this.immigrationArray[1].progress;
                _this.optionsArray = _this.immigrationArray[1].i1a.options;
            }
            else if (params.id == '1.1.1') {
                _this.question = _this.immigrationArray[2].i1b.question;
                _this.progress = _this.immigrationArray[2].progress;
                _this.optionsArray = _this.immigrationArray[2].i1b.options;
            }
        });
        this.setClickedRow = function (index, link) {
            console.log('dddd', link);
            this.nextButtonCssFlag = true;
            this.nextButtonDisableFlag = false;
            this.selectedLink = link;
            this.selectedRow = index;
        };
    }
    ImmigrationComponent.prototype.previousUrlFunction = function () {
        console.log('null', this.previousUrl);
        if (this.previousUrl == null || this.previousUrl == undefined || this.previousUrl == '') {
            this.router.navigate(['/assistance']);
        }
        else {
            this.router.navigate(['/assistance/traffic-offense/', this.previousUrl], { skipLocationChange: true });
        }
    };
    ImmigrationComponent.prototype.navigateTo = function () {
        var _this = this;
        if (this.selectedLink == 'final') {
            console.log('i am email');
            this.router.navigate(['/assistance/email']);
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                _this.router.navigate(['/assistance/immigration/', _this.selectedLink], { skipLocationChange: true });
            });
        }
    };
    ImmigrationComponent.prototype.ngOnInit = function () {
    };
    ImmigrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-immigration',
            template: __webpack_require__(/*! ./immigration.component.html */ "./src/app/assistance/immigration/immigration.component.html"),
            styles: [__webpack_require__(/*! ./immigration.component.css */ "./src/app/assistance/immigration/immigration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], ImmigrationComponent);
    return ImmigrationComponent;
}());



/***/ }),

/***/ "./src/app/assistance/immigration/immigration.ts":
/*!*******************************************************!*\
  !*** ./src/app/assistance/immigration/immigration.ts ***!
  \*******************************************************/
/*! exports provided: ImmigrationQuestion, SecondImmigration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmigrationQuestion", function() { return ImmigrationQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondImmigration", function() { return SecondImmigration; });
var ImmigrationQuestion = [{
        progress: '25%',
        i1: {
            id: 'i1',
            question: "What type of Immigration Assistance do you require",
            options: [{ name: 'Spouse/Defacto/Same Sex Partner Visa', option: 'A', link: '1.1' }, { name: 'EEA Permit', option: 'B', link: '1.2' },
                { name: 'Child Visa', option: 'C', link: '1.3' }, { name: 'Ancestry Visa', option: 'D', link: '1.4' }, { name: 'Something', option: 'E', link: '1.5' }]
        }
    }, {
        progress: '50%',
        i1a: {
            question: "Which of the following best describes you and your partner's relationship",
            id: 'dd2',
            options: [{ name: "We're in a marriage that's recognized in the UK", option: 'A', link: '1.1.1' },
                { name: "We're in a civil partnership that's recognized in the UK", option: 'B', link: '1.1.2' },
                { name: "My partner is a fiance/fiancee/proposed civil partner and we will marry or enter into a civil partnership in the UK within 6 months of arriving", option: 'C', link: '1.1.3' },
                { name: "None of the above apply", option: 'D', link: '1.1.4' }
            ]
        }
    },
    {
        progress: '75%',
        i1b: {
            question: "Do you or your partner have any of the following",
            id: 'dd2',
            options: [{ name: 'UK Citizenship', option: 'A', link: '1.1.1.1' },
                { name: 'Indefinite leave to remain in the UK', option: 'B', link: '1.1.1.2' },
                { name: 'Proof of permanent residency in the UK', option: 'C', link: '1.1.1.3' },
                { name: 'Refugee status or humanitarian protection in the UK', option: 'D', link: '1.1.1.4' },
                { name: 'None of the apply', option: 'E', link: '1.1.1.5' }
            ]
        }
    },
    {
        progress: '75%',
        i1c: {
            question: "Do you or your partner have any of the following",
            id: 'dd2',
            options: [{ name: 'UK Citizenship', option: 'A', link: '1.1.1' },
                { name: 'Indefinite leave to remain in the UK', option: 'B', link: '1.1.2' },
                { name: 'Proof of permanent residency in the UK', option: 'C', link: '1.1.3' },
                { name: 'Refugee status or humanitarian protection in the UK', option: 'D', link: '1.1.4' },
                { name: 'None of the apply', link: '1.1.5', option: 'E' }
            ]
        }
    }
];
var SecondImmigration = [{
        progress: '50%',
        i2a: {
            question: "Which of the following best describes you and your partner's relationship",
            id: 'dd2',
            options: [{ name: "We're in a marriage that's recognized in the UK", option: 'A', link: '1.1.1' },
                { name: "We're in a civil partnership that's recognized in the UK", option: 'B', link: '1.1.2' },
                { name: "My partner is a fiance/fiancee/proposed civil partner and we will marry or enter into a civil partnership in the UK within 6 months of arriving", option: 'C', link: '1.1.3' },
                { name: "None of the above apply", option: 'D', link: '1.1.4' }
            ]
        }
    },
    {
        progress: '75%',
        i2b: {
            question: "Do you or your partner have any of the following",
            id: 'dd2',
            options: [{ name: 'UK Citizenship', option: 'A', link: '1.1.1.1' },
                { name: 'Indefinite leave to remain in the UK', option: 'B', link: '1.1.1.2' },
                { name: 'Proof of permanent residency in the UK', option: 'C', link: '1.1.1.3' },
                { name: 'Refugee status or humanitarian protection in the UK', option: 'D', link: '1.1.1.4' },
                { name: 'None of the apply', option: 'E', link: '1.1.1.5' }
            ]
        }
    },
    {
        progress: '75%',
        i2c: {
            question: "Do you or your partner have any of the following",
            id: 'dd2',
            options: [{ name: 'UK Citizenship', option: 'A', link: '1.1.1' },
                { name: 'Indefinite leave to remain in the UK', option: 'B', link: '1.1.2' },
                { name: 'Proof of permanent residency in the UK', option: 'C', link: '1.1.3' },
                { name: 'Refugee status or humanitarian protection in the UK', option: 'D', link: '1.1.4' },
                { name: 'None of the apply', option: 'E', link: '1.1.5' }
            ]
        }
    }];


/***/ }),

/***/ "./src/app/assistance/traffic-offense/traffic-offense.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/assistance/traffic-offense/traffic-offense.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:#F8F8F8;\r\n}.question {\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    font-size: 2em;\r\n}#slide {\r\n    position: absolute;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: slide 0.5s forwards;\r\n    -webkit-animation-delay: 0.05s;\r\n    animation: slide 0.5s forwards;\r\n    animation-delay: 0.05s;\r\n}@-webkit-keyframes slide {\r\n    100% { right: 0; }\r\n}@keyframes slide {\r\n    100% { right: 0; }\r\n}.options {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 415.92px;\r\n    height: 62.5px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    padding:0.6%;\r\n}button {\r\n    border-style: solid;\r\n    border-color: #AAB5E0;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 416px;\r\n    text-align: left;\r\n    height: 62px;\r\n    color: #AAB5E0;\r\n    padding:20px;\r\n    margin-top: 15px;\r\n\toutline:none;\r\n\ttext-transform:capitalize;\r\n\tfont-size:14px;\r\n}.nextQuestion {\r\n    border-color: #279E9A;\r\n    border-width: 1px;\r\n    background-color:#F8F8F8;\r\n    width: 415.99px;\r\n    height: 47.85px;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: #279E9A;\r\n    padding:0.6%;\r\n}li.active button{\r\n    background-color:#0A425D !important;\r\n    color:white;\r\n}.changeButtonCss{\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09) !important;\r\n    border: none;\r\n    opacity: 100%;\r\n    color:white;\r\n\r\n}button i{margin-right:10px;}"

/***/ }),

/***/ "./src/app/assistance/traffic-offense/traffic-offense.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/assistance/traffic-offense/traffic-offense.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" style = \"overflow: inherit\">\n    <div class=\"progress-bar\" role=\"progressbar\" [style.width] = \"progress\" style=\"background-image: linear-gradient( 276deg,#76A2FC,#0A425D);\n    \" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{progress}}</div>\n  </div>\n  <div id=\"slide\" style=\"background-color:#F8F8F8;\">\n  \n  <div class=\"container-fluid\" style=\"padding-top:2%;\">\n        <div class=\"row\">\n        <div class=\"col-md-1\">&nbsp;</div>\n        <div class=\"col-md-1\" style=\"position:fixed;left:8%\"><i class=\"fa fa-chevron-circle-left\" (click) = \"previousUrlFunction()\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"col-md-1\"  style=\"position:fixed;font-size:14px;color: #AAB5E0;left: 12.4%;padding-top:1.2%\">Previous</div>\n        <div class=\"col-md-6\">&nbsp;</div>\n        <div class=\"col-md-1\"  style=\"font-size:14px;color: #AAB5E0;position:fixed;padding-top:1.2%;left: 80%;\">Close</div>\n        <div class=\"col-md-1\"><i class=\"fa fa-times-circle\" style=\"font-size:50px;position:fixed;left:84%;color: #AAB5E0;\" aria-hidden=\"true\"></i>\n        </div>\n  \n    </div>\n    </div>\n  \n    \n  \n  <div class=\"d-flex justify-content-center\" style=\"padding: 6% 10% 0% 10%\">\n  <p class=\"question\"style=\"font-family: 'Muli', sans-serif; font-weight: Bold;\">\n    {{question}}\n  </p>\n  </div>\n  \n  <ul style=\"padding-bottom: 4.1%;\" >  \n  <li class=\"d-flex justify-content-center\" [class.active]=\"i == selectedRow\"  *ngFor=\"let element of optionsArray; let i = index\">\n    <button (click)=\"setClickedRow(i, element.link)\"><span style=\"color:#0A425D;font-size:22px;margin-right:10px;\">{{element.option}}</span><span>{{element.name}}</span></button></li>\n  \n  <li style=\"margin-top: 3%;\" class=\"d-flex justify-content-center\"><button (click) = \"navigateTo()\" class=\"nextQuestion\" [disabled]=\"nextButtonDisableFlag\" [class.changeButtonCss]=\"nextButtonCssFlag\">Next Question</button></li>\n  \n  </ul>\n  \n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/assistance/traffic-offense/traffic-offense.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/assistance/traffic-offense/traffic-offense.component.ts ***!
  \*************************************************************************/
/*! exports provided: TrafficOffenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficOffenseComponent", function() { return TrafficOffenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrafficOffenseComponent = /** @class */ (function () {
    function TrafficOffenseComponent(router, activatedRoute, ns) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ns = ns;
        this.drinkAndDrive = [{
                progress: '25%',
                first: {
                    id: 'dd1',
                    question: "Drink Drive Type",
                    options: [{ name: 'High Range', option: 'A', link: '1.2.1' }, { name: 'Medium Range', option: 'B', link: '1.2.1' },
                        { name: 'Low Range', option: 'C', link: '1.2.3' }]
                }
            }, {
                progress: '50%',
                second: {
                    question: "Driving History",
                    id: 'dd2',
                    options: [{ name: 'No Previous Drink And Drive Offense', option: 'A', link: '1.2.1.1' },
                        { name: 'No Previous Drink And Drive Offense', option: 'B', link: '1.2.1.1' },
                    ]
                }
            },
            {
                progress: '75%',
                third: {
                    question: "I want to dispute the charge",
                    id: 'dd2',
                    options: [{ name: 'Yes,  I did not commit the offense', option: 'A', link: 'final' },
                        { name: 'No, I committed the offense but having mitigating circumstances', option: 'B', link: 'final' },
                    ]
                }
            }
        ];
        this.cssFlag = false;
        this.nextButtonFlag = true;
        console.log('prev', this.ns.getPreviousUrl());
        this.activatedRoute.params.subscribe(function (params) {
            console.log('pa', params.id.slice(0, -2));
            _this.previousUrl = params.id.slice(0, -2);
            if (params.id == 1) {
                _this.question = 'Select Offense Type';
                _this.progress = '50%';
                _this.optionsArray = [{ name: 'Speeding Fine', option: 'A', link: '1.1' },
                    { name: 'Drink Driving', option: 'B', link: '1.2' },
                    { name: 'Dangerous Driving', option: 'C', link: '1.3' }, { name: 'Something Else', option: 'D', link: '1.4' }];
            }
            else if (params.id == 1.2) {
                _this.question = _this.drinkAndDrive[0].first.question;
                _this.progress = _this.drinkAndDrive[0].progress;
                _this.optionsArray = _this.drinkAndDrive[0].first.options;
            }
            else if (params.id == '1.2.1' || params.id == '1.2.2' || params.id == '1.2.3') {
                _this.question = _this.drinkAndDrive[1].second.question;
                _this.progress = _this.drinkAndDrive[1].progress;
                _this.optionsArray = _this.drinkAndDrive[1].second.options;
            }
            else if (params.id == '1.2.1.1') {
                _this.question = _this.drinkAndDrive[2].third.question;
                _this.progress = _this.drinkAndDrive[2].progress;
                _this.optionsArray = _this.drinkAndDrive[2].third.options;
            }
        });
        this.setClickedRow = function (index, link) {
            console.log('dddd', link);
            this.nextButtonCssFlag = true;
            this.nextButtonDisableFlag = false;
            this.selectedLink = link;
            this.selectedRow = index;
        };
    }
    TrafficOffenseComponent.prototype.previousUrlFunction = function () {
        console.log('null', this.previousUrl);
        if (this.previousUrl == null || this.previousUrl == undefined || this.previousUrl == '') {
            this.router.navigate(['/assistance']);
        }
        else {
            this.router.navigate(['/assistance/traffic-offense/', this.previousUrl], { skipLocationChange: true });
        }
    };
    TrafficOffenseComponent.prototype.navigateTo = function () {
        var _this = this;
        if (this.selectedLink == 'final') {
            console.log('i am email');
            this.router.navigate(['/assistance/email']);
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                _this.router.navigate(['/assistance/traffic-offense/', _this.selectedLink]);
            });
        }
    };
    TrafficOffenseComponent.prototype.ngOnInit = function () {
    };
    TrafficOffenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-traffic-offense',
            template: __webpack_require__(/*! ./traffic-offense.component.html */ "./src/app/assistance/traffic-offense/traffic-offense.component.html"),
            styles: [__webpack_require__(/*! ./traffic-offense.component.css */ "./src/app/assistance/traffic-offense/traffic-offense.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], TrafficOffenseComponent);
    return TrafficOffenseComponent;
}());



/***/ }),

/***/ "./src/app/assistance/wills/wills.component.css":
/*!******************************************************!*\
  !*** ./src/app/assistance/wills/wills.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color:#F8F8F8;\r\n}.question {\r\n    color: #0A425D;\r\n    opacity: 100%;\r\n    font-size: 2em;\r\n}#slide {\r\n    position: absolute;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-animation: slide 0.5s forwards;\r\n    -webkit-animation-delay: 0.05s;\r\n    animation: slide 0.5s forwards;\r\n    animation-delay: 0.05s;\r\n}@-webkit-keyframes slide {\r\n    100% { right: 0; }\r\n}@keyframes slide {\r\n    100% { right: 0; }\r\n}.options {\r\n    border-style: inset;\r\n    border-color: #AAB5E0;\r\n    border-width: 0.2px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 415.92px;\r\n    height: 62.5px;\r\n    text-align: left;\r\n    color: #AAB5E0;\r\n    padding:0.6%;\r\n}button {\r\n    border-style: solid;\r\n    border-color: #AAB5E0;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    background-color:white;\r\n    width: 416px;\r\n    text-align: left;\r\n    height: 62px;\r\n    color: #AAB5E0;\r\n    padding:20px;\r\n    margin-top: 15px;\r\n\toutline:none;\r\n\ttext-transform:capitalize;\r\n\tfont-size:14px;\r\n}.nextQuestion {\r\n    border-color: #279E9A;\r\n    border-width: 1px;\r\n    background-color:#F8F8F8;\r\n    width: 415.99px;\r\n    height: 47.85px;\r\n    font-size: 1em;\r\n    text-align: center;\r\n    color: #279E9A;\r\n    padding:0.6%;\r\n}li.active button{\r\n    background-color:#0A425D !important;\r\n    color:white;\r\n}.changeButtonCss{\r\n    background-image: linear-gradient( #FF8B62,#E38672, #E53E09) !important;\r\n    border: none;\r\n    opacity: 100%;\r\n    color:white;\r\n\r\n}button i{margin-right:10px;}"

/***/ }),

/***/ "./src/app/assistance/wills/wills.component.html":
/*!*******************************************************!*\
  !*** ./src/app/assistance/wills/wills.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" style = \"overflow: inherit\">\n    <div class=\"progress-bar\" role=\"progressbar\" [style.width] = \"progress\" style=\"background-image: linear-gradient( 276deg,#76A2FC,#0A425D);\n    \" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{progress}}</div>\n  </div>\n  <div id=\"slide\" style=\"background-color:#F8F8F8;\">\n  \n  <div class=\"container-fluid\" style=\"padding-top:2%;\">\n        <div class=\"row\">\n        <div class=\"col-md-1\">&nbsp;</div>\n        <div class=\"col-md-1\" style=\"position:fixed;left:8%\"><i class=\"fa fa-chevron-circle-left\" (click) = \"previousUrlFunction()\" style=\"font-size:50px;color: #AAB5E0\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"col-md-1\"  style=\"position:fixed;font-size:14px;color: #AAB5E0;left: 12.4%;padding-top:1.2%\">Previous</div>\n        <div class=\"col-md-6\">&nbsp;</div>\n        <div class=\"col-md-1\"  style=\"font-size:14px;color: #AAB5E0;position:fixed;padding-top:1.2%;left: 80%;\">Close</div>\n        <div class=\"col-md-1\"><i class=\"fa fa-times-circle\" style=\"font-size:50px;position:fixed;left:84%;color: #AAB5E0;\" aria-hidden=\"true\"></i>\n        </div>\n  \n    </div>\n    </div>\n  \n    \n  \n  <div class=\"d-flex justify-content-center\" style=\"padding: 6% 10% 0% 10%\">\n  <p class=\"question\"style=\"font-family: 'Muli', sans-serif; font-weight: Bold;\">\n    {{question}}\n  </p>\n  </div>\n  \n  <ul style=\"padding-bottom: 4.1%;\" >  \n  <li class=\"d-flex justify-content-center\" [class.active]=\"i == selectedRow\"  *ngFor=\"let element of optionsArray; let i = index\">\n    <button (click)=\"setClickedRow(i, element.link)\"><i class=\"fas fa-user\" style=\"color:#AAB5E0;float: left;\"></i>&nbsp;<span> {{element.name}}</span></button></li>\n  \n  <li style=\"margin-top: 3%;\" class=\"d-flex justify-content-center\"><button (click) = \"navigateTo()\" class=\"nextQuestion\" [disabled]=\"nextButtonDisableFlag\" [class.changeButtonCss]=\"nextButtonCssFlag\">Next Question</button></li>\n  \n  </ul>\n  \n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/assistance/wills/wills.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/assistance/wills/wills.component.ts ***!
  \*****************************************************/
/*! exports provided: WillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WillsComponent", function() { return WillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/navigation.service */ "./src/app/navigation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WillsComponent = /** @class */ (function () {
    function WillsComponent(router, activatedRoute, ns) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ns = ns;
        this.willsAndProbate = [{
                progress: '50%',
                first: {
                    id: 'wp1',
                    question: "Will Type",
                    options: [{ name: 'I already have a will', option: 'A', link: 'search' }, { name: 'I need a new will', option: 'B', link: 'search' },
                        { name: 'choice 3', option: 'C', link: 'search' }]
                }
            }
        ];
        this.cssFlag = false;
        this.nextButtonFlag = true;
        this.activatedRoute.params.subscribe(function (params) {
            _this.previousUrl = params.id.slice(0, -2);
            if (params.id == 1) {
                _this.question = 'I need help with:';
                _this.progress = '50%';
                _this.optionsArray = [{ name: 'a new or existing will', option: 'A', link: '1.1' },
                    { name: 'a probate matter', option: 'B', link: '1.2' },
                    { name: 'a new or existing power of attorney matter', option: 'C', link: '1.3' },
                    { name: 'a new or existing enduring guardianship matter', option: 'D', link: '1.4' },
                    { name: 'Something Else', option: 'E', link: '1.5' }];
            }
            else if (params.id == 1.1 || params.id == 1.2 || params.id == 1.3 || params.id == 1.4 || params.id == 1.5) {
                _this.question = _this.willsAndProbate[0].first.question;
                _this.progress = _this.willsAndProbate[0].progress;
                _this.optionsArray = _this.willsAndProbate[0].first.options;
            }
            // else if(params.id == '1.2.1' || params.id == '1.2.2' || params.id == '1.2.3') {
            //   this.question = this.willsAndProbate[1].second.question;
            //   this.progress = this.willsAndProbate[1].progress;
            //   this.optionsArray = this.willsAndProbate[1].second.options;
            // }
            // else if(params.id == '1.2.1.1') {
            //   this.question = this.willsAndProbate[2].third.question;
            //   this.progress = this.willsAndProbate[2].progress;
            //   this.optionsArray = this.willsAndProbate[2].third.options;
            // }
        });
        this.setClickedRow = function (index, link) {
            console.log('dddd', link);
            this.nextButtonCssFlag = true;
            this.nextButtonDisableFlag = false;
            this.selectedLink = link;
            this.selectedRow = index;
        };
    }
    WillsComponent.prototype.previousUrlFunction = function () {
        console.log('null', this.previousUrl);
        if (this.previousUrl == null || this.previousUrl == undefined || this.previousUrl == '') {
            this.router.navigate(['/assistance']);
        }
        else {
            this.router.navigate(['/assistance/wills/', this.previousUrl]);
        }
    };
    WillsComponent.prototype.navigateTo = function () {
        var _this = this;
        if (this.selectedLink == 'search') {
            console.log('i am email');
            this.router.navigate(['/search']);
        }
        else {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(function () {
                _this.router.navigate(['/assistance/wills/', _this.selectedLink], { skipLocationChange: true });
            });
        }
    };
    WillsComponent.prototype.ngOnInit = function () {
    };
    WillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wills',
            template: __webpack_require__(/*! ./wills.component.html */ "./src/app/assistance/wills/wills.component.html"),
            styles: [__webpack_require__(/*! ./wills.component.css */ "./src/app/assistance/wills/wills.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], WillsComponent);
    return WillsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=assistance-assistance-module.js.map