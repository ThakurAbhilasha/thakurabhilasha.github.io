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
/* harmony import */ var _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth-guard/auth.guard */ "./src/app/shared/auth-guard/auth.guard.ts");
/* harmony import */ var _on_board_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-board/student-list/student-list.component */ "./src/app/on-board/student-list/student-list.component.ts");
/* harmony import */ var _on_board_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-board/on-boarding-form/on-boarding-form.component */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/register/register.component */ "./src/app/login/register/register.component.ts");









var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _login_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
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
        canActivate: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _on_board_on_boarding_app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-board/on-boarding-app.module */ "./src/app/on-board/on-boarding-app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_data_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/data/data */ "./src/app/shared/data/data.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");










//import { LoginComponent } from './login/login/login.component';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _on_board_on_boarding_app_module__WEBPACK_IMPORTED_MODULE_7__["OnboardingAppModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["InMemoryWebApiModule"].forRoot(_shared_data_data__WEBPACK_IMPORTED_MODULE_9__["Data"]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/login/register/register.component.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
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

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.register{\r\n    float: right;\r\n}\r\n.register-span{\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-right: 5px;\r\n}\r\n.fill-remaining-space{\r\n    text-align: center;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.form-body{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    margin-top:100px;\r\n}\r\n.form-full-width .form-element{\r\n    width:500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yZWdpc3RlcntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucmVnaXN0ZXItc3BhbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5mb3JtLWJvZHl7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuICAgIFxyXG4uZm9ybS1mdWxsLXdpZHRoIC5mb3JtLWVsZW1lbnR7XHJcbiAgICB3aWR0aDo1MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">Login</span>\n</mat-toolbar>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" class=\"form form-full-width\">\n  <div class=\"form-body\">\n\n    <div *ngIf=\"invalidCredentials\" class=\"error-msg\">\n      <p class=\"error\">Invalid Credentials</p>\n    </div>\n\n    <mat-form-field class=\"form-element\">\n      <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"email\" />\n    </mat-form-field>\n    <div\n      *ngIf=\"loginForm.controls['email'].errors && (loginForm.controls['email'].dirty && loginForm.controls['email'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!loginForm.controls['email'].errors.required\">Email is required.</span>\n      <span class=\"error\" [hidden]=\"!loginForm.controls['email'].errors.email\">Email is invalid.</span>\n    </div>\n\n    <br />\n\n    <mat-form-field class=\"form-element\">\n      <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n    <div\n      *ngIf=\"loginForm.controls['password'].errors && (loginForm.controls['password'].dirty && loginForm.controls['password'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!loginForm.controls['password'].errors.required\">Password is required.</span>\n    </div>\n\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-user\"></i> Login\n      </button>\n\n      <button mat-raised-button (click)=\"navigateToRegister()\" color=\"primary\" class=\"button register\"><i class=\"fa fa-address-book\"></i> Register\n      </button>\n      <span class=\"register-span\"> Not a member? Register here </span>\n    </div>\n  </div>\n</form>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");





/**
 * This component deals with the functionality of login
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.invalidCredentials = false;
    }
    /**
     * Build login form using form builder
     * @memberOf LoginComponent
     */
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * This method deals with the login afte user presses login button
     * @param {any} form
     *
     * @memberOf LoginComponent
     */
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.checkCredentials(this.loginForm.value).subscribe(function (value) {
            if (value != null && value.length > 0) {
                _this.authService.login(value[0]);
                _this.router.navigateByUrl('/onBoard/form');
            }
            else {
                _this.invalidCredentials = true;
            }
        });
    };
    /**
     * If user chooses to register navigate to register page
     * @memberOf LoginComponent
     */
    LoginComponent.prototype.navigateToRegister = function () {
        this.router.navigateByUrl('/register');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.fill-remaining-space{\r\n    text-align: center;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.form-body{\r\n    margin: 0 auto;\r\n    width: 500px;\r\n    margin-top:100px;\r\n}\r\n.form-full-width .form-element{\r\n    width:500px;\r\n }\r\n.button-reset{\r\n     margin-left:20px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0NBQ2Q7QUFDQTtLQUNJLGdCQUFnQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5mb3JtLWJvZHl7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuICAgIFxyXG4uZm9ybS1mdWxsLXdpZHRoIC5mb3JtLWVsZW1lbnR7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuIH1cclxuIC5idXR0b24tcmVzZXR7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/login/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">Register</span>\n</mat-toolbar>\n<form [formGroup]=\"registerForm\" class=\"form form-full-width\">\n\n  <div class=\"form-body\">\n    <div *ngIf=\"doesEmailExist\" class=\"error-msg\">\n      <p class=\"error\">Email Id already exists</p>\n    </div>\n\n    <mat-form-field class=\"form-element\">\n      <input name=\"username\" matInput placeholder=\"User Name\" formControlName=\"username\" />\n    </mat-form-field>\n    <div\n      *ngIf=\"registerForm.controls['username'].errors && (registerForm.controls['username'].dirty && registerForm.controls['username'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!registerForm.controls['username'].errors.required\">Username is required.</span>\n    </div>\n\n    <mat-form-field class=\"form-element\">\n      <input name=\"email\" matInput placeholder=\"Email\" formControlName=\"email\" />\n    </mat-form-field>\n    <div\n      *ngIf=\"registerForm.controls['email'].errors && (registerForm.controls['email'].dirty && registerForm.controls['email'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!registerForm.controls['email'].errors.required\">Email is required.</span>\n      <span class=\"error\" [hidden]=\"!registerForm.controls['email'].errors.email\">Email is invalid.</span>\n    </div>\n\n    <br />\n\n    <mat-form-field class=\"form-element\">\n      <input type=\"password\" name=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n    <div\n      *ngIf=\"registerForm.controls['password'].errors && (registerForm.controls['password'].dirty && registerForm.controls['password'].touched )\"\n      class=\"error-msg\">\n      <span class=\"error\" [hidden]=\"!registerForm.controls['password'].errors.required\">Password is required.</span>\n    </div>\n\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"primary\" (click)=\"onSubmit(registerForm.value)\" type=\"submit\"\n        [disabled]=\"!registerForm.valid\"><i class=\"fa fa-address-book\"></i> Register\n      </button>\n\n      <button mat-raised-button (click)=\"reset()\" color=\"accent\" type=\"reset\" class=\"button-reset\"\n        [disabled]=\"isDisabled\"><i class=\"fa fa-undo\"></i>\n        Reset</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






/**
 *
 * This component is used for registering user for access to application
 * @export
 * @class RegisterComponent
 * @implements {OnInit}
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(toastr, router, formBuilder, authService) {
        this.toastr = toastr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    /**
     * method called when user clicks register after filling all the fields
     * If email already exists validation error appears
     *  After registering it navigates to login page
     * @param {any} form
     *
     * @memberOf RegisterComponent
     */
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authService.checkCredentials(this.registerForm.value).subscribe(function (value) {
            if (value != null && value.length > 0) {
                _this.doesEmailExist = true;
                _this.reset();
            }
            else {
                _this.authService.registerUser(_this.registerForm.value).subscribe(function (value) {
                    _this.router.navigateByUrl('/login');
                    _this.toastr.success("Registeration successful! Please try login now");
                });
            }
        });
    };
    /**
     * This method is used to reset form
     *
     *
     * @memberOf RegisterComponent
     */
    RegisterComponent.prototype.reset = function () {
        this.registerForm.reset();
        this.registerForm.markAsPristine();
        this.registerForm.markAsUntouched();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/login/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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

module.exports = "<div mat-dialog-content>\r\n  <p>{{message}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"agreed\" cdkFocusInitial>Yes</button>\r\n</div>"

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



/**
 * This component is used to make confirmation alerts for users
 * The confirmation alerts have yes / no as options
 * @export
 * @class ConfirmationDialog
 */
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./on-boarding/on-boarding.component */ "./src/app/on-board/on-boarding/on-boarding.component.ts");
/* harmony import */ var _on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on-boarding-form/on-boarding-form.component */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/on-board/student-list/student-list.component.ts");
/* harmony import */ var _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-detail/student-detail.component */ "./src/app/on-board/student-detail/student-detail.component.ts");
/* harmony import */ var _on_boarding_header_on_boarding_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./on-boarding-header/on-boarding-header.component */ "./src/app/on-board/on-boarding-header/on-boarding-header.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/on-board/material.module.ts");
/* harmony import */ var _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/pipe/filter.pipe */ "./src/app/shared/pipe/filter.pipe.ts");
/* harmony import */ var _on_board_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../on-board/confirmation-dialog/confirmation-dialog.component */ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts");
















var OnboardingAppModule = /** @class */ (function () {
    function OnboardingAppModule() {
    }
    OnboardingAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_on_board_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialog"], _on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingComponent"], _on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_8__["OnboardingFormComponent"], _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentsListComponent"], _student_detail_student_detail_component__WEBPACK_IMPORTED_MODULE_10__["StudentDetailComponent"], _on_boarding_header_on_boarding_header_component__WEBPACK_IMPORTED_MODULE_11__["OnboardingHeaderComponent"], _shared_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"]],
            exports: [_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_7__["OnboardingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
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

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row{\r\n    height:40px;\r\n}\r\n.form-body{\r\nmargin: 0 auto;\r\nwidth: 500px;\r\n}\r\n.form-full-width .form-element{\r\n    width:500px;\r\n}\r\n.error{\r\n    color:red;\r\n}\r\n.required-symbol{\r\n    color:red;\r\n    font-weight: 800;\r\n}\r\n.button-reset{\r\n    margin-left:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvb24tYm9hcmRpbmctZm9ybS9vbi1ib2FyZGluZy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL29uLWJvYXJkL29uLWJvYXJkaW5nLWZvcm0vb24tYm9hcmRpbmctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG4uZm9ybS1ib2R5e1xyXG5tYXJnaW46IDAgYXV0bztcclxud2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZm9ybS1mdWxsLXdpZHRoIC5mb3JtLWVsZW1lbnR7XHJcbiAgICB3aWR0aDo1MDBweDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLnJlcXVpcmVkLXN5bWJvbHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ1dHRvbi1yZXNldHtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/on-board/on-boarding-form/on-boarding-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-form/on-boarding-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n\n  <div class=\"form-body\" novalidate>\n    <form [formGroup]=\"onBoardForm\" class=\"form form-full-width\">\n      <div>\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input name=\"studentName\" matInput placeholder=\"Student Name\" formControlName=\"studentName\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['studentName'].errors && (onBoardForm.controls['studentName'].dirty && onBoardForm.controls['studentName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['studentName'].errors.required\">Student Name is\n            required.</span>\n        </div>\n\n        <br />\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <mat-label>Student category (required)</mat-label>\n          <select #category (change)=\"onSelectingCategory(category.value)\" matNativeControl id=\"category\"\n            formControlName=\"category\">\n            <option *ngFor=\"let c of categories\" [value]=\"c\">{{ c }}</option>\n          </select>\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['category'].errors && (onBoardForm.controls['category'].dirty && onBoardForm.controls['category'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['category'].errors.required\">Student Name is\n            required.</span>\n        </div>\n\n        <br />\n\n        <div formGroupName=\"documents\">\n          <mat-label class=\"form-element\">Documents</mat-label>\n          <br />\n          <br />\n\n          <div class=\"form-element\">\n            <mat-checkbox matInput formControlName=\"domicile\" value=\"1\">Domicile<span class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"(onBoardForm.get('documents.domicile').errors && !onBoardForm.get('documents.domicile').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Domicile Certificate is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"birthCertificate\" value=\"1\">Birth Certificate<span\n                class=\"required-symbol\">*</span></mat-checkbox>\n          </div>\n          <div\n            *ngIf=\"(onBoardForm.get('documents.birthCertificate').errors && !onBoardForm.get('documents.birthCertificate').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Birth Certificate is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"markSheets\" value=\"1\">Mark Sheets<span class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div\n            *ngIf=\"(onBoardForm.get('documents.markSheets').errors && !onBoardForm.get('documents.markSheets').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Mark Sheet is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"policeClearance\" value=\"1\">Police Clearance<span\n                *ngIf=\"(student!=null && student.category=='International') || category.value =='International'\"\n                class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div\n            *ngIf=\"(onBoardForm.get('documents.policeClearance').errors && !onBoardForm.get('documents.policeClearance').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Police Clearance is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"passport\" value=\"1\">Passport<span\n                *ngIf=\"(student!=null && student.category=='International') || category.value =='International'\"\n                class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div *ngIf=\"(onBoardForm.get('documents.passport').errors && !onBoardForm.get('documents.passport').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Passport is\n              required.</span>\n          </div>\n\n          <div class=\"form-element\">\n            <mat-checkbox formControlName=\"declaration\" value=\"1\">Declaration <span class=\"required-symbol\">*</span>\n            </mat-checkbox>\n          </div>\n          <div\n            *ngIf=\"(onBoardForm.get('documents.declaration').errors && !onBoardForm.get('documents.declaration').pristine)\"\n            class=\"error-msg\">\n            <span class=\"error\">Declaration is required.</span>\n          </div>\n        </div>\n\n        <mat-form-field class=\"form-element\">\n          <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"DOB(mm/dd/yyyy)\" formControlName=\"dob\">\n          <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #myDatepicker></mat-datepicker>\n        </mat-form-field>\n        <div *ngIf=\"onBoardForm.controls['dob'].errors && (onBoardForm.controls['dob'].dirty )\" class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['dob'].errors.required\">DOB is\n            required.</span>\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['dob'].errors.invalidDob\">Student must be of atleast 3\n            years</span>\n        </div>\n\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input name=\"fatherName\" matInput placeholder=\"Father's Name\" formControlName=\"fatherName\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['fatherName'].errors && (onBoardForm.controls['fatherName'].dirty && onBoardForm.controls['fatherName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['fatherName'].errors.required\">Father's Name is\n            required.</span>\n        </div>\n\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input name=\"motherName\" matInput placeholder=\"Mother's Name\" formControlName=\"motherName\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['motherName'].errors && (onBoardForm.controls['motherName'].dirty && onBoardForm.controls['motherName'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['motherName'].errors.required\">Mother's Name is\n            required.</span>\n        </div>\n\n        <br />\n\n        <mat-form-field class=\"form-element\">\n          <input type=\"number\" name=\"lastClassScore\" matInput placeholder=\"Last class score\"\n            formControlName=\"lastClassScore\">\n        </mat-form-field>\n        <div\n          *ngIf=\"onBoardForm.controls['lastClassScore'].errors && (onBoardForm.controls['lastClassScore'].dirty && onBoardForm.controls['lastClassScore'].touched )\"\n          class=\"error-msg\">\n          <span class=\"error\" [hidden]=\"!onBoardForm.controls['lastClassScore'].errors.required\">Last class score is\n            required.</span>\n        </div>\n\n        <div class=\"form-element\">\n          <button mat-raised-button (click)=\"onSubmit(onBoardForm.value)\" color=\"primary\" type=\"submit\"\n            class=\"button-green\" [disabled]=\"!onBoardForm.valid || isDisabled\"><i class=\"fa fa-user-plus\"></i> On\n            Board</button>\n            \n            <button mat-raised-button (click)=\"reset()\" color=\"accent\" type=\"reset\"\n            class=\"button-reset\" [disabled]=\"isDisabled\"><i class=\"fa fa-undo\"></i> \n            Reset</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

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
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/student/student.service */ "./src/app/shared/services/student/student.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






/**
 * This component is used to display an on boarding form.
 * This component can be used to onboard , edit , view students through a form.
 * @export
 * @class OnboardingFormComponent
 * @implements {OnInit}
 */
var OnboardingFormComponent = /** @class */ (function () {
    /**
     * Creates an instance of OnboardingFormComponent.
     * @param {ToastrService} toastr
     * @param {FormBuilder} fb
     * @param {StudentService} studentService
     *
     * @memberOf OnboardingFormComponent
     */
    function OnboardingFormComponent(toastr, fb, studentService) {
        this.toastr = toastr;
        this.fb = fb;
        this.studentService = studentService;
        this.student = null;
        this.students = [];
        this.isDisabled = false;
        this.categories = ['Domestic', 'International'];
    }
    /**
     * Used to fetch data for edit and initialize form
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.ngOnInit = function () {
        this.fetchDataForEdit();
        this.initializeForm();
    };
    /**
     * Fetch data for edit if present
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.fetchDataForEdit = function () {
        var _this = this;
        this.studentService.getStudentDataForEdit().subscribe(function (value) {
            if (value != null) {
                _this.student = value.student;
                _this.isDisabled = value.disabled;
            }
        });
    };
    /**
     * Initialize form with edit data for edit operation if present
     * else initialize with default values for add operation
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.initializeForm = function () {
        this.onBoardForm = this.fb.group({
            id: [this.student != null ? this.student.id : 0],
            studentName: [{ value: this.student != null ? this.student.studentName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            category: [{ value: this.student != null ? this.student.category : 'Domestic', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documents: this.fb.group({
                domicile: [{ value: this.student != null ? this.student.documents.domicile : false, disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                birthCertificate: [{ value: this.student != null ? this.student.documents.birthCertificate : false, disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                markSheets: [{ value: this.student != null ? this.student.documents.birthCertificate : false, disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]],
                policeClearance: [{ value: this.student != null ? this.student.documents.policeClearance : false, disabled: this.isDisabled }],
                passport: [{ value: this.student != null ? this.student.documents.passport : false, disabled: this.isDisabled }],
                declaration: [{ value: this.student != null ? this.student.documents.declaration : false, disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true')]]
            }),
            dob: [{ value: this.student != null ? this.student.dob : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.dateValidator()]],
            fatherName: [{ value: this.student != null ? this.student.fatherName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            motherName: [{ value: this.student != null ? this.student.motherName : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            lastClassScore: [{ value: this.student != null ? this.student.lastClassScore : '', disabled: this.isDisabled }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        if (this.student != null)
            this.onSelectingCategory(this.student.category);
    };
    /**
     * method called when user clicks on submit button.
     * If id field is present it will edit else it will update.
     * @param {NgForm} form
     *
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.onSubmit = function (form) {
        this.student = this.onBoardForm.value;
        if (this.student.id != 0 && this.student.id != null) {
            this.edit();
        }
        else {
            this.add();
        }
        this.reset();
    };
    /**
     * method used to edit student
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.edit = function () {
        var _this = this;
        this.studentService.updateStudent(this.student).subscribe(function (value) {
            _this.toastr.success('Updated successfully');
            _this.studentService.sendStudentData();
            _this.student = null;
        });
    };
    /**
     * method used to add student
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.add = function () {
        var _this = this;
        this.studentService.getNextIdForStudent().subscribe(function (value) {
            _this.student.id = value;
            _this.studentService.addStudent(_this.student).subscribe(function (value) {
                _this.toastr.success('OnBoarded Sucessfully');
                _this.studentService.sendStudentData();
                _this.student = null;
            });
        });
    };
    /**
     * Used to reset the form after onboarding
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.reset = function () {
        this.onBoardForm.reset();
        this.onBoardForm.markAsPristine();
        this.onBoardForm.markAsUntouched();
    };
    /**
     * this method is used to change documents that are required depending upon category
     * @param {string} category
     *
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.onSelectingCategory = function (category) {
        console.log(category);
        var policeClearanceControl = this.onBoardForm.get('documents.policeClearance');
        var passportControl = this.onBoardForm.get('documents.passport');
        if (category == "International") {
            policeClearanceControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'));
            passportControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('true'));
        }
        else {
            console.log("clearing validators");
            policeClearanceControl.clearValidators();
            passportControl.clearValidators();
        }
        policeClearanceControl.updateValueAndValidity();
        passportControl.updateValueAndValidity();
    };
    /**
     * This custom validator is used to perform date of birth validation
     * Student with age 3 years and above is allowed
     * @returns {ValidatorFn}
     *
     * @memberOf OnboardingFormComponent
     */
    OnboardingFormComponent.prototype.dateValidator = function () {
        return function (control) {
            var dateStr = control.value;
            var dateEntered = new Date(dateStr);
            var currentDate = new Date();
            if (currentDate.getFullYear() - dateEntered.getFullYear() < 3) {
                return { "invalidDob": "Student must be of atleast 3 years;" };
            }
        };
    };
    OnboardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding-form',
            template: __webpack_require__(/*! ./on-boarding-form.component.html */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-form.component.css */ "./src/app/on-board/on-boarding-form/on-boarding-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"]])
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

module.exports = ".mat-toolbar{\r\n    justify-content: center;\r\n}\r\n.mat-tab-nav-bar{\r\n    background-color: #3f51b5 !important;\r\n    color:white;\r\n}\r\n.mat-tab-link{\r\n   \r\n    color:white;\r\n}\r\n.logout-button-div{\r\n    margin-top:-40px;\r\n    float: right;\r\n }\r\n.mat-tab-group{\r\n    clear: right;\r\n}\r\n.mat-raised-text {\r\n    color:white;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    outline: 0;\r\n    border: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    text-decoration: none;\r\n    vertical-align: baseline;\r\n    text-align: center;\r\n    margin: 0;\r\n    min-width: 64px;\r\n    line-height: 36px;\r\n    padding: 0 16px;\r\n    border-radius: 4px;\r\n    overflow: visible;\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n}\r\n.mat-tab-label, .mat-tab-link {\r\n        font-size: 20px;\r\n        font-weight: 400;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvb24tYm9hcmRpbmctaGVhZGVyL29uLWJvYXJkaW5nLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3Qiw4RkFBOEY7QUFDbEc7QUFFQTtRQUNRLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9vbi1ib2FyZC9vbi1ib2FyZGluZy1oZWFkZXIvb24tYm9hcmRpbmctaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWF0LXRhYi1uYXYtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLm1hdC10YWItbGlua3tcclxuICAgXHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmxvZ291dC1idXR0b24tZGl2e1xyXG4gICAgbWFyZ2luLXRvcDotNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuIH1cclxuLm1hdC10YWItZ3JvdXB7XHJcbiAgICBjbGVhcjogcmlnaHQ7XHJcbn1cclxuLm1hdC1yYWlzZWQtdGV4dCB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLXdpZHRoOiA2NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/on-board/on-boarding-header/on-boarding-header.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/on-board/on-boarding-header/on-boarding-header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar mat-align-tabs=\"center\">\r\n    <a mat-tab-link [routerLink]=\"['form']\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\r\n        On Boarding Form\r\n    </a>\r\n    <a mat-tab-link [routerLink]=\"['studentlist']\" routerLinkActive #rla1=\"routerLinkActive\" [active]=\"rla1.isActive\">\r\n        Student List\r\n    </a>\r\n</nav>\r\n\r\n<div class=\"logout-button-div\">\r\n    <p class=\"mat-raised-text\">Hi, {{userName}}</p>\r\n    <button class=\"logout-button\" mat-raised-button color=\"accent\" (click)='logout()'>Logout</button>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




/**
 * This component is used to set the nav bars in header.
 * It also sets the Logged in user name and logout button in header
 * @export
 * @class OnboardingHeaderComponent
 * @implements {OnInit}
 */
var OnboardingHeaderComponent = /** @class */ (function () {
    /**
     * Creates an instance of OnboardingHeaderComponent.
     * @param {AuthService} authService
     * @param {Router} router
     *
     * @memberOf OnboardingHeaderComponent
     */
    function OnboardingHeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userName = '';
    }
    OnboardingHeaderComponent.prototype.ngOnInit = function () {
        this.getLoggedInUserDetail();
    };
    /**
     * Get Logged in user detail to show username on header
     * @memberOf OnboardingHeaderComponent
     */
    OnboardingHeaderComponent.prototype.getLoggedInUserDetail = function () {
        var user = this.authService.getLoggedInUser();
        if (user != null) {
            this.userName = user.username;
        }
    };
    /**
     * Log out user
     * @memberOf OnboardingHeaderComponent
     */
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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


/**
 * This component is the main component and contains the child components
 * The child components are onboarding form and student list
 *
 * @export
 * @class OnboardingComponent
 * @implements {OnInit}
 */
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

module.exports = "mat-card-content{\r\n    margin-left:20px;\r\n}\r\n.mat-raised-button{\r\n    font-size: 11px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvc3R1ZGVudC1kZXRhaWwvc3R1ZGVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL29uLWJvYXJkL3N0dWRlbnQtZGV0YWlsL3N0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZC1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/on-board/student-detail/student-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/on-board/student-detail/student-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header>\n  <mat-card-title>{{ student.studentName }} ({{student.category}})</mat-card-title>\n</mat-card-header>\n\n<mat-card-content>\n  <div>\n    <p>{{student.dob|date}}</p>\n    <p>{{student.fatherName}}</p>\n    <p>{{student.motherName}}</p>\n    <p>{{student.lastClassScore}}</p>\n  </div>\n</mat-card-content>\n\n<mat-card-actions>\n  <button mat-raised-button (click)=\"editStudent(student)\"><i class=\"fa fa-edit\"></i>Edit</button>\n  <button mat-raised-button (click)=\"viewStudent(student)\"><i class=\"fa fa-eye\"></i>View</button>\n  <button mat-raised-button (click)=\"deleteStudent(student.id)\"><i class=\"fa fa-trash\"></i>Delete</button>\n</mat-card-actions>"

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
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/student/student.service */ "./src/app/shared/services/student/student.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ "./src/app/on-board/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







/**
 * Used to show student detail and edit, view, delete buttons in card format
 *
 * @export
 * @class StudentDetailComponent
 * @implements {OnInit}
 */
var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(toastr, router, dialog, studentService) {
        this.toastr = toastr;
        this.router = router;
        this.dialog = dialog;
        this.studentService = studentService;
        this.student = [];
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
    };
    /**
     * used to set value to be edited in behavior subject through service
     * and navigate to onboardingform page
     * @param {IStudent} student
     *
     * @memberOf StudentDetailComponent
     */
    StudentDetailComponent.prototype.editStudent = function (student) {
        this.studentService.sendStudentDataForEdit({ 'student': student, 'disabled': false });
        this.router.navigateByUrl('onBoard/form');
    };
    /**
     * used to view value to be edited in behavior subject through service
     * and navigate to onboardingform page
     * @param {IStudent} student
     *
     * @memberOf StudentDetailComponent
     */
    StudentDetailComponent.prototype.viewStudent = function (student) {
        this.studentService.sendStudentDataForEdit({ 'student': student, 'disabled': true });
        this.router.navigateByUrl('onBoard/form');
    };
    /**
     * used to prompt for deletion using dialog box and on yes selection
     * it used to deleted student
     * @param {number} id
     *
     * @memberOf StudentDetailComponent
     */
    StudentDetailComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialog"], {
            width: '350px',
            data: { message: 'Are you sure you want to delete this?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.studentService.deleteStudent(id).subscribe(function (value) {
                    _this.studentService.sendStudentData();
                    _this.toastr.success('Deleted successfully');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
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

module.exports = "mat-toolbar{\r\n    justify-content: center;\r\n    background-color: #2E4053;\r\n    color:white;\r\n}\r\nmat-card{\r\n    height:250px;\r\n    width:250px;\r\n    float:left;\r\n    margin:30px;\r\n}\r\n.mat-form-field{\r\n    margin-right:18px;\r\n}\r\n.button-green{\r\n    background-color: #16A085;\r\n    color:white;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row{\r\n    height:40px;\r\n}\r\n.international-student{\r\n    background-color: #fec8da;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n}\r\n.domestic-student{\r\n    background-color:whitesmoke;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n}\r\n.pull-right{\r\n   float: right; \r\n   margin-top: 20px;\r\n  \r\n}\r\n.student-detail{\r\n    margin-top:80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tYm9hcmQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBNEM7QUFDaEQ7QUFDQTtHQUNHLFlBQVk7R0FDWixnQkFBZ0I7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvb24tYm9hcmQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTQwNTM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5tYXQtY2FyZHtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbjozMHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi1yaWdodDoxOHB4O1xyXG59XHJcbi5idXR0b24tZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZBMDg1O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxufVxyXG4uaW50ZXJuYXRpb25hbC1zdHVkZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYzhkYTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmRvbWVzdGljLXN0dWRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG59XHJcbi5wdWxsLXJpZ2h0e1xyXG4gICBmbG9hdDogcmlnaHQ7IFxyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG59XHJcbi5zdHVkZW50LWRldGFpbHtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/on-board/student-list/student-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/on-board/student-list/student-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-right\">\n  <mat-form-field>\n    <select class=\"select-dropdown\" (change)=\"selectStudentBasedOnCategory($event.target.value)\" matNativeControl required>\n      <option value=\"All\">All</option>\n      <option value=\"Domestic\">Domestic</option>\n      <option value=\"International\">International</option>\n    </select>\n  </mat-form-field>\n\n  <mat-form-field >\n      <input [(ngModel)]=\"searchText\" matInput placeholder=\"Enter student Name\">\n    </mat-form-field>\n</div> \n<div class=\"student-detail\" *ngFor=\"let student of students | filter : searchText\"> \n  <mat-card\n    [ngClass]=\"{'domestic-student': student.category=='Domestic', 'international-student': student.category=='International'}\"\n    class=\"example-card\">\n    <app-student-detail [student]='student'></app-student-detail>\n  </mat-card>\n</div>\n"

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
/* harmony import */ var _shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/student/student.service */ "./src/app/shared/services/student/student.service.ts");



/**
 * Used to show onboarded students list using student-detail child component
 * @export
 * @class StudentsListComponent
 * @implements {OnInit}
 */
var StudentsListComponent = /** @class */ (function () {
    /**
     * Creates an instance of StudentsListComponent.
     * @param {StudentService} studentService
     *
     * @memberOf StudentsListComponent
     */
    function StudentsListComponent(studentService) {
        this.studentService = studentService;
        this.students = [];
    }
    /**
     * Intialize student list data by fetching student list through service
     * @memberOf StudentsListComponent
     */
    StudentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.sendStudentData();
        this.studentService.getStudentData().subscribe(function (value) {
            _this.students = value;
        });
    };
    /**
     * @param {string} categoryName
     * select student list based on category
     * @memberOf StudentsListComponent
     */
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_student_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], StudentsListComponent);
    return StudentsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/auth-guard/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");



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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/data/data.ts":
/*!*************************************!*\
  !*** ./src/app/shared/data/data.ts ***!
  \*************************************/
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
                'username': 'admin',
                'email': 'admin@nagarro.com',
                'password': 'Passw0rd'
            },
            {
                'id': 2,
                'username': 'nagarro',
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

/***/ "./src/app/shared/pipe/filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/filter.pipe.ts ***!
  \********************************************/
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

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
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
        this.loggedInUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    AuthService.prototype.checkCredentials = function (userInfo) {
        return this.httpClient.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return user.filter(function (x) { return x.email == userInfo.email && x.password == userInfo.password; }); }));
    };
    AuthService.prototype.getLoggedInUser = function () {
        return JSON.parse(localStorage.getItem('loggedInUser'));
    };
    AuthService.prototype.login = function (userInfo) {
        localStorage.setItem('token', "myToken");
        localStorage.setItem('loggedInUser', JSON.stringify(userInfo));
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
        localStorage.removeItem('loggedInUser');
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

/***/ "./src/app/shared/services/student/student.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/student/student.service.ts ***!
  \************************************************************/
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
        return this.StudentDataForEdit$.asObservable().pipe();
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
            console.log("add");
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