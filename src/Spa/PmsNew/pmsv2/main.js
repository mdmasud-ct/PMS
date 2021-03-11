(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Masud\IMPACT\PMSFINAL\src\Spa\PmsNew\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2TU3":
/*!***********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgtY2FsbGJhY2svYXV0aC1jYWxsYmFjay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3qug":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/patient-register/patient-register.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div  *ngIf=\"!success\" class=\"signup-form\">\n    <form  class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePatientData()\">\n    <h2>Patient Registration</h2>\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\"><label for=\"firstname\">First Name:<span class=\"asterisk\"> *</span> </label>\n                <input type=\"text\" id=\"firstname\" name=\"firstname\" formControlName=\"firstname\" class=\"form-control\" placeholder=\"Your First Name\" required autofocus>\n                <span class=\"asterisk\" *ngIf=\"fg.get('firstname').touched && fg.get('firstname').errors?.required\">\n                    First name is required!\n                </span>\n            </div>\n            \n            <div class=\"col-sm-6\"><label for=\"lastname sr-only\">Last Name:<span class=\"asterisk\"> *</span> </label>\n                <input type=\"text\" class=\"form-control\" name=\"lastname\" formControlName=\"lastname\" placeholder=\"Your Last Name\" required>\n                <span class=\"asterisk\" *ngIf=\"fg.get('lastname').touched && fg.get('lastname').errors?.required\">\n                    Last name is required!\n                </span>\n            </div>\n        </div>\n    </div>\n     \n    <div class=\"form-group\">\n        <br/>\n        <div class=\"row\">\n        <div class=\"col-sm-6\">\n        <label for=\"title\" class=\"sr-only\">Title<span class=\"asterisk\"> *</span></label>\n        <select id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Select role\" required formControlName=\"title\">\n          <option disabled selected value=\"\">Select Title</option>\n          <option *ngFor=\"let title of titles\" value={{title[0]}}>{{title[1]}}</option>\n        </select>\n        </div>\n        <div class=\"col-sm-6\">\n            <label for=\"gender\" class=\"sr-only\">Gender<span class=\"asterisk\"> *</span></label>\n            <select id=\"gender\" name=\"gender\" class=\"form-control\" placeholder=\"Select gender\" required formControlName=\"gender\">\n              <option disabled selected value=\"\">Select Gender</option>\n              <option *ngFor=\"let gender of genders\" value={{gender[0]}}>{{gender[1]}}</option>\n            </select>\n        </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email:<span class=\"asterisk\"> *</span> </label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" autocomplete=\"off\" required placeholder=\"Your Email\">\n        <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.required\">\n            Email is required!\n        </span>\n        <span class=\"asterisk\" *ngIf=\"fg.get('email').touched && fg.get('email').errors?.email\">\n            Email is not valid!\n        </span>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <label for=\"contact\">Contact No:<span class=\"asterisk\"> *</span> </label>\n                <input type=\"text\" class=\"form-control\" name=\"contact\" formControlName=\"contact\" required placeholder=\"Your Contact No.\">\n                <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.required\">\n                    Contact is required!\n                </span>\n                <span class=\"asterisk\" *ngIf=\"fg.get('contact').touched && fg.get('contact').errors?.pattern\">\n                    Enter 10 digit number only!\n                </span>\n            </div>\n            <div class=\"col-sm-6\">\n                <label for=\"dob\">DOB:<span class=\"asterisk\"> *</span> </label>\n                <input type=\"date\" [max]=\"getToday()\" class=\"form-control\" name=\"dob\" formControlName=\"dob\" required>\n                <span class=\"asterisk\" *ngIf=\"fg.get('dob').touched && fg.get('dob').errors?.required\">\n                    DOB is required!\n                </span>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n            <label for=\"password\">Password:<span class=\"asterisk\"> *</span> </label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" required placeholder=\"Password\">\n            <span class=\"asterisk\" *ngIf=\"fg.get('password').touched && fg.get('password').errors?.required\">\n            Password is required!\n        </span>\n            </div>\n            <div class=\"col-6\">\n            <label for=\"confirmpassword\">Confirm Password:<span class=\"asterisk\"> *</span> </label>\n            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" formControlName=\"confirmpassword\" required placeholder=\"Confirm Password\">\n            <span class=\"asterisk\" *ngIf=\"fg.get('confirmpassword').touched && fg.get('confirmpassword').errors?.required\">\n            ConfirmPassword is required!\n        </span>\n        <span class=\"asterisk\" *ngIf=\"fg.get('confirmpassword').touched && fg.get('confirmpassword').errors?.mismatch\">\n            ConfirmPassword does not match!\n        </span>\n            </div>\n        </div>\n    </div> \n    <div class=\"form-group\">\n        <button id=\"btnSubmit\" class=\"btn\" [disabled]=\"!fg.valid\">Register Now</button>\n        &nbsp;&nbsp;<label> Already have an account?</label>&nbsp;&nbsp;<a href=\"/login\"> Sign in</a>\n    </div>           \n</form>\n</div>\n\n<div>\n  <h1 style=\"color: red;\">{{msg}}</h1>\n</div>\n\n<div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n    <h4 class=\"alert-heading\">Success!</h4>\n    <p>Your passsword reset successfully, <a routerLink=\"/userlogin\" href=\"/userlogin\">Please login</a> to continue.</p>        \n</div>");

/***/ }),

/***/ "7Ytv":
/*!**************************************************!*\
  !*** ./src/app/account/account-routes.module.ts ***!
  \**************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "bfzl");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "l2bC");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "dvA0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'patientregister', component: _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__["PatientRegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
    //{ path: 'login',loadChildren:()=> import('./account.module').then(m=>m.AccountModule)  }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "7wfR":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/config.service */ "8WNu");
/* harmony import */ var _core_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/base.service */ "P8On");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientService = /** @class */ (function (_super) {
    __extends(PatientService, _super);
    function PatientService(httpsvc, config) {
        var _this = _super.call(this) || this;
        _this.httpsvc = httpsvc;
        _this.config = config;
        return _this;
    }
    PatientService.prototype.GetPatientAllergyDataByID = function (PatientID) {
        return this.httpsvc.get("http://localhost:3000/Allergy?patientid=" + PatientID);
    };
    PatientService.prototype.GetPatientDemographicDataByID = function (PatientID) {
        return this.httpsvc.get("http://localhost:3000/DemographicData?patientid=" + PatientID);
    };
    PatientService.prototype.GetPatientDataByID = function (PatientID) {
        return this.httpsvc.get("http://localhost:3000/Patient?id=" + PatientID);
    };
    PatientService.prototype.SaveAllergyData = function (pal) {
        console.log("service.SaveAllergyData() hits");
        var headers = { 'content-type': 'application/json' };
        if (pal.Patientid >= 0) {
            return this.httpsvc.post("http://localhost:3000/Allergy", JSON.stringify(pal), { 'headers': headers });
        }
        return null;
    };
    PatientService.prototype.SaveDemographicData = function (pdgd, operation) {
        debugger;
        console.log("service.SaveAllergyData() hits");
        var headers = { 'content-type': 'application/json' };
        if (pdgd.Patientid >= 0) {
            if (operation === "POST")
                return this.httpsvc.post("http://localhost:3000/DemographicData", JSON.stringify(pdgd), { 'headers': headers });
            else
                return this.httpsvc.patch("http://localhost:3000/DemographicData/" + pdgd.id, JSON.stringify(pdgd), { 'headers': headers });
        }
        return null;
    };
    PatientService.prototype.SavePatientVisitData = function (p) {
        console.log("service.SavePatientVisitData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post("http://localhost:3000/PatientVisit", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitAllergyData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post("http://localhost:3000/Allergy", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitDiagnosisData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post("http://localhost:3000/Diagnosis", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitProcedureData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post("http://localhost:3000/Procedure", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientVisitMedicationData = function (p) {
        console.log("service.SavePatientVisitNurseData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        return this.httpsvc.post("http://localhost:3000/Medication", JSON.stringify(p), { 'headers': headers });
    };
    PatientService.prototype.SavePatientData = function (p) {
        console.log("service.SavePatientData() hits");
        console.log(JSON.stringify(p));
        var headers = { 'content-type': 'application/json' };
        if (p.email != "") {
            //return this.httpsvc.post<Patients>("http://localhost:3000/Patient", JSON.stringify(p),{'headers':headers});
            return this.httpsvc.post(this.config.authApiURI + "/patient", p).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
    };
    PatientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    PatientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _core_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], PatientService);
    return PatientService;
}(_core_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "8PDw":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService, getClientSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientSettings", function() { return getClientSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! oidc-client */ "3Rfw");
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "P8On");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "8WNu");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        // Observable navItem source
        _this._authNavStatusSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_3__["UserManager"](getClientSettings());
        _this.manager.getUser().then(function (user) {
            _this.user = user;
            _this._authNavStatusSource.next(_this.isAuthenticated());
        });
        return _this;
    }
    AuthService.prototype.login = function () {
        return this.manager.signinRedirect();
    };
    AuthService.prototype.completeAuthentication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.manager.signinRedirectCallback()];
                    case 1:
                        _a.user = _b.sent();
                        this._authNavStatusSource.next(this.isAuthenticated());
                        this.username = this.name;
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.register = function (userRegistration) {
        console.log(userRegistration);
        return this.http.post(this.configService.authApiURI + '/account', userRegistration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.changePassword = function (userModel, token) {
        console.log(userModel);
        return this.http.post(this.configService.authApiURI + '/modify', userModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.getUserRole = function (name) {
        return this.http.post(this.configService.authApiURI + '/information', { username: name }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.user != null && !this.user.expired;
    };
    Object.defineProperty(AuthService.prototype, "authorizationHeaderValue", {
        get: function () {
            return this.user.token_type + " " + this.user.access_token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "name", {
        get: function () {
            return this.user != null ? this.user.profile.name : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "email", {
        get: function () {
            return this.user != null ? this.user.profile.email : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "role", {
        get: function () {
            return this.user != null ? this.userrole : '';
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.signout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manager.signoutRedirect()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signoutSilent = function () {
        this.user = null;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], AuthService);
    return AuthService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));

function getClientSettings() {
    return {
        authority: 'http://localhost:60970',
        client_id: 'angular_spa',
        redirect_uri: 'http://localhost:4200/auth-callback',
        post_logout_redirect_uri: 'http://localhost:4200/',
        response_type: "id_token token",
        scope: "openid profile email api.read",
        filterProtocolClaims: true,
        loadUserInfo: true,
        automaticSilentRenew: true,
        silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
    };
}


/***/ }),

/***/ "8WNu":
/*!****************************************!*\
  !*** ./src/app/core/config.service.ts ***!
  \****************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    Object.defineProperty(ConfigService.prototype, "authApiURI", {
        get: function () {
            return 'http://localhost:60970/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "resourceApiURI", {
        get: function () {
            return 'http://localhost:61006/api';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "tempResourseAPI", {
        get: function () {
            return 'http://localhost:3000';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "adminApiUri", {
        get: function () {
            return 'http://localhost:55921';
        },
        enumerable: false,
        configurable: true
    });
    ConfigService.ctorParameters = function () { return []; };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "94X0":
/*!************************************************!*\
  !*** ./src/app/core/dropdownmaster.service.ts ***!
  \************************************************/
/*! exports provided: Roles, Genders, UserType, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genders", function() { return Genders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
var Roles;
(function (Roles) {
    Roles["admin"] = "Admin";
    Roles["patient"] = "Patient";
    Roles["doctor"] = "Doctor";
    Roles["nurse"] = "Nurse";
})(Roles || (Roles = {}));
var Genders;
(function (Genders) {
    Genders["M"] = "Male";
    Genders["F"] = "Female";
    Genders["O"] = "Others";
})(Genders || (Genders = {}));
var UserType;
(function (UserType) {
    UserType["D"] = "Doctor";
    UserType["N"] = "Nurse";
})(UserType || (UserType = {}));
var Title;
(function (Title) {
    Title["Mr"] = "Mr.";
    Title["Ms"] = "Ms.";
    Title["Mrs"] = "Mrs.";
    Title["Miss"] = "Miss";
})(Title || (Title = {}));


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open \">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <!-- <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BWk6":
/*!*********************************************************!*\
  !*** ./src/app/account/register/register.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .tbar {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n  .mat-toolbar.mat-primary {\r\n  background: #202721; \r\n  color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0VBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICMyMDI3MjE7IFxyXG4gIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "DvRR":
/*!**********************************************************!*\
  !*** ./src/app/shared-modules/shared-material.module.ts ***!
  \**********************************************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { FormGroup, FormControl, Validators } from '@angular/forms';


// import {RegisterComponent} from '../../app/admin/register/register.component';



var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"]
            ]
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "FDEX":
/*!**********************************************************!*\
  !*** ./src/app/CustomValidator/PasswdMatch.validator.ts ***!
  \**********************************************************/
/*! exports provided: MatchPasswd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswd", function() { return MatchPasswd; });
function MatchPasswd(newpassword) {
    return function (control) {
        if (!control || !control.parent) {
            return null;
        }
        return control.parent.get(newpassword).value === control.value ? null : { mismatch: true };
    };
}


/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "HHbS":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Hipp":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./changepassword.component.html */ "i+F+");
/* harmony import */ var _changepassword_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.component.css */ "HHbS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(authService, toastr, spinner, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.router = router;
        this.userId = this.authService.email;
        this.usermodel = { oldPassword: '', email: this.authService.email, newPassword: '', confirmPassword: '' };
        this.submitted = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.userId = this.authService.email;
        this.usermodel = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]('', this.userId, '', '');
        console.log(this.userId);
    };
    ChangepasswordComponent.prototype.onSubmit = function (token) {
        var _this = this;
        this.busy = true;
        this.spinner.show();
        //this.usermodel.email = this.authService.email;
        this.formdata = this.usermodel;
        this.usermodel.email = this.userId;
        console.log(this.usermodel);
        this.authService.changePassword(this.usermodel, this.authService.authorizationHeaderValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinner.hide();
        }))
            .subscribe(function (result) {
            if (result) {
                _this.busy = false;
                _this.spinner.hide();
                console.log("success");
                _this.success = true;
                _this.toastr.success('Success', 'Password Reset Successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                _this.authService.signoutSilent();
                //this.router.navigate(['relogin/Password reset successfully']);
            }
        }, function (error) {
            _this.spinner.hide();
            _this.result = error;
            console.log(_this.result);
            _this.toastr.error('Error', _this.result, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
            _this.error = error;
        });
    };
    ChangepasswordComponent.prototype.relogin = function () {
        this.authService.signout();
    };
    ChangepasswordComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-changepassword',
            template: _raw_loader_changepassword_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_changepassword_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "KJd+":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row justify-content-center\"> \r\n    <div class=\"col-md-4 text-center\">\r\n      <form *ngIf=\"!success\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <img class=\"mb-4\" src=\"assets/images/PMSlogo.png\" alt=\"\" width=\"125\" height=\"125\">\r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\" class=\"sr-only\">Name</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"userRegistration.name\" class=\"form-control\" placeholder=\"Your name\" required autoFocus>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\" class=\"sr-only\">Email address</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"userRegistration.email\" class=\"form-control\" placeholder=\"Email address\" email required>\r\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"role\" class=\"sr-only\">Role</label>\r\n          <select id=\"role\" name=\"role\" [(ngModel)]=\"userRegistration.role\"  class=\"form-control\" placeholder=\"Select role\" required>\r\n            <option disabled selected value=\"\">Select Role</option>\r\n            <!-- <option>Choose Role</option> -->\r\n            <option *ngFor=\"let role of keys()\">{{role}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\" class=\"sr-only\">Password</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"userRegistration.password\" class=\"form-control\" placeholder=\"Password\" aria-describedby=\"passwordHelp\" required>     \r\n            <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small>\r\n        </div>   \r\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.form.valid\">Go</button>\r\n        <ngx-spinner></ngx-spinner>   \r\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\" role=\"alert\">\r\n            <strong>Oops!</strong> {{error}}\r\n        </div>     \r\n      </form>      \r\n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n          <h4 class=\"alert-heading\">Well done!</h4>\r\n          <p>Your account was created successfully, <a routerLink=\"/login\">Please login</a> to continue.</p>        \r\n      </div>  \r\n    </div> \r\n  </div>\r\n  \r\n  <ngx-spinner></ngx-spinner>\r\n  ");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"/\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img style=\"margin-top: 3%;\" src=\"/assets/img/PMSlogo.png\"/>\n        </div>\n        PMS\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "NBk6":
/*!**********************************************************!*\
  !*** ./src/app/auth-callback/auth-callback.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function() { return AuthCallbackComponent; });
/* harmony import */ var _raw_loader_auth_callback_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-callback.component.html */ "qH2X");
/* harmony import */ var _auth_callback_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-callback.component.css */ "2TU3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // check for error
                        if (this.route.snapshot.fragment.indexOf('error') >= 0) {
                            this.error = true;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.completeAuthentication()];
                    case 1:
                        _a.sent();
                        //this.router.navigate(['/home']); 
                        console.log("sharedwrapper");
                        this.router.navigate(['/dashboard']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthCallbackComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AuthCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-callback',
            template: _raw_loader_auth_callback_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_callback_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "P8On":
/*!**************************************!*\
  !*** ./src/app/core/base.service.ts ***!
  \**************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either application-error in header or model error in body
        if (applicationError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(applicationError);
        }
        var modelStateErrors = '';
        // for now just concatenate the error descriptions, alternative we could simply pass the entire error response upstream
        for (var key in error.error) {
            if (error.error[key])
                modelStateErrors += error.error[key].description + '\n';
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(modelStateErrors || 'Server error');
    };
    BaseService.ctorParameters = function () { return []; };
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "Rz6H":
/*!*****************************************!*\
  !*** ./src/app/core/ToasterPosition.ts ***!
  \*****************************************/
/*! exports provided: ToasterPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterPosition", function() { return ToasterPosition; });
var ToasterPosition;
(function (ToasterPosition) {
    ToasterPosition["topRight"] = "toast-top-right";
    ToasterPosition["topLeft"] = "toast-top-left";
    ToasterPosition["bottomRight"] = "toast-bottom-right";
    ToasterPosition["bottomLeft"] = "toast-bottom-left";
    ToasterPosition["topFull"] = "toast-top-full-width";
    // Other positions you would like
})(ToasterPosition || (ToasterPosition = {}));


/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!-- <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form> -->\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"/dashboard\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Confirmed: Dr. D'souza</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Confirmed: Dr. Yigit</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Declined: Dr. Rona</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Appointment Declined: Dr. Bose</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">See all...</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink2\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"logout()\"><i style=\"font-size: medium;\" class=\"material-icons\">logout</i>&nbsp;&nbsp;&nbsp; logout</a>\n                        <a class=\"dropdown-item\" href=\"/changepassword\" ><i style=\"font-size: medium;\" class=\"material-icons\">vpn_key</i>&nbsp;&nbsp;&nbsp; change password</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(email, oldPassword, newPassword, confirmPassword) {
    }
    return UserModel;
}());



/***/ }),

/***/ "UXbA":
/*!***************************************************!*\
  !*** ./src/app/account/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ngx-spinner></ngx-spinner>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <!-- <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav> -->\n        <div class=\"copyright pull-center\">\n            &copy;\n            {{test | date: 'yyyy'}}, Citiustech\n            <!-- <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web. -->\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/angular */ "IvIE");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-modules/shared-material.module */ "DvRR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/account.module */ "jcJX");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "Hipp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_5__["FullCalendarModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_8__["SharedMaterialModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_17__["AccountModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right'
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_18__["AuthCallbackComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_19__["ChangepasswordComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-callback/auth-callback.component */ "NBk6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    {
        path: "auth-callback",
        component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_5__["AuthCallbackComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    //useHash: true, 
                    relativeLinkResolution: 'legacy'
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "bfzl":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "KJd+");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.css */ "BWk6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/dropdownmaster.service */ "94X0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, toastr, spinner) {
        this.authService = authService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.userRegistration = { name: '', email: '', password: '', role: '' };
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.roles = _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_8__["Roles"];
    };
    RegisterComponent.prototype.keys = function () {
        var keys = Object.keys(this.roles);
        //console.log(keys);
        return keys;
        //return keys.slice(keys.length / 2);
    };
    RegisterComponent.prototype.onSubmit1 = function () {
        this.success = true;
        this.toastr.success('Success', 'Registered successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, this.functioncallbackFunction);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.authService.register(this.userRegistration)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.spinner.hide();
        }))
            .subscribe(function (result) {
            if (result) {
                console.log("Succeess");
                _this.success = true;
                _this.toastr.success('Success', 'Registered successfully', _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull, _this.functioncallbackFunction);
            }
        }, function (error) {
            //if(error.status==='undefined')
            _this.toastr.error('Error', "Unexpected error occured. Please contact administrator.", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_7__["ToasterPosition"].topFull);
            //else
            //this.toastr.error('Error',error,ToasterPosition.topFull,this.functioncallbackFunction
            _this.error = error;
        });
    };
    RegisterComponent.prototype.functioncallbackFunction = function () {
        //this.toastr.warning("warning","Testing",ToasterPosition.topFull);
        this.success = true;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registers',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_6__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "dvA0":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "g7tD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "UXbA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, spinner) {
        this.authService = authService;
        this.spinner = spinner;
        this.title = "Login";
    }
    LoginComponent.prototype.Login = function () {
        this.spinner.show();
        this.authService.login();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.Login();
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userlogin',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "e+Xv":
/*!****************************************!*\
  !*** ./src/app/core/ToasterService.ts ***!
  \****************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(toastr) {
        this.toastr = toastr;
        this.timeout = 3000;
    }
    ToasterService.prototype.error = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.error(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.success = function (title, message, positionClass, mycallback, timein) {
        if (mycallback === void 0) { mycallback = this.Callback; }
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.success(message, title, { positionClass: positionClass, timeOut: timein, closeButton: true, });
        mycallback();
    };
    ToasterService.prototype.warning = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.warning(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.info = function (title, message, positionClass, timein) {
        if (timein === void 0) { timein = this.timeout; }
        this.toastr.info(message, title, { positionClass: positionClass, timeOut: timein });
    };
    ToasterService.prototype.showresponse = function (title, message, positionClass) {
        if (title === void 0) { title = ''; }
        switch (title) {
            case "": {
            }
            case "": {
            }
            case "": {
            }
            case "": {
            }
            case "": {
            }
        }
        this.toastr.info(message, title, { positionClass: positionClass });
    };
    ToasterService.prototype.mycallback = function () {
        console.log("call");
    };
    ToasterService.prototype.Callback = function () {
        console.log("call");
    };
    ToasterService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }
    ]; };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "g7tD":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Default form login -->\r\n<form class=\"text-center border border-light p-5\">\r\n\r\n    <p class=\"h4 mb-4\">Sign in</p>\r\n  \r\n    <!-- Email -->\r\n    <input type=\"email\" id=\"defaultLoginFormEmail\" class=\"form-control mb-4\" placeholder=\"E-mail\">\r\n  \r\n    <!-- Password -->\r\n    <input type=\"password\" id=\"defaultLoginFormPassword\" class=\"form-control mb-4\" placeholder=\"Password\">\r\n  \r\n    <div class=\"d-flex justify-content-around\">\r\n      <div>\r\n        <!-- Forgot password -->\r\n        <a href=\"\">Forgot password?</a>\r\n      </div>\r\n    </div>\r\n  \r\n    <!-- Sign in button -->\r\n    <button mat-raised-button color=\"accent\" (click)=\"Login()\">\r\n      Login\r\n    </button>\r\n  \r\n    <!-- Register -->\r\n    <p>Not a member?\r\n      <a href=\"\">Register</a>\r\n    </p>\r\n  \r\n     \r\n  </form>\r\n  <!-- Default form login -->\r\n  <ngx-spinner></ngx-spinner>");

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/auth.service */ "8PDw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, auth) {
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        console.log(titlee);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        if (titlee == '/changepassword') {
            return 'Change Password';
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.signout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _core_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "i+F+":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-danger\">\n                <h4 class=\"card-title\">Change Password</h4>\n                <p class=\"card-category\">Fill in the details</p>\n            </div>\n            <div class=\"card-body\">\n\n                <div class=\"row justify-content-center\"> \n                    <div class=\"col-md-4 text-center\">\n                        <form *ngIf=\"!success\" #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                            <!-- <br></br> -->\n                            <div class=\"form-group\">\n                                <mat-form-field class=\"example-full-width form-group\">\n                                <input matInput placeholder=\"Old Password\" required type=\"password\" id=\"oldPassword\" name=\"oldPassword\" [(ngModel)]=\"usermodel.oldPassword\">\n                                </mat-form-field>\n                            </div>\n                        \n                            <div class=\"form-group\">\n                                <!-- <label for=\"newPassword\" class=\"sr-only\">New Password</label>\n                                <input type=\"password\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"usermodel.newPassword\" class=\"form-control\" placeholder=\"New Password\" required aria-describedby=\"passwordHelp\"> -->\n                                <mat-form-field class=\"example-full-width form-group\">\n                                    <input matInput placeholder=\"New Password\" required  type=\"password\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"usermodel.newPassword\">\n                                </mat-form-field>\n                                <!-- <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small> -->\n                            </div>\n                            <div class=\"form-group\">\n                            <!-- <label for=\"newPassword\" class=\"sr-only\">Confirm Password</label>\n                            <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\" [(ngModel)]=\"usermodel.confirmPassword\" class=\"form-control\" placeholder=\"Confirm Password\" aria-describedby=\"passwordHelp\" required>      -->\n                            <mat-form-field class=\"example-full-width form-group\">\n                                <input matInput placeholder=\"Confirm Password\" required  type=\"password\" id=\"confirmpassword\" name=\"confirmpassword\" [(ngModel)]=\"usermodel.confirmpassword\">\n                            </mat-form-field>\n                            <small id=\"passwordHelp\" class=\"form-text text-muted\">Min. 6 characters with at least one non alphanumeric character</small>\n                            </div> \n                        <input type=\"text\" hidden id=\"email\" name=\"email\" [(ngmodel)] = \"usermodel.email\" value='{{userId}}' class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"usermodel.email\">  \n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.form.valid\">Go</button> \n\n                        <ngx-spinner></ngx-spinner>   \n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\" role=\"alert\">\n            <strong>Oops!</strong> {{error}}\n        </div>     \n      </form>     \n      <!-- <form class=\"form-group\" [formGroup]=\"fg\" (ngSubmit)=\"SavePractitionerData()\">\n\n      </form> -->\n      <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\n          <h4 class=\"alert-heading\">Success!</h4>\n          <p id='relogin' (click)=\"relogin\" >Your passsword reset successfully, <a routerLink=\"/login\" href=\"/login\"><b>Please login</b></a> to continue.</p>        \n      </div>  \n                    </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  <!-- <ngx-spinner></ngx-spinner>   -->\n  \n  ");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "bfzl");
/* harmony import */ var _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-register/patient-register.component */ "l2bC");
/* harmony import */ var _account_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-routes.module */ "7Ytv");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/ToasterService */ "e+Xv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-modules/shared-material.module */ "DvRR");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { HomeModule } from '../home/home.module';
//import { HeaderComponent } from '../home/header/header.component'; 



var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], _patient_register_patient_register_component__WEBPACK_IMPORTED_MODULE_3__["PatientRegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _account_routes_module__WEBPACK_IMPORTED_MODULE_4__["AccountRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _shared_modules_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["SharedMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            providers: [_core_ToasterService__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "l2bC":
/*!************************************************************************!*\
  !*** ./src/app/account/patient-register/patient-register.component.ts ***!
  \************************************************************************/
/*! exports provided: PatientRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientRegisterComponent", function() { return PatientRegisterComponent; });
/* harmony import */ var _raw_loader_patient_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./patient-register.component.html */ "3qug");
/* harmony import */ var _patient_register_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-register.component.css */ "q+Aq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _CustomValidator_PasswdMatch_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CustomValidator/PasswdMatch.validator */ "FDEX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ToasterService */ "e+Xv");
/* harmony import */ var _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ToasterPosition */ "Rz6H");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/dropdownmaster.service */ "94X0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PatientRegisterComponent = /** @class */ (function () {
    function PatientRegisterComponent(patientsvc, router, toast, spinner) {
        this.patientsvc = patientsvc;
        this.router = router;
        this.toast = toast;
        this.spinner = spinner;
        this.msg = "";
        this.fg = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, Object(_CustomValidator_PasswdMatch_validator__WEBPACK_IMPORTED_MODULE_5__["MatchPasswd"])('password')]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    // SavePatientData(eventsource: any): void
    PatientRegisterComponent.prototype.SavePatientData1 = function () {
        this.fg.reset();
    };
    PatientRegisterComponent.prototype.SavePatientData = function () {
        var _this = this;
        this.spinner.show();
        console.log("ts.SavePatientData() hits");
        console.log(this.fg.value);
        console.log(this.fg.value.firstname);
        //this.patient=new Patients(this.fg.value.firstname,this.fg.value.lastname,this.fg.value.dob,this.fg.value.contact
        //                  ,this.fg.value.email,this.fg.value.password,(this.fg.value.firstname+" "+this.fg.value.lastname),"Active","No",this.fg.value.title,this.fg.value.gender);
        console.log(this.patient);
        if (this.fg.invalid == false) {
            this.ob = this.patientsvc.SavePatientData(this.patient);
            this.ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () {
                _this.spinner.hide();
            })).subscribe(function (dataa) {
                _this.res = dataa;
                console.log(_this.res);
                if (_this.res.code == "1") {
                    _this.success = true;
                    _this.showMessage();
                    _this.toast.success("Success", "User registered successfully", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
                else {
                    _this.toast.error("Error", _this.res.response, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull);
                }
            }, function (error) { return _this.toast.error("Error", error, _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull); });
        }
    };
    PatientRegisterComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    PatientRegisterComponent.prototype.navigatePage = function () {
        this.router.navigate(["/userlogin"]);
    };
    PatientRegisterComponent.prototype.showMessage = function () {
        this.spinner.hide();
        this.toast.success("Success", "Patient registered successfully", _core_ToasterPosition__WEBPACK_IMPORTED_MODULE_8__["ToasterPosition"].topFull, 5000);
    };
    PatientRegisterComponent.prototype.ngOnInit = function () {
        this.titles = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__["Title"]);
        this.genders = Object.entries(_core_dropdownmaster_service__WEBPACK_IMPORTED_MODULE_10__["Genders"]);
    };
    PatientRegisterComponent.ctorParameters = function () { return [
        { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    PatientRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-patient-register',
            template: _raw_loader_patient_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            providers: [_core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]],
            styles: [_patient_register_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core_ToasterService__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], PatientRegisterComponent);
    return PatientRegisterComponent;
}());



/***/ }),

/***/ "q+Aq":
/*!*************************************************************************!*\
  !*** ./src/app/account/patient-register/patient-register.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .tbar {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n  .mat-toolbar.mat-primary {\r\n  background: #202721; \r\n  color: #fff;\r\n}\r\n\r\n  /*  body {\r\n            color: #fff;\r\n            background: #63738a;\r\n            font-family: 'Roboto', sans-serif;\r\n        }\r\n\r\n        .form-control {\r\n            height: 40px;\r\n            box-shadow: none;\r\n            color: #969fa4;\r\n        }*/\r\n\r\n  /* @import '~bootstrap/dist/css/bootstrap.min.css'; */\r\n\r\n  /* .form-control:focus {\r\n          border-color: #5cb85c;\r\n      } */\r\n\r\n  .form-control, .btn {\r\n          border-radius: 3px;\r\n      }\r\n\r\n  .signup-form {\r\n          width: 800px;\r\n          margin: 0 auto;\r\n          padding: 30px 0;\r\n      }\r\n\r\n  .signup-form h2 {\r\n              color: #636363;\r\n              margin: 0 0 15px;\r\n              position: relative;\r\n              text-align: center;\r\n          }\r\n\r\n  .signup-form h2:before, .signup-form h2:after {\r\n                  content: \"\";\r\n                  height: 2px;\r\n                  width: 30%;\r\n                  background: #d4d4d4;\r\n                  position: absolute;\r\n                  top: 50%;\r\n                  z-index: 2;\r\n              }\r\n\r\n  .signup-form h2:before {\r\n                  left: 0;\r\n              }\r\n\r\n  .signup-form h2:after {\r\n                  right: 0;\r\n              }\r\n\r\n  .signup-form .hint-text {\r\n              color: #999;\r\n              margin-bottom: 30px;\r\n              text-align: center;\r\n          }\r\n\r\n  .signup-form form {\r\n              color: #999;\r\n              border-radius: 3px;\r\n              margin-bottom: 15px;\r\n              background: #f2f3f7;\r\n              box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n              padding: 30px;\r\n          }\r\n\r\n  .signup-form .form-group {\r\n              margin-bottom: 20px;\r\n          }\r\n\r\n  .signup-form input[type=\"checkbox\"] {\r\n              margin-top: 3px;\r\n          }\r\n\r\n  .signup-form .btn {\r\n              font-size: 16px;\r\n              min-width: 140px;\r\n              outline: none !important;\r\n          }\r\n\r\n  .signup-form .row div:first-child {\r\n              padding-right: 10px;\r\n          }\r\n\r\n  .signup-form .row div:last-child {\r\n              padding-left: 10px;\r\n          }\r\n\r\n  .signup-form a {\r\n              color: #fff;\r\n              text-decoration: underline;\r\n          }\r\n\r\n  .signup-form a:hover {\r\n                  text-decoration: none;\r\n              }\r\n\r\n  .signup-form form a {\r\n              color: #0047ab;\r\n              /* font-weight: bold; */\r\n              text-decoration: none;\r\n          }\r\n\r\n  .signup-form form a:hover {\r\n                  text-decoration: underline;\r\n              }\r\n\r\n  #btnSubmit {\r\n          background-color: #0047ab;\r\n          color: white;\r\n      }\r\n\r\n  .asterisk{\r\n          color: red;\r\n          font-style: italic;\r\n          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\r\n      }\r\n\r\n  html, body { height: 100%; }\r\n\r\n  body { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\r\n\r\n  main > .container {\r\n          padding: 0; \r\n          max-width: 100%;\r\n          width:100% ;\r\n      }\r\n\r\n  .ng-valid[required], .ng-valid.required  {\r\n        border-left: 5px solid #42A948; /* green */\r\n      }\r\n\r\n  .ng-invalid:not(form)  {\r\n         border-left: 5px solid #a94442; /* red */\r\n      }\r\n\r\n  html, body { height: 100%; }\r\n\r\n  body { margin: 0; font-family: Roboto, \"Helvetica Neue\", sans-serif; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wYXRpZW50LXJlZ2lzdGVyL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztFQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7RUFFQTs7Ozs7Ozs7OztVQVVVOztFQUVGLHFEQUFxRDs7RUFFckQ7O1NBRUM7O0VBRUg7VUFDSSxrQkFBa0I7TUFDdEI7O0VBRUE7VUFDSSxZQUFZO1VBQ1osY0FBYztVQUNkLGVBQWU7TUFDbkI7O0VBRUk7Y0FDSSxjQUFjO2NBQ2QsZ0JBQWdCO2NBQ2hCLGtCQUFrQjtjQUNsQixrQkFBa0I7VUFDdEI7O0VBRUk7a0JBQ0ksV0FBVztrQkFDWCxXQUFXO2tCQUNYLFVBQVU7a0JBQ1YsbUJBQW1CO2tCQUNuQixrQkFBa0I7a0JBQ2xCLFFBQVE7a0JBQ1IsVUFBVTtjQUNkOztFQUVBO2tCQUNJLE9BQU87Y0FDWDs7RUFFQTtrQkFDSSxRQUFRO2NBQ1o7O0VBRUo7Y0FDSSxXQUFXO2NBQ1gsbUJBQW1CO2NBQ25CLGtCQUFrQjtVQUN0Qjs7RUFFQTtjQUNJLFdBQVc7Y0FDWCxrQkFBa0I7Y0FDbEIsbUJBQW1CO2NBQ25CLG1CQUFtQjtjQUNuQiwwQ0FBMEM7Y0FDMUMsYUFBYTtVQUNqQjs7RUFFQTtjQUNJLG1CQUFtQjtVQUN2Qjs7RUFFQTtjQUNJLGVBQWU7VUFDbkI7O0VBRUE7Y0FDSSxlQUFlO2NBQ2YsZ0JBQWdCO2NBQ2hCLHdCQUF3QjtVQUM1Qjs7RUFFQTtjQUNJLG1CQUFtQjtVQUN2Qjs7RUFFQTtjQUNJLGtCQUFrQjtVQUN0Qjs7RUFFQTtjQUNJLFdBQVc7Y0FDWCwwQkFBMEI7VUFDOUI7O0VBRUk7a0JBQ0kscUJBQXFCO2NBQ3pCOztFQUVKO2NBQ0ksY0FBYztjQUNkLHVCQUF1QjtjQUN2QixxQkFBcUI7VUFDekI7O0VBRUk7a0JBQ0ksMEJBQTBCO2NBQzlCOztFQUVSO1VBQ0kseUJBQXlCO1VBQ3pCLFlBQVk7TUFDaEI7O0VBRUE7VUFDSSxVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCO01BQ0o7O0VBRUEsYUFBYSxZQUFZLEVBQUU7O0VBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFOztFQUVyRTtVQUNJLFVBQVU7VUFDVixlQUFlO1VBQ2YsV0FBVztNQUNmOztFQUVBO1FBQ0UsOEJBQThCLEVBQUUsVUFBVTtNQUM1Qzs7RUFFQTtTQUNHLDhCQUE4QixFQUFFLFFBQVE7TUFDM0M7O0VBQ0EsYUFBYSxZQUFZLEVBQUU7O0VBQzNCLE9BQU8sU0FBUyxFQUFFLGlEQUFpRCxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wYXRpZW50LXJlZ2lzdGVyL3BhdGllbnQtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcblxyXG4gIC50YmFyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMjAyNzIxOyBcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogIGJvZHkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYzNzM4YTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICM5NjlmYTQ7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8qIEBpbXBvcnQgJ35ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnOyAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG4gICAgICB9ICovXHJcbiAgICAgIFxyXG4gICAgICAuZm9ybS1jb250cm9sLCAuYnRuIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNpZ251cC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIGgyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBoMjpiZWZvcmUsIC5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLnNpZ251cC1mb3JtIGgyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC5zaWdudXAtZm9ybSBmb3JtIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5idG4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gLnJvdyBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuc2lnbnVwLWZvcm0gZm9ybSBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwNDdhYjtcclxuICAgICAgICAgICAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIC5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjYnRuU3VibWl0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ3YWI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hc3Rlcmlza3tcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxuICAgICAgfVxyXG5cclxuICAgICAgaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxyXG4gICAgICBib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cclxuICAgICAgXHJcbiAgICAgIG1haW4gPiAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6MTAwJSA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAubmctaW52YWxpZDpub3QoZm9ybSkgIHtcclxuICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuICAgICAgfVxyXG4gICAgICBodG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XHJcbiAgICAgIGJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfSJdfQ== */");

/***/ }),

/***/ "qH2X":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-callback/auth-callback.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"error\" class=\"row justify-content-center\">\n    <div class=\"col-md-8 text-center\">\n          <div class=\"alert alert-warning\" role=\"alert\">\n            Oops, there was an error, please try to <a routerLink=\"/login\">login again</a>.\n            <br/>\n            Or <a routerLink=\"/patientregister\">register</a> to create a new account.  \n          </div>\n    </div>\n</div>");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/calendar', title: 'Calendar', icon: 'calendar_view_month', class: 'calendar' },
    { path: '/doctor', title: 'Doctors', icon: 'medical_services', class: 'doctor' },
    { path: '/nurse', title: 'Nurses', icon: 'medical_services', class: 'nurse' },
    { path: '/patient', title: 'Patients', icon: 'medical_services', class: 'patient' },
    //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    //{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map