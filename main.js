(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./reports/reports.module": [
		"./src/app/reports/reports.module.ts"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _userrights_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userrights/userdetails/userdetails.component */ "./src/app/userrights/userdetails/userdetails.component.ts");
/* harmony import */ var _userrights_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userrights/user/user.component */ "./src/app/userrights/user/user.component.ts");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heros/heros.component */ "./src/app/heros/heros.component.ts");






var routes = [
    { path: '', redirectTo: '/SidemenuComponent', pathMatch: 'full' },
    { path: 'user', component: _userrights_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: 'userdetails', component: _userrights_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_3__["UserdetailsComponent"] },
    { path: 'heros', component: _heros_heros_component__WEBPACK_IMPORTED_MODULE_5__["HerosComponent"] },
    { path: 'ReportsModule', loadChildren: './reports/reports.module' }
    // {path: 'Customreport', component: CustomreportComponent },
    // {path: 'Customchild', component: CustomchildComponent },
    // {path:'Cart',component:CartComponent}
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-sidemenu></app-sidemenu>\n\n<div class=\"container\">\n\n <div class=\"row\">\n   <div class=\"container\">\n\n    <div class=\"col-lg-11\" style=\"float:right\">\n        <router-outlet></router-outlet>\n        <!-- <ngx-spinner bdColor=\"rgba(51,51,51,0.8)\"\n        size=\"medium\"\n        color=\"#fff\"\n        type=\"ball-scale-multiple\">\n        <p style=\"font-size: 20px; color: white\">Loading...</p></ngx-spinner> -->\n    </div>\n\n   </div>\n\n </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menubar {\n  margin-top: 4em;\n  /* left: 3em; */\n  position: absolute;\n  margin-left: -8em;\n  width: 100%;\n  background: beige;\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGJhY2tvZmZpY2Uvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnViYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICAvKiBsZWZ0OiAzZW07ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLThlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//import {NgxSpinnerService } from 'ngx-spinner';
var AppComponent = /** @class */ (function () {
    function AppComponent(route) {
        this.route = route;
        this.title = 'backoffice';
        route.events.subscribe(function (even) {
            if (even instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                //loading gif will show here
                //this.ngxspinner.show();
            }
            if (even instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                //hide loading indicator
                // setTimeout(() => {
                // this.ngxspinner.hide();
                // }, 5000);
            }
            if (even instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                //hide loading indicator
                // setTimeout(() => {
                //   this.ngxspinner.hide();
                //   }, 5000);
                //present error to user
                console.log(even.error);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //loading gif will show here
        //this.ngxspinner.show();
        //  setTimeout(() => {
        //   this.ngxspinner.hide();
        //   }, 5000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _userrights_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userrights/userdetails/userdetails.component */ "./src/app/userrights/userdetails/userdetails.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _userrights_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userrights/user/user.component */ "./src/app/userrights/user/user.component.ts");
/* harmony import */ var _userrights_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userrights/sidemenu/sidemenu.component */ "./src/app/userrights/sidemenu/sidemenu.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm5/index.js");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
/* harmony import */ var _heros_heros_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./heros/heros.component */ "./src/app/heros/heros.component.ts");
/* harmony import */ var _redblack_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./redblack.directive */ "./src/app/redblack.directive.ts");
/* harmony import */ var _namedp_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./namedp.pipe */ "./src/app/namedp.pipe.ts");
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reports/reports.module */ "./src/app/reports/reports.module.ts");









//import {UserrightsService} from '../app/userrights/shared/userrights.service';


 //importing the module









//import { NgxSpinnerModule } from "ngx-spinner";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _userrights_userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_7__["UserdetailsComponent"],
                _userrights_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _userrights_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_12__["SidemenuComponent"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_15__["ReversePipe"],
                _heros_heros_component__WEBPACK_IMPORTED_MODULE_16__["HerosComponent"],
                _redblack_directive__WEBPACK_IMPORTED_MODULE_17__["RedblackDirective"],
                _namedp_pipe__WEBPACK_IMPORTED_MODULE_18__["NamedpPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_14__["DropDownsModule"],
                _reports_reports_module__WEBPACK_IMPORTED_MODULE_19__["ReportsModule"],
            ],
            entryComponents: [_heros_heros_component__WEBPACK_IMPORTED_MODULE_16__["HerosComponent"]],
            // providers: [UserrightsService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/heros/heros.component.html":
/*!********************************************!*\
  !*** ./src/app/heros/heros.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"divtr\">hello world</div>\n\n<form #userform=\"ngForm\" (ngSubmit)=\"onSubmit(userform.value)\" novalidate>\n<div class=\"form-group\">\n<label>Name</label>\n<input type=\"text\" #nameref=\"ngModel\" class=\"form-control\" name=\"name\" required ngModel>\n<!-- <b>{{nameref.className}}</b> -->\n<div [hidden]=\"nameref.valid \" class=\"alert alert-danger\">\nplease enter a name\n</div>\n</div>\n\n<div class=\"form-group\">\n  <label>Email</label>\n  <input type=\"text\" class=\"form-control\" name=\"email\" ngModel>\n  </div>\n<div ngModelGroup=\"address\">\n  <div class=\"form-group\">\n    <label>street</label>\n    <input type=\"text\"  class=\"form-control\" name=\"street\" required ngModel>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>city</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" ngModel>\n      </div>\n</div>\n\n<button type=\"submit\" [disabled]=\"!userform.form.valid\" class=\"btn btn-primary\">Submit</button>\n</form>\n\n<p>normal directive</p>\n<span appRedblack >custom directive</span>\n<p>\n  <span>{{posttitle}}</span>\n</p>\n\n<div>\n  <ul class=\"ulstyle\">\n    <li *ngFor=\"let item of data$\">{{item.title}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/heros/heros.component.scss":
/*!********************************************!*\
  !*** ./src/app/heros/heros.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ulstyle {\n  overflow: auto;\n  height: 500px;\n  widows: 50%; }\n\ninput.ng-valid {\n  border-left: 1px solid green; }\n\ninput.ng-invalid {\n  border-left: 1px solid red; }\n\n.divtr {\n  height: 100px;\n  width: 100px;\n  background: green;\n  transition: width 2s;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto; }\n\n.divtr:hover {\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb3MvRDpcXGJhY2tvZmZpY2Uvc3JjXFxhcHBcXGhlcm9zXFxoZXJvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBRUksNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksMkJBQXlCLEVBQzVCOztBQUVEO0VBRUEsY0FBWTtFQUNaLGFBQVc7RUFDWCxrQkFBZ0I7RUFDaEIscUJBQW1CO0VBQ25CLE9BQUs7RUFDTCxVQUFRO0VBQ1IsUUFBTTtFQUNOLFNBQU87RUFDUCxhQUFXLEVBQ1Y7O0FBRUQ7RUFFSSxhQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9oZXJvcy9oZXJvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bHN0eWxle1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkb3dzOiA1MCU7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXZhbGlke1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuaW5wdXQubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5kaXZ0clxyXG57XHJcbmhlaWdodDoxMDBweDtcclxud2lkdGg6MTAwcHg7XHJcbmJhY2tncm91bmQ6Z3JlZW47XHJcbnRyYW5zaXRpb246d2lkdGggMnM7XHJcbnRvcDowO1xyXG5ib3R0b206MDtcclxubGVmdDowO1xyXG5yaWdodDowO1xyXG5tYXJnaW46YXV0bztcclxufVxyXG5cclxuLmRpdnRyOmhvdmVyXHJcbntcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/heros/heros.component.ts":
/*!******************************************!*\
  !*** ./src/app/heros/heros.component.ts ***!
  \******************************************/
/*! exports provided: HerosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerosComponent", function() { return HerosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_userrights_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/userrights/shared/userrights.service */ "./src/app/userrights/shared/userrights.service.ts");



;
var HerosComponent = /** @class */ (function () {
    function HerosComponent(userservice) {
        this.userservice = userservice;
        this.posttitle = 'dynamic component loading';
        this.data$ = [];
    }
    HerosComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.posttitle='dynamic component loading'
        this.userservice.getrestusers()
            .subscribe(function (data) { return _this.data$ = data; });
    };
    HerosComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HerosComponent.prototype, "posttitle", void 0);
    HerosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heros',
            template: __webpack_require__(/*! ./heros.component.html */ "./src/app/heros/heros.component.html"),
            styles: [__webpack_require__(/*! ./heros.component.scss */ "./src/app/heros/heros.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_userrights_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__["UserrightsService"]])
    ], HerosComponent);
    return HerosComponent;
}());



/***/ }),

/***/ "./src/app/namedp.pipe.ts":
/*!********************************!*\
  !*** ./src/app/namedp.pipe.ts ***!
  \********************************/
/*! exports provided: NamedpPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedpPipe", function() { return NamedpPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamedpPipe = /** @class */ (function () {
    function NamedpPipe() {
    }
    NamedpPipe.prototype.transform = function (value, args) {
        return null;
    };
    NamedpPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'namedp'
        })
    ], NamedpPipe);
    return NamedpPipe;
}());



/***/ }),

/***/ "./src/app/redblack.directive.ts":
/*!***************************************!*\
  !*** ./src/app/redblack.directive.ts ***!
  \***************************************/
/*! exports provided: RedblackDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedblackDirective", function() { return RedblackDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RedblackDirective = /** @class */ (function () {
    function RedblackDirective(el, render) {
        //console.log(el)
        // el.nativeElement.style.color="green";
        // el.nativeElement.style.background="yellow";
        this.el = el;
        this.render = render;
    }
    RedblackDirective.prototype.ngOnInit = function () {
        // let appstyle=`${this.appRedblackX},${this.appRedblackY},${this.appRedblackBlur},${this.appRedblack}`
        //console.log(this.el)
        // this.render.setStyle(this.el.nativeElement,'box-shadow',appstyle)
        this.el.nativeElement.style.color = "blue";
        this.el.nativeElement.style.background = "red";
        this.el.nativeElement.innerText += " samba";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RedblackDirective.prototype, "appRedblack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RedblackDirective.prototype, "appRedblackX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RedblackDirective.prototype, "appRedblackY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RedblackDirective.prototype, "appRedblackBlur", void 0);
    RedblackDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appRedblack]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], RedblackDirective);
    return RedblackDirective;
}());



/***/ }),

/***/ "./src/app/reports/cart/cart.component.html":
/*!**************************************************!*\
  !*** ./src/app/reports/cart/cart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" > \n  <table class=\"table table-sm\">\n    <tr>\n      <th>Id</th>\n      <th>Name</th>\n      <th>Email</th>\n    </tr>\n    <tr *ngFor=\"let v of cartlistprolist\">\n  <td>{{v.id}}</td>\n  <td>{{v.name}}</td>\n  <td>{{v.email}}</td>\n    </tr>\n  </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/reports/cart/cart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/reports/cart/cart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reports/cart/cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/reports/cart/cart.component.ts ***!
  \************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartComponent.prototype, "cartlistprolist", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/reports/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/reports/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/reports/customchild/customchild.component.html":
/*!****************************************************************!*\
  !*** ./src/app/reports/customchild/customchild.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n{{message}}\n</p>\n<div>\n  <ul>\n    <li *ngFor=\"let d of dates\">{{d}}</li>\n  </ul>\n  <button (click)=\"fireevent()\">fire event</button>\n</div>\n\n<div class=\"divviewcart\">\n  <a class=\"btn btn-primary\"  (click)=\"viewcart()\" routerLink=\"/cart\">View cart</a>\n  <div *ngIf=\"show1\">\n      <app-cart [cartlistprolist]=\"cartlist\"></app-cart>\n  <a class=\"btn btn-danger\" (click)=\"hidecart()\" routerLink=\"/cart\">Hide cart</a>\n\n  </div>\n\n</div>\n\n<div class=\"row\" style=\"height:500px;overflow:auto\"> \n  <span>{{ErrorMessage}}</span>\n<table class=\"table table-sm\">\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Email</th>\n  </tr>\n  <tr *ngFor=\"let item of datalist\">\n<td>{{item.id}}</td>\n<td>{{item.name}}</td>\n<td>{{item.email}}</td>\n<td><a  class=\"btn btn-success\" (click)=\"addtocart(item)\">Add Cart</a></td>\n  </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/customchild/customchild.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/reports/customchild/customchild.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hylink {\n  color: 0;\n  text-decoration: underline; }\n\n.divviewcart {\n  width: 472px;\n  position: fixed;\n  top: 50px;\n  right: 90px;\n  border: 1px solid;\n  padding: 26px;\n  height: 200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9jdXN0b21jaGlsZC9EOlxcYmFja29mZmljZS9zcmNcXGFwcFxccmVwb3J0c1xcY3VzdG9tY2hpbGRcXGN1c3RvbWNoaWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsU0FBNEI7RUFDNUIsMkJBQTBCLEVBQ3pCOztBQUVEO0VBRUksYUFBWTtFQUNaLGdCQUFlO0VBQ2YsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGNBQWE7RUFDYixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9jdXN0b21jaGlsZC9jdXN0b21jaGlsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oeWxpbmtcclxue1xyXG5jb2xvcjogYmx1ZSgkY29sb3I6ICMwMDAwMDApO1xyXG50ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmRpdnZpZXdjYXJ0e1xyXG5cclxuICAgIHdpZHRoOiA0NzJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiA5MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/reports/customchild/customchild.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reports/customchild/customchild.component.ts ***!
  \**************************************************************/
/*! exports provided: CustomchildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomchildComponent", function() { return CustomchildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_userrights_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/userrights/shared/userrights.service */ "./src/app/userrights/shared/userrights.service.ts");



var CustomchildComponent = /** @class */ (function () {
    function CustomchildComponent(usersvc) {
        this.usersvc = usersvc;
        this.eventemit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ErrorMessage = "";
        this.myname = 'sambasivarao';
        this.show1 = false;
        this.datalist = [];
        this.cartlist = [];
    }
    //public date=new Date();
    CustomchildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersvc.getcomments().subscribe(function (res) { _this.datalist = res; }, function (error) {
            // console.log("http call failed")
            _this.ErrorMessage = error;
        });
    };
    CustomchildComponent.prototype.fireevent = function () {
        this.eventemit.emit('hello parent i am fine');
    };
    CustomchildComponent.prototype.addtocart = function (item) {
        //this.cartlist.push(this.datalist.filter(r=>r.id==item.id))
        this.cartlist.push({ "id": item.id, "name": item.name, "email": item.email });
        console.log(this.cartlist);
    };
    CustomchildComponent.prototype.viewcart = function () {
        this.show1 = true;
    };
    CustomchildComponent.prototype.hidecart = function () {
        this.show1 = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentmessage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomchildComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomchildComponent.prototype, "eventemit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomchildComponent.prototype, "dates", void 0);
    CustomchildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customchild',
            template: __webpack_require__(/*! ./customchild.component.html */ "./src/app/reports/customchild/customchild.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./customchild.component.scss */ "./src/app/reports/customchild/customchild.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_userrights_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__["UserrightsService"]])
    ], CustomchildComponent);
    return CustomchildComponent;
}());



/***/ }),

/***/ "./src/app/reports/customreport/customreport.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reports/customreport/customreport.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img [src]=\"imageur\" alt=\"image\">\n</div>\n<div>\n  <input  type=\"text\" [(ngModel)]=\"name\">\n  <p> welcom {{name}}</p>\n</div>\n\n<div>\n  <button (click)=\"Changedt()\">change detection</button>\n  <p>{{newmessage}}</p>\n    <app-customchild [dates]=\"dates\" #customchild (eventemit)=\"newmessage=$event\" [parentmessage]=\"message\"></app-customchild>\n     <p>{{customchild.myname}}</p>\n     <p></p>\n</div>"

/***/ }),

/***/ "./src/app/reports/customreport/customreport.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/reports/customreport/customreport.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvY3VzdG9tcmVwb3J0L2N1c3RvbXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reports/customreport/customreport.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reports/customreport/customreport.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomreportComponent", function() { return CustomreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customchild/customchild.component */ "./src/app/reports/customchild/customchild.component.ts");



var CustomreportComponent = /** @class */ (function () {
    function CustomreportComponent() {
        this.imageur = "https://picsum.photos/id/217/200/200";
        this.message = "hello child component how are you";
        this.newmessage = "";
        this.dates = [new Date().getTime()];
    }
    CustomreportComponent.prototype.ngOnInit = function () {
    };
    CustomreportComponent.prototype.ngAfterViewInit = function () {
        this.nameelmentref.message = "prudhivi samba siva rao";
        //this.nameelmentref.nativeElement.focus()
    };
    CustomreportComponent.prototype.Changedt = function () {
        this.dates.push(new Date().getTime());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_customchild_customchild_component__WEBPACK_IMPORTED_MODULE_2__["CustomchildComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_2__["CustomchildComponent"])
    ], CustomreportComponent.prototype, "nameelmentref", void 0);
    CustomreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customreport',
            template: __webpack_require__(/*! ./customreport.component.html */ "./src/app/reports/customreport/customreport.component.html"),
            styles: [__webpack_require__(/*! ./customreport.component.scss */ "./src/app/reports/customreport/customreport.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomreportComponent);
    return CustomreportComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customreport_customreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customreport/customreport.component */ "./src/app/reports/customreport/customreport.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customchild/customchild.component */ "./src/app/reports/customchild/customchild.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/reports/cart/cart.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    { path: 'Customreport', component: _customreport_customreport_component__WEBPACK_IMPORTED_MODULE_3__["CustomreportComponent"] },
    { path: 'Customchild', component: _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_5__["CustomchildComponent"] },
    { path: 'Cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
];
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customreport_customreport_component__WEBPACK_IMPORTED_MODULE_3__["CustomreportComponent"], _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_5__["CustomchildComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            exports: [_customreport_customreport_component__WEBPACK_IMPORTED_MODULE_3__["CustomreportComponent"], _customchild_customchild_component__WEBPACK_IMPORTED_MODULE_5__["CustomchildComponent"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        var rvstring = value.replace('@syncoms.co.uk', '');
        return rvstring;
    };
    ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/userrights/shared/userrights.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/userrights/shared/userrights.service.ts ***!
  \*********************************************************/
/*! exports provided: UserrightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrightsService", function() { return UserrightsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UserrightsService = /** @class */ (function () {
    //userdetaillist:any;
    function UserrightsService(http) {
        this.http = http;
        this.resturl = 'https://jsonplaceholder.typicode.com';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserrightsService.prototype.getrestusers = function () {
        return this.http.get(this.resturl + "/posts").map(function (res) { return res; });
    };
    UserrightsService.prototype.getuserdetails = function () {
        //const api='';
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    UserrightsService.prototype.sendmessage = function (messages) {
        this.subject.next({ text: messages });
    };
    UserrightsService.prototype.clearmessage = function () {
        this.subject.next();
    };
    UserrightsService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    //new get
    UserrightsService.prototype.getcomments = function () {
        //https://jsonplaceholder.typicode.com/posts/1/comments
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
    };
    UserrightsService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || "server error");
    };
    UserrightsService.prototype.getcommentsbyid = function () {
        var params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('userid', '1');
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments', { params: params1 });
    };
    UserrightsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserrightsService);
    return UserrightsService;
}());



/***/ }),

/***/ "./src/app/userrights/sidemenu/sidemenu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/userrights/sidemenu/sidemenu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    \n        <ul>\n          <li><a class=\"nav-link\"  routerLink=\"/userdetails\">User List</a></li>\n          <li> <a class=\"nav-link\"  [routerLink]=\"['/user',{title:'querystring'}]\">User Creation</a></li>\n          <li> <a class=\"nav-link\"  routerLink=\"/heros\">heros</a></li>\n          \n          <li> <a class=\"nav-link\"  routerLink=\"/Customreport\">Custom Report</a></li>\n          \n          <li> <a class=\"nav-link\"  routerLink=\"/Customchild\">Child Report</a></li>\n\n        </ul>\n     \n</nav>"

/***/ }),

/***/ "./src/app/userrights/sidemenu/sidemenu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/userrights/sidemenu/sidemenu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background: #2D2E2E;\n  height: 100%;\n  position: absolute; }\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  nav ul li a {\n      color: #fff;\n      padding: 20px;\n      display: block; }\n  nav ul li .activated {\n      background-color: #00a8ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnJpZ2h0cy9zaWRlbWVudS9EOlxcYmFja29mZmljZS9zcmNcXGFwcFxcdXNlcnJpZ2h0c1xcc2lkZW1lbnVcXHNpZGVtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQW1CO0VBQ25CLGFBQVk7RUFHWixtQkFBa0IsRUFxQnJCO0VBMUJEO0lBUVEsc0JBQXFCO0lBQ3JCLFdBQVU7SUFDVixVQUFTLEVBY1o7RUF4Qkw7TUFlZ0IsWUFBVztNQUNYLGNBQWE7TUFDYixlQUFjLEVBQ2pCO0VBbEJiO01BcUJnQiwwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC91c2VycmlnaHRzL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkQyRTJFO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3JpZ2h0OiAyMzYlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9yaWdodDogOTYlO1xyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGl2YXRlZCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userrights/sidemenu/sidemenu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/userrights/sidemenu/sidemenu.component.ts ***!
  \***********************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent() {
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/userrights/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/userrights/sidemenu/sidemenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/userrights/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/userrights/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div #container></div>\n\n<p>{{name}}</p>\n<button (click)=\"fireevent()\">send event</button>\n<div class=\"row\">\n    <button (click)=\"sendmessage()\" class=\"btn btn-primary\">send message</button>\n    <button (click)=\"clearmessage()\" class=\"btn btn-secondary\">clear message</button>\n</div>\n\n<div class=\"row\">\n    <!-- <button (click)=\"refresh()\" class=\"btn btn-danger\">refresh</button> -->\n    <ul>\n        <li *ngFor=\"let item of fdata\">\n{{item}}\n        </li>\n    </ul>\n</div>\n\n<div class=\"row\">\n    <ul>\n    <li *ngFor=\"let emp of employee;index as i;even as isEven\">\n    {{emp.name}}{{i}}\n    <span *ngIf=\"isEven\">(even row)</span>\n    </li>\n    </ul>\n    <table>\n        <tr *ngFor=\"let emp of employee;index as i;even as isEven\"  [class.even]=\"isEven\">\n            <td>{{i}}</td>\n            <td>{{emp.name}}</td>\n            <td>{{emp.role}}</td>\n        </tr>\n    </table>\n</div>\n\n<div class=\"row\">\n    <button [ngClass]='{\"btn\" : isbutton , \"btn-primary\" : isprimary}'>\n        simple button\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/userrights/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/userrights/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".even {\n  background-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnJpZ2h0cy91c2VyL0Q6XFxiYWNrb2ZmaWNlL3NyY1xcYXBwXFx1c2VycmlnaHRzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnJpZ2h0cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/userrights/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/userrights/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/userrights.service */ "./src/app/userrights/shared/userrights.service.ts");
/* harmony import */ var src_app_heros_heros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/heros/heros.component */ "./src/app/heros/heros.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(userrightsservice, cd, resolver, route) {
        this.userrightsservice = userrightsservice;
        this.cd = cd;
        this.resolver = resolver;
        this.route = route;
        this.isbutton = true;
        this.isprimary = true;
        this.fname = 'samba';
        this.childevent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.employee = [{ name: "samba", role: "dev" }, { name: "dasthu", role: "dev" }, { name: "harish", role: "test" }, { name: "bibek", role: "test" }];
    }
    UserComponent.prototype.sendmessage = function () {
        this.userrightsservice.sendmessage("sending message from usercomponent to appcomponent");
    };
    UserComponent.prototype.clearmessage = function () {
        this.userrightsservice.clearmessage();
    };
    UserComponent.prototype.ngOnInit = function () {
        var p = document.querySelector("p");
        console.log(this.route.snapshot.paramMap.get('title'));
        p.innerHTML = '<style>h1{color:blue} a{color:red} </style> <h1>hello backoffice</h1>';
    };
    UserComponent.prototype.ngAfterContentInit = function () {
        //throw new Error("Method not implemented.");
        var res = this.resolver.resolveComponentFactory(src_app_heros_heros_component__WEBPACK_IMPORTED_MODULE_3__["HerosComponent"]);
        this.container.createComponent(res);
        var postref = this.container.createComponent(res);
        postref.instance.posttitle = 'dynamic';
    };
    UserComponent.prototype.fireevent = function () {
        this.childevent.emit('hey prudhivi');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserComponent.prototype, "fdata", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "childevent", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/userrights/user/user.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/userrights/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__["UserrightsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userrights/userdetails/userdetails.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/userrights/userdetails/userdetails.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"\">{{\"welcome\"}}</a>\n<form [formGroup]=\"userform\" (ngSubmit)=\"onSubmit()\">\n<div class=\"form-group\">\n  <label for=\"\">Name</label>\n<input #newFood type=\"text\" placeholder=\"Enter name\" class=\"form-control\" formControlName=\"name\" >\n<!-- <b>{{newFood.className}}</b> -->\n<div *ngIf=\"userform.controls['name'].hasError('required')\" class=\"alert alert-danger\">\nplease enter name\n</div>\n<div *ngIf=\"userform.controls['name'].hasError('minlength')\" class=\"alert alert-danger\">\n  please enter minimum 4 characters\n  </div>\n  <div *ngIf=\"userform.controls['name'].hasError('maxlength')\" class=\"alert alert-danger\">\n  name cannot exceed 10 characters\n    </div>\n</div>\n\n<div class=\"form-group\">\n    <label for=\"\">Email</label>\n    <input  type=\"text\" placeholder=\"Enter email\" class=\"form-control\" formControlName=\"email\" >\n</div>\n\n<div formGroupName=\"address\"> \n    <div class=\"form-group\">\n        <label for=\"\">street</label>\n        <input  type=\"text\" placeholder=\"Enter street\" class=\"form-control\" formControlName=\"street\" >\n        <div *ngIf=\"userform.controls['address'].controls['street'].hasError('required')\" class=\"alert alert-danger\">\nplease enter street\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"\">city</label>\n        <input  type=\"text\" placeholder=\"Enter city\" class=\"form-control\" formControlName=\"city\" >\n    </div>\n</div>\n\n<button type=\"submit\" [disabled]=\"!userform.valid\" class=\"btn btn-primary\">Submit</button>\n<!-- <button (click)=\"addFood(newFood.value)\" class=\"btn btn-primary\">Add food</button> -->\n</form>\n<!-- <app-user #child [fdata]=\"foods\" ></app-user> -->\n<!-- {{child.fdata}} -->\n      <!-- <nav class=\"\">\n          <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">      \n        </nav>\n<table class=\"table table-sm\">\n<thead>\n  <th>\n    User Name\n  </th>\n  <th>\n    Password\n  </th>\n  <th>\n    Role Name\n  </th>\n</thead>\n<ng-container *ngFor=\"let user of userdetailsarray | filter:filter |paginate: { itemsPerPage: 20, currentPage: p }; let i = index\">\n<tr class=\"table-dark\">\n  <td>{{user.ClientUserName}}</td>\n  <td>{{user.ClientUserPassword}}</td>\n  <td>{{user.RoleName}}</td>\n</tr>\n</ng-container>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n</table>\n  -->\n  <!-- main app container -->\n\n<div class=\"jumbotron\">\n  <div class=\"container text-center\">\n      <div class=\"row\">\n          <div class=\"col-sm-8 offset-sm-2\">\n              <div *ngIf=\"message\" class=\"alert alert-success\">{{message.text}}</div>             \n          </div>\n      </div>\n\n  \n    \n  </div>\n</div>\n<div class=\"flex-container\">\n<div>1</div>\n<div>2</div>\n<div>3</div>\n<div>4</div>\n<div>5</div>\n\n  </div>\n\n<div class=\"divcont\">\n  <div class=\"row1\">\n    <div class=\"col\">samba</div>\n    <div class=\"col\">siva</div>\n    <div class=\"col\">rao</div>\n    </div>\n</div>\n\n\n  <h1>{{message}}</h1>\n  <p>{{pipename | titlecase}}</p>\n  <h2>{{0.25|currency:'INR'}}</h2>\n<h6>{{date|date:'shortDate'}}</h6>\n<h3>{{pipename | reverse}}</h3>\n\n  <app-user (childevent)=\"message=$event\" [parentData]=\"name\" ></app-user>\n  \n\n \n  <div class=\"row\">\n    <kendo-dropdownlist [data]=\"userdetailsarray\"\n    [textField]=\"'name'\"\n    [valueField]=\"'name'\"\n     >\n  </kendo-dropdownlist>\n  </div>\n\n<div class=\"row\" style=\"margin:1.2em\"></div>\n\n<div class=\"row\">\n  <kendo-grid [kendoGridBinding]=\"userdetailsarray\"  [pageSize]=\"pageSize\"\n  \n  [pageable]=\"true\"\n  [sortable]=\"true\"\n  [filterable]=\"true\"\n  [groupable]=\"true\"\n  [height]=\"510\"  \n  [kendoGridSelectBy]=\"'id'\"\n   \n   >\n    <kendo-grid-column field=\"ClientUserName\" title=\" User Name\" width=\"100\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            {{ dataItem.name }}\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"email\" title=\" Email\" width=\"100\">\n    </kendo-grid-column> \n    <kendo-grid-column field=\"address.street\" title=\" street\" width=\"100\">\n    </kendo-grid-column>  \n    <kendo-grid-column field=\"address.city\" title=\" city\" width=\"100\">\n      </kendo-grid-column>   \n</kendo-grid>\n</div>\n \n<div class=\"row\" style=\"margin:1.2em\"></div>\n"

/***/ }),

/***/ "./src/app/userrights/userdetails/userdetails.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/userrights/userdetails/userdetails.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  display: inline-block;\n  width: 33.33333% !important;\n  height: 200px;\n  padding: 20px;\n  border: 1px solid #2bca5c;\n  box-sizing: border-box; }\n\n.row1 {\n  width: 100% !important; }\n\n.divcont {\n  max-width: 600px !important;\n  margin: 0 auto; }\n\n.flex-container {\n  display: flex;\n  background-color: DodgerBlue;\n  justify-content: center; }\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  margin: 10px;\n  padding: 20px;\n  font-size: 30px; }\n\ninput.ng-invalid {\n  border-left: 1px solid red; }\n\ninput.ng-valid {\n  border-left: 1px solid green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnJpZ2h0cy91c2VyZGV0YWlscy9EOlxcYmFja29mZmljZS9zcmNcXGFwcFxcdXNlcnJpZ2h0c1xcdXNlcmRldGFpbHNcXHVzZXJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQW9CO0VBQ3BCLDRCQUEyQjtFQUMzQixjQUFZO0VBQ1osY0FBWTtFQUNaLDBCQUF5QjtFQUN6Qix1QkFBc0IsRUFFekI7O0FBQ0Q7RUFFSSx1QkFBc0IsRUFDekI7O0FBQ0Q7RUFDSSw0QkFBMkI7RUFDM0IsZUFBYyxFQUNqQjs7QUFDRDtFQUVJLGNBQWE7RUFDYiw2QkFBNEI7RUFDNUIsd0JBQ0osRUFBQzs7QUFDRDtFQUNJLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osY0FBYTtFQUNiLGdCQUFlLEVBQ2hCOztBQUVEO0VBRUUsMkJBQXlCLEVBQzFCOztBQUNEO0VBQ0ksNkJBQTJCLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnJpZ2h0cy91c2VyZGV0YWlscy91c2VyZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xcclxue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmJjYTVjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuLnJvdzFcclxue1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZGl2Y29udHtcclxuICAgIG1heC13aWR0aDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuLmZsZXgtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQubmctaW52YWxpZHtcclxuXHJcbiAgICBib3JkZXItbGVmdDoxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBpbnB1dC5uZy12YWxpZHtcclxuICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIGdyZWVuO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/userrights/userdetails/userdetails.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userrights/userdetails/userdetails.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/userrights.service */ "./src/app/userrights/shared/userrights.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(userrightservice, _fb) {
        var _this = this;
        this.userrightservice = userrightservice;
        this._fb = _fb;
        // userform=new FormGroup({
        //  name:new FormControl('abc',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
        //  email:new FormControl() ,
        // address:new FormGroup({
        //   street:new FormControl('',Validators.required),
        //   city:new FormControl()
        // })
        // })
        this.date = new Date();
        this.pipename = "welcome to angular";
        this.name = "samba siva rao";
        this.message = "";
        this.mySelection = [];
        this.rowchecked = false;
        this.pageSize = 50;
        this.userdetailsarray = [];
        this.foods = ['apple', 'mango', 'orange'];
        this.subscription = this.userrightservice.getMessage().subscribe(function (message) { _this.message = message; });
    }
    UserdetailsComponent.prototype.onSubmit = function () {
        console.log(this.userform.value);
    };
    UserdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userform = this._fb.group({
            name: ['samba', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            email: [],
            address: this._fb.group({
                street: [],
                city: []
            })
        });
        this.userrightservice.getuserdetails()
            .subscribe(function (data) {
            return _this.userdetailsarray = data;
        }, function (error) {
            _this.message = "problem with service please try again aftere some time";
            console.log(error);
        }
        //this.gridData=this.userdetailsarray;
        );
    };
    UserdetailsComponent.prototype.addFood = function (food) {
        //this.foods.push(food);
        this.foods = this.foods.concat([food]);
    };
    UserdetailsComponent.prototype.textchange = function (e) {
        alert(e.target.value);
    };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/userrights/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.scss */ "./src/app/userrights/userdetails/userdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_userrights_service__WEBPACK_IMPORTED_MODULE_2__["UserrightsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
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

module.exports = __webpack_require__(/*! D:\backoffice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map