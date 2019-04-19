(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _on_board_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-board/on-boarding/on-boarding.component */ "./src/app/on-board/on-boarding/on-boarding.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _on_board_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-board/student-list/student-list.component */ "./src/app/on-board/student-list/student-list.component.ts");
/* harmony import */ var _on_board_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-board/on-boarding-form/on-boarding-form.component */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _login_register_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/register/register/register.component */ "./src/app/login/register/register/register.component.ts");









var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _login_register_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    {
        path: 'onBoard', component: _on_board_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_3__["OnboardingComponent"],
        children: [
            {
                path: 'form',
                component: _on_board_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingFormComponent"]
            },
            {
                path: 'studentlist',
                component: _on_board_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__["StudentsListComponent"]
            }
        ],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'students-onboarding-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _on_board_on_boarding_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-board/on-boarding-app.module */ "./src/app/on-board/on-boarding-app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/data */ "./src/app/shared/data.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");








//import { LoginComponent } from './login/login/login.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _on_board_on_boarding_app_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingAppModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"].forRoot(_shared_data__WEBPACK_IMPORTED_MODULE_7__["Data"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _on_board_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../on-board/material.module */ "./src/app/on-board/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register/register.component */ "./src/app/login/register/register/register.component.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _on_board_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.fill-remaining-space{\r\n    text-align: center;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.form-body{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    margin-top:100px;\r\n    }\r\n.form-full-width .form-element{\r\n        width:500px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0FBRUE7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZpbGwtcmVtYWluaW5nLXNwYWNle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uZm9ybS1ib2R5e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1mdWxsLXdpZHRoIC5mb3JtLWVsZW1lbnR7XHJcbiAgICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">Login</span>\n</mat-toolbar>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" class=\"form form-full-width\">\n\n  <div class=\"form-body\">\n    <div *ngIf=\"invalidCredentials\" class=\"error-msg\">\n      <p class=\"error\">Invalid Credentials</p>\n    </div>\n    <mat-form-field class=\"form-element\">\n      <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"email\" />\n    </mat-form-field>\n    <div\n      *ngIf=\"loginForm.controls['email'].errors && (loginForm.controls['email'].dirty && loginForm.controls['email'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!loginForm.controls['email'].errors.required\">Email is required.</span>\n      <span class=\"error\" [hidden]=\"!loginForm.controls['email'].errors.email\">Email is invalid.</span>\n    </div>\n    <br />\n    <mat-form-field class=\"form-element\">\n      <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n    <div\n      *ngIf=\"loginForm.controls['password'].errors && (loginForm.controls['password'].dirty && loginForm.controls['password'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!loginForm.controls['password'].errors.required\">Password is required.</span>\n    </div>\n\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!loginForm.valid\">Login\n      </button>\n    </div>\n    <br />\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"primary\" (click)=\"navigateToRegister()\" class=\"button\">Register\n      </button>\n      <span>    Not a member? Register here</span>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.invalidCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.checkCredentials(this.loginForm.value).subscribe(function (value) {
            if (value != null && value.length > 0) {
                _this.authService.login();
                _this.router.navigateByUrl('/onBoard/form');
            }
            else {
                console.log("invalid");
                _this.invalidCredentials = true;
            }
        });
    };
    LoginComponent.prototype.navigateToRegister = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/login/register/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.fill-remaining-space{\r\n    text-align: center;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.form-body{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    margin-top:100px;\r\n    }\r\n.form-full-width .form-element{\r\n        width:500px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCO0FBRUE7UUFDSSxXQUFXO0lBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZpbGwtcmVtYWluaW5nLXNwYWNle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4uZm9ybS1ib2R5e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1mdWxsLXdpZHRoIC5mb3JtLWVsZW1lbnR7XHJcbiAgICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/login/register/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/login/register/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">Register</span>\n</mat-toolbar>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\" class=\"form form-full-width\">\n \n  <div class=\"form-body\">\n      <div *ngIf=\"invalidCredentials\" class=\"error-msg\">\n          <p class=\"error\" >Invalid Credentials</p>\n        </div>\n    <mat-form-field class=\"form-element\">\n      <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"email\"  />\n    </mat-form-field>\n    <div *ngIf=\"registerForm.controls['email'].errors && (registerForm.controls['email'].dirty && registerForm.controls['email'].touched )\" class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!registerForm.controls['email'].errors.required\">Email is required.</span>\n      <span class=\"error\" [hidden]=\"!registerForm.controls['email'].errors.email\">Email is invalid.</span> \n    </div>\n    <br />\n    <mat-form-field class=\"form-element\">\n      <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field> \n    <div *ngIf=\"registerForm.controls['password'].errors && (registerForm.controls['password'].dirty && registerForm.controls['password'].touched )\" class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!registerForm.controls['password'].errors.required\">Password is required.</span>\n    </div>\n\n  <div class=\"form-element\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!registerForm.valid\">Register\n    </button>\n  </div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/login/register/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/login/register/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(snackBar, router, formBuilder, authService) {
        this.snackBar = snackBar;
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.registerUser(this.registerForm.value).subscribe(function (value) {
            console.log("User registered");
            _this.router.navigateByUrl('/login');
            _this.snackBar.open('register success ! Try login now', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/register/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/on-board/confirmation-dialog/confirmation-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div mat-dialog-content>\r\n  <p>{{message}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"agreed\" cdkFocusInitial>Yes</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.agreed = true;
        this.message = data.message;
    }
    ConfirmationDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirmation-dialog.component.css',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmationDialog);
    return ConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/on-board/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/on-board/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            ],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], useValue: {} }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], useValue: {} }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], useValue: [] }]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/on-board/on-boarding-app.module.ts":
/*!****************************************************!*\
  !*** ./src/app/on-board/on-boarding-app.module.ts ***!
  \****************************************************/
/*! exports provided: OnboardingAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingAppModule", function() { return OnboardingAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding/on-boarding.component */ "./src/app/on-board/on-boarding/on-boarding.component.ts");
/* harmony import */ var _on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-boarding-form/on-boarding-form.component */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/on-board/student-list/student-list.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/on-board/student-detail/student-detail.component.ts");
/* harmony import */ var _on_boarding_header_on_boarding_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./on-boarding-header/on-boarding-header.component */ "./src/app/on-board/on-boarding-header/on-boarding-header.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "./src/app/on-board/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/filter.pipe */ "./src/app/shared/filter.pipe.ts");
/* harmony import */ var _on_board_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../on-board/confirmation-dialog/confirmation-dialog.component */ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts");
















var OnboardingAppModule = /** @class */ (function () {
    function OnboardingAppModule() {
    }
    OnboardingAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_on_board_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialog"], _on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingComponent"], _on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingFormComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentsListComponent"], _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_9__["StudentDetailComponent"], _on_boarding_header_on_boarding_header_component__WEBPACK_IMPORTED_MODULE_10__["OnboardingHeaderComponent"], _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]],
            exports: [_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_6__["OnboardingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]
            ],
            entryComponents: [_on_board_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialog"]]
        })
    ], OnboardingAppModule);
    return OnboardingAppModule;
}());



/***/ }),

/***/ "./src/app/on-board/on-boarding-form/on-boarding-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-form/on-boarding-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row{\r\n    height:40px;\r\n}\r\n.form-body{\r\nmargin: 0 auto;\r\nwidth: 500px;\r\n}\r\n.form-full-width .form-element{\r\n    width:500px;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.required-symbol{\r\n    color:red;\r\n    font-weight: 800;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvb24tYm9hcmRpbmctZm9ybS9vbi1ib2FyZGluZy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvb24tYm9hcmQvb24tYm9hcmRpbmctZm9ybS9vbi1ib2FyZGluZy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcclxuICAgIGhlaWdodDo0MHB4O1xyXG59XHJcbi5mb3JtLWJvZHl7XHJcbm1hcmdpbjogMCBhdXRvO1xyXG53aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWZ1bGwtd2lkdGggLmZvcm0tZWxlbWVudHtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucmVxdWlyZWQtc3ltYm9se1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/on-board/on-boarding-form/on-boarding-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-form/on-boarding-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <mat-toolbar color=\"primary\">\n    <span class=\"fill-remaining-space\">On Boarding Form</span>\n  </mat-toolbar>\n  <div class=\"form-body\" novalidate>\n    <form [formGroup]=\"onBoardForm\" (ngSubmit)=\"onSubmit(onBoardForm.value)\" class=\"form form-full-width\">\n\n      <div>\n        <mat-form-field class=\"form-element\">\n          <input name=\"studentName\" matInput placeholder=\"Student Name\" formControlName=\"studentName\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['studentName'].errors && (onBoardForm.controls['studentName'].dirty && onBoardForm.controls['studentName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['studentName'].errors.required\">Student Name is\n            required.</span>\n        </div>\n        <br />\n        <mat-form-field class=\"form-element\">\n          <mat-label>Student category (required)</mat-label>\n          <select #category (change)=\"onSelectingCategory(category.value)\" matNativeControl id=\"category\"\n            formControlName=\"category\">\n            <option *ngFor=\"let c of categories\" [value]=\"c\">{{ c }}</option>\n          </select>\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['category'].errors && (onBoardForm.controls['category'].dirty && onBoardForm.controls['category'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['category'].errors.required\">Student Name is\n            required.</span>\n        </div>\n\n        <br />\n        <div formGroupName=\"documents\">\n          <mat-label class=\"form-element\">Documents</mat-label>\n\n          <div class=\"form-element\">\n            <mat-checkbox matInput formControlName=\"domicile\" value=\"1\">Domicile<span class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.domicile').errors \" class=\"error-msg\">\n            <span class=\"error\">Domicile Certificate is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"birthCertificate\" value=\"1\">Birth Certificate<span\n                class=\"required-symbol\">*</span></mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.birthCertificate').errors \" class=\"error-msg\">\n            <span class=\"error\">Birth Certificate is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"markSheets\" value=\"1\">Mark Sheets<span class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.markSheets').errors \" class=\"error-msg\">\n            <span class=\"error\">Mark Sheet is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"policeClearance\" value=\"1\">Police Clearance<span\n                *ngIf=\"category.value=='International'\" class=\"required-symbol\">*</span></mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.policeClearance').errors \" class=\"error-msg\">\n            <span class=\"error\">Police Clearance is\n              required.</span>\n          </div>\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"passport\" value=\"1\">Passport<span *ngIf=\"category.value=='International'\"\n                class=\"required-symbol\">*</span></mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.passport').errors \" class=\"error-msg\">\n            <span class=\"error\">Passport is\n              required.</span>\n          </div>\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"declaration\" value=\"1\">Declaration <span\n                *ngIf=\"category.value=='International'\" class=\"required-symbol\">*</span></mat-checkbox>\n          </div>\n          <div *ngIf=\"onBoardForm.get('documents.declaration').errors \" class=\"error-msg\">\n            <span class=\"error\">Declaration is required.</span>\n          </div>\n        </div>\n\n        <mat-form-field class=\"form-element\">\n          <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"DOB(mm/dd/yyyy)\" formControlName=\"dob\">\n          <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #myDatepicker></mat-datepicker>\n        </mat-form-field>\n        <div *ngIf=\"onBoardForm.controls['dob'].errors && (onBoardForm.controls['dob'].dirty )\" class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['dob'].errors.required\">DOB is\n            required.</span>\n        </div>\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input name=\"fatherName\" matInput placeholder=\"Father's Name\" formControlName=\"fatherName\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['fatherName'].errors && (onBoardForm.controls['fatherName'].dirty && onBoardForm.controls['fatherName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['fatherName'].errors.required\">Father's Name is\n            required.</span>\n        </div>\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input name=\"motherName\" matInput placeholder=\"Mother's Name\" formControlName=\"motherName\">\n        </mat-form-field>\n\n        <div\n          *ngIf=\"onBoardForm.controls['motherName'].errors && (onBoardForm.controls['motherName'].dirty && onBoardForm.controls['motherName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['motherName'].errors.required\">Mother's Name is\n            required.</span>\n        </div>\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input type=\"number\" name=\"lastClassScore\" matInput placeholder=\"Last class score\"\n            formControlName=\"lastClassScore\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['lastClassScore'].errors && (onBoardForm.controls['lastClassScore'].dirty && onBoardForm.controls['lastClassScore'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['lastClassScore'].errors.required\">Last class score is\n            required.</span>\n        </div>\n        <div class=\"form-element\">\n          <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!onBoardForm.valid\">On\n            Board</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/on-board/on-boarding-form/on-boarding-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-form/on-boarding-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: OnboardingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingFormComponent", function() { return OnboardingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/student.service */ "./src/app/shared/student.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var OnboardingFormComponent = /** @class */ (function () {
    function OnboardingFormComponent(snackBar, fb, studentService) {
        var _this = this;
        this.snackBar = snackBar;
        this.fb = fb;
        this.studentService = studentService;
        this.student = null;
        this.students = [];
        this.isDisabled = false;
        this.categories = ['Domestic', 'International'];
        this.startDate = new Date(1990, 0, 1);
        this.studentService.getStudentDataForEdit().subscribe(function (value) {
            if (value != null) {
                _this.student = value.student;
                _this.isDisabled = value.disabled;
            }
        });
    }
    OnboardingFormComponent.prototype.ngOnInit = function () {
        console.log("On init");
        console.log(this.student);
        this.onBoardForm = this.fb.group({
            id: [this.student != null ? this.student.id : 0],
            studentName: [{ value: this.student != null ? this.student.studentName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            category: [{ value: this.student != null ? this.student.category : 'Domestic', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documents: this.fb.group({
                domicile: [{ value: this.student != null ? this.student.documents.domicile : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                birthCertificate: [{ value: this.student != null ? this.student.documents.birthCertificate : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                markSheets: [{ value: this.student != null ? this.student.documents.birthCertificate : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                policeClearance: [{ value: this.student != null ? this.student.documents.policeClearance : '', disabled: this.isDisabled }],
                passport: [{ value: this.student != null ? this.student.documents.passport : '', disabled: this.isDisabled }],
                declaration: [{ value: this.student != null ? this.student.documents.declaration : '', disabled: this.isDisabled }]
            }),
            dob: [{ value: this.student != null ? this.student.dob : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fatherName: [{ value: this.student != null ? this.student.fatherName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            motherName: [{ value: this.student != null ? this.student.motherName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            lastClassScore: [{ value: this.student != null ? this.student.lastClassScore : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        if (this.student != null)
            this.onSelectingCategory(this.student.category);
    };
    OnboardingFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.student = this.onBoardForm.value;
        if (this.student.id != undefined) {
            //edit
            this.studentService.updateStudent(this.student).subscribe(function (value) {
                _this.snackBar.open('Success', '', {
                    duration: 2000,
                    verticalPosition: 'top'
                });
                _this.studentService.sendStudentData();
            });
        }
        else {
            // insert
            this.studentService.getNextIdForStudent().subscribe(function (value) {
                _this.student.id = value;
            });
            this.studentService.addStudent(this.student).subscribe(function (value) {
                _this.snackBar.open('Success', '', {
                    duration: 2000,
                    verticalPosition: 'top'
                });
                _this.studentService.sendStudentData();
            });
        }
    };
    OnboardingFormComponent.prototype.onSelectingCategory = function (category) {
        var policeClearanceControl = this.onBoardForm.get('documents.policeClearance');
        var passportControl = this.onBoardForm.get('documents.passport');
        var declarationControl = this.onBoardForm.get('documents.declaration');
        if (category == "International") {
            console.log("international");
            policeClearanceControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'));
            passportControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'));
            declarationControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'));
        }
        else {
            policeClearanceControl.clearValidators();
            passportControl.clearValidators();
            declarationControl.clearValidators();
        }
        policeClearanceControl.updateValueAndValidity();
        passportControl.updateValueAndValidity();
        declarationControl.updateValueAndValidity();
    };
    OnboardingFormComponent.prototype.getStudent = function (id) {
        var _this = this;
        console.log(id);
        this.studentService.getStudent(id).subscribe(function (value) {
            _this.student = value;
            console.log(_this.student);
        });
    };
    OnboardingFormComponent.prototype.getStudents = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (value) {
            console.log(value);
            _this.students = value;
            console.log(_this.students);
        });
    };
    OnboardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding-form',
            template: __webpack_require__(/*! ./on-boarding-form.component.html */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-form.component.css */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
    ], OnboardingFormComponent);
    return OnboardingFormComponent;
}());



/***/ }),

/***/ "./src/app/on-board/on-boarding-header/on-boarding-header.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-header/on-boarding-header.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.logout-button{\r\n    float: right;\r\n }\r\n.mat-tab-group{\r\n    clear: right;\r\n}\r\n.mat-tab-label, .mat-tab-link {\r\n        font-size: 20px;\r\n        font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvb24tYm9hcmRpbmctaGVhZGVyL29uLWJvYXJkaW5nLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLFlBQVk7QUFDaEI7QUFFQTtRQUNRLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9vbi1ib2FyZC9vbi1ib2FyZGluZy1oZWFkZXIvb24tYm9hcmRpbmctaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubG9nb3V0LWJ1dHRvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuIH1cclxuLm1hdC10YWItZ3JvdXB7XHJcbiAgICBjbGVhcjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/on-board/on-boarding-header/on-boarding-header.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-header/on-boarding-header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"logout-button\" mat-raised-button color=\"accent\" (click)='logout()'>Logout</button>\r\n<!-- <mat-tab-group>\r\n\r\n    <mat-tab label=\"On Boarding Form\"> <app-on-boarding-form></app-on-boarding-form></mat-tab>\r\n    <mat-tab label=\"Student List\"> <app-student-list></app-student-list> </mat-tab>\r\n \r\n</mat-tab-group> -->\r\n\r\n<nav mat-tab-nav-bar mat-align-tabs=\"center\" >\r\n    <a mat-tab-link  [routerLink]=\"['form']\" routerLinkActive #rla=\"routerLinkActive\"\r\n    [active]=\"rla.isActive\" >\r\n    \r\n     On Boarding Form\r\n    </a>\r\n    <a mat-tab-link  [routerLink]=\"['studentlist']\" routerLinkActive #rla1=\"routerLinkActive\"\r\n    [active]=\"rla1.isActive\" >\r\n    \r\n        Student List\r\n       </a>\r\n  </nav>\r\n  \r\n  <router-outlet></router-outlet>\r\n  "

/***/ }),

/***/ "./src/app/on-board/on-boarding-header/on-boarding-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-header/on-boarding-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OnboardingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingHeaderComponent", function() { return OnboardingHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OnboardingHeaderComponent = /** @class */ (function () {
    function OnboardingHeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OnboardingHeaderComponent.prototype.ngOnInit = function () {
    };
    OnboardingHeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    OnboardingHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding-header',
            template: __webpack_require__(/*! ./on-boarding-header.component.html */ "./src/app/on-board/on-boarding-header/on-boarding-header.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-header.component.css */ "./src/app/on-board/on-boarding-header/on-boarding-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OnboardingHeaderComponent);
    return OnboardingHeaderComponent;
}());



/***/ }),

/***/ "./src/app/on-board/on-boarding/on-boarding.component.css":
/*!****************************************************************!*\
  !*** ./src/app/on-board/on-boarding/on-boarding.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uLWJvYXJkL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/on-board/on-boarding/on-boarding.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/on-board/on-boarding/on-boarding.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-on-boarding-header></app-on-boarding-header>"

/***/ }),

/***/ "./src/app/on-board/on-boarding/on-boarding.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/on-board/on-boarding/on-boarding.component.ts ***!
  \***************************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent() {
    }
    OnboardingComponent.prototype.ngOnInit = function () {
    };
    OnboardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding',
            template: __webpack_require__(/*! ./on-boarding.component.html */ "./src/app/on-board/on-boarding/on-boarding.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding.component.css */ "./src/app/on-board/on-boarding/on-boarding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnboardingComponent);
    return OnboardingComponent;
}());



/***/ }),

/***/ "./src/app/on-board/student-detail/student-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/on-board/student-detail/student-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uLWJvYXJkL3N0dWRlbnQtZGV0YWlsL3N0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/on-board/student-detail/student-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/on-board/student-detail/student-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card-header>\n      <mat-card-title>{{ student.studentName }}</mat-card-title>\n    </mat-card-header>\n  \n    <mat-card-actions>\n      <button mat-button (click)=\"openDialoginEditMode(student)\" >Edit</button>\n      <button mat-button (click)=\"openDialoginViewMode(student)\" >View</button>\n      <button mat-button (click)=\"deleteStudent(student.id)\">Delete</button>\n    </mat-card-actions>"

/***/ }),

/***/ "./src/app/on-board/student-detail/student-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/on-board/student-detail/student-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: StudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailComponent", function() { return StudentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/student.service */ "./src/app/shared/student.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts");






var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(router, dialog, studentService) {
        this.router = router;
        this.dialog = dialog;
        this.studentService = studentService;
        this.student = [];
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
    };
    StudentDetailComponent.prototype.openDialoginEditMode = function (student) {
        this.studentService.sendStudentDataForEdit({ 'student': student, 'disabled': false });
        this.router.navigateByUrl('onBoard/form');
        // console.log(student);
        // const dialogRef = this.dialog.open(OnboardingFormComponent, {
        //   height: '800px',
        //   width: '600px',
        //   data: {student:student}
        // });
    };
    StudentDetailComponent.prototype.openDialoginViewMode = function (student) {
        this.studentService.sendStudentDataForEdit({ 'student': student, 'disabled': true });
        this.router.navigateByUrl('onBoard/form');
    };
    StudentDetailComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialog"], {
            width: '350px',
            data: { message: 'Are you sure you want to delete this?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                console.log(result);
                _this.studentService.deleteStudent(id).subscribe(function (value) {
                    _this.studentService.sendStudentData();
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StudentDetailComponent.prototype, "student", void 0);
    StudentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-detail',
            template: __webpack_require__(/*! ./student-detail.component.html */ "./src/app/on-board/student-detail/student-detail.component.html"),
            styles: [__webpack_require__(/*! ./student-detail.component.css */ "./src/app/on-board/student-detail/student-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/app/on-board/student-list/student-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/on-board/student-list/student-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row{\r\n    height:40px;\r\n}\r\n.international-student{\r\n    background-color: bisque;\r\n}\r\n.domestic-student{\r\n    background-color: rosybrown;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvb24tYm9hcmQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG4uaW50ZXJuYXRpb25hbC1zdHVkZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG59XHJcbi5kb21lc3RpYy1zdHVkZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/on-board/student-list/student-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/on-board/student-list/student-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">Student List</span>\n</mat-toolbar>\n<mat-form-field>\n  <mat-label>Student Category</mat-label>\n  <select (change)=\"selectStudentBasedOnCategory($event.target.value)\" matNativeControl required>\n    <option value=\"All\">All</option>\n    <option value=\"Domestic\">Domestic</option>\n    <option value=\"International\">International</option>\n  </select>\n</mat-form-field>\n<input [(ngModel)]=\"searchText\" placeholder=\"enter search term here\">\n<div *ngFor=\"let student of students | filter : searchText\">\n  <mat-card [ngClass]=\"{'domestic-student': student.category=='Domestic', 'international-student': student.category=='International'}\"\n    class=\"example-card\">\n    <app-student-detail [student]='student'></app-student-detail>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/on-board/student-list/student-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/on-board/student-list/student-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: StudentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsListComponent", function() { return StudentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/student.service */ "./src/app/shared/student.service.ts");



var StudentsListComponent = /** @class */ (function () {
    function StudentsListComponent(studentService) {
        this.studentService = studentService;
        this.students = [];
    }
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.sendStudentData();
        this.studentService.getStudentData().subscribe(function (value) {
            _this.students = value;
        });
    };
    StudentsListComponent.prototype.selectStudentBasedOnCategory = function (categoryName) {
        var _this = this;
        if (this.students != null) {
            this.studentService.getStudentData().subscribe(function (value) {
                _this.students = value.filter(function (data) {
                    return data.category == (categoryName == 'All' ? data.category : categoryName);
                });
            });
        }
    };
    StudentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/on-board/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/on-board/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isLoggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:4200/api/users';
    }
    AuthService.prototype.checkCredentials = function (userInfo) {
        return this.httpClient.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user.filter(function (x) { return x.email == userInfo.email && x.password == userInfo.password; }); }));
    };
    AuthService.prototype.login = function () {
        console.log("login sucess");
        localStorage.setItem('token', "myToken");
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.registerUser = function (user) {
        try {
            this.getNextIdForUser().subscribe(function (value) {
                user.id = value;
            });
            return this.httpClient.post(this.baseUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    AuthService.prototype.getNextIdForUser = function () {
        return this.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user.reduce(function (prev, curr) {
            return (prev.id > curr.id) ? prev : curr;
        }).id + 1; }));
    };
    AuthService.prototype.getUsers = function () {
        return this.httpClient.get(this.baseUrl).pipe();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/data.ts":
/*!********************************!*\
  !*** ./src/app/shared/data.ts ***!
  \********************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.createDb = function () {
        var users = [{
                'id': 1,
                'email': 'admin@nagarro.com',
                'password': 'Passw0rd'
            },
            {
                'id': 2,
                'email': 'admin2@nagarro.com',
                'password': 'Passw0rd2'
            }
        ];
        var students = [{
                'id': 1,
                'studentName': 'John snow',
                'category': 'International',
                'documents': {
                    'domicile': true,
                    'birthCertificate': true,
                    'markSheets': true,
                    'policeClearance': true,
                    'passport': true,
                    'declaration': true
                },
                'dob': new Date('04/04/1995'),
                'fatherName': 'Michael',
                'motherName': 'Lizzie',
                'lastClassScore': 97
            },
            {
                'id': 2,
                'studentName': 'Neena',
                'category': 'Domestic',
                'documents': {
                    'domicile': true,
                    'birthCertificate': true,
                    'markSheets': true,
                    'policeClearance': true,
                    'passport': true,
                    'declaration': true
                },
                'dob': new Date('04/04/1995'),
                'fatherName': 'Michael',
                'motherName': 'Lizzie',
                'lastClassScore': 97
            }
        ];
        return {
            students: students,
            users: users
        };
    };
    return Data;
}());



/***/ }),

/***/ "./src/app/shared/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        console.log(searchText);
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.studentName.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/student.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/student.service.ts ***!
  \*******************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StudentService = /** @class */ (function () {
    function StudentService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:4200/api/students';
        this.studentData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.StudentDataForEdit$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    StudentService.prototype.getStudentDataForEdit = function () {
        return this.StudentDataForEdit$.asObservable();
    };
    StudentService.prototype.sendStudentDataForEdit = function (value) {
        this.StudentDataForEdit$.next(value);
    };
    StudentService.prototype.getStudent = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    StudentService.prototype.getStudentData = function () {
        return this.studentData$.asObservable();
    };
    StudentService.prototype.sendStudentData = function () {
        var _this = this;
        var data = this.httpClient.get(this.baseUrl).subscribe(function (value) {
            _this.studentData$.next(value);
        });
    };
    StudentService.prototype.getStudents = function () {
        return this.httpClient.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    StudentService.prototype.getNextIdForStudent = function () {
        return this.getStudents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (students) { return students.reduce(function (prev, curr) {
            return (prev.id > curr.id) ? prev : curr;
        }).id + 1; }));
    };
    StudentService.prototype.addStudent = function (student) {
        try {
            console.log(student);
            return this.httpClient.post(this.baseUrl, student).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    StudentService.prototype.deleteStudent = function (id) {
        try {
            var url = this.baseUrl + "/" + id;
            return this.httpClient.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    StudentService.prototype.updateStudent = function (student) {
        try {
            console.log("edit");
            console.log(student);
            var url = this.baseUrl + "/" + student.id;
            return this.httpClient.put(url, student).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    StudentService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\NAGP\Assignments\latest\students-onboarding-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map