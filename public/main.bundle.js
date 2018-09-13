webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <div class=\"col-md-3\"></div>\n\n    <div class=\"col-md-6\" style=\"align-content: center\">\n        <flash-message></flash-message>\n    </div>    \n    <div class=\"col-md-3\"></div>\n    \n</div>\n<div>\n    <router-outlet></router-outlet>\n</div>\n    <!--\n        \n    -->\n    \n   "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_loginpage_loginpage_component__ = __webpack_require__("./src/app/components/loginpage/loginpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_userregister_userregister_component__ = __webpack_require__("./src/app/components/userregister/userregister.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_reguserprofile_reguserprofile_component__ = __webpack_require__("./src/app/components/reguserprofile/reguserprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_reguserheader_reguserheader_component__ = __webpack_require__("./src/app/components/reguserheader/reguserheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_reguserfooter_reguserfooter_component__ = __webpack_require__("./src/app/components/reguserfooter/reguserfooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_usernavbar_usernavbar_component__ = __webpack_require__("./src/app/components/usernavbar/usernavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_usersidebar_usersidebar_component__ = __webpack_require__("./src/app/components/usersidebar/usersidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_adminsidebar_adminsidebar_component__ = __webpack_require__("./src/app/components/adminsidebar/adminsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_books_books_component__ = __webpack_require__("./src/app/components/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_borrowings_user_borrowings_component__ = __webpack_require__("./src/app/components/user-borrowings/user-borrowings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_fines_user_fines_component__ = __webpack_require__("./src/app/components/user-fines/user-fines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admnprofile_admnprofile_component__ = __webpack_require__("./src/app/components/admnprofile/admnprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admnnavbar_admnnavbar_component__ = __webpack_require__("./src/app/components/admnnavbar/admnnavbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admnlogin_admnlogin_component__ = __webpack_require__("./src/app/components/admnlogin/admnlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admnbooks_admnbooks_component__ = __webpack_require__("./src/app/components/admnbooks/admnbooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_manageusers_manageusers_component__ = __webpack_require__("./src/app/components/manageusers/manageusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_managebrrws_managebrrws_component__ = __webpack_require__("./src/app/components/managebrrws/managebrrws.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_adminfines_adminfines_component__ = __webpack_require__("./src/app/components/adminfines/adminfines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_admnsuggest_admnsuggest_component__ = __webpack_require__("./src/app/components/admnsuggest/admnsuggest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipe_filter_pipe__ = __webpack_require__("./src/app/pipe/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    //home page
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'logPage', component: __WEBPACK_IMPORTED_MODULE_10__components_loginpage_loginpage_component__["a" /* LoginpageComponent */] },
    { path: 'regUser', component: __WEBPACK_IMPORTED_MODULE_11__components_userregister_userregister_component__["a" /* UserregisterComponent */] },
    //user profile
    { path: 'userProfile', component: __WEBPACK_IMPORTED_MODULE_12__components_reguserprofile_reguserprofile_component__["a" /* ReguserprofileComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_18__components_books_books_component__["a" /* BooksComponent */] },
    { path: 'myborrw', component: __WEBPACK_IMPORTED_MODULE_19__components_user_borrowings_user_borrowings_component__["a" /* UserBorrowingsComponent */] },
    { path: 'userFines', component: __WEBPACK_IMPORTED_MODULE_20__components_user_fines_user_fines_component__["a" /* UserFinesComponent */] },
    //admin profile
    { path: 'admnProfile', component: __WEBPACK_IMPORTED_MODULE_21__components_admnprofile_admnprofile_component__["a" /* AdmnprofileComponent */] },
    { path: 'admnLog', component: __WEBPACK_IMPORTED_MODULE_23__components_admnlogin_admnlogin_component__["a" /* AdmnloginComponent */] },
    { path: 'admnbook', component: __WEBPACK_IMPORTED_MODULE_25__components_admnbooks_admnbooks_component__["a" /* AdmnbooksComponent */] },
    { path: 'mnguser', component: __WEBPACK_IMPORTED_MODULE_26__components_manageusers_manageusers_component__["a" /* ManageusersComponent */] },
    { path: 'mngborrow', component: __WEBPACK_IMPORTED_MODULE_27__components_managebrrws_managebrrws_component__["a" /* ManagebrrwsComponent */] },
    { path: 'mngfines', component: __WEBPACK_IMPORTED_MODULE_28__components_adminfines_adminfines_component__["a" /* AdminfinesComponent */] },
    { path: 'mngsgst', component: __WEBPACK_IMPORTED_MODULE_29__components_admnsuggest_admnsuggest_component__["a" /* AdmnsuggestComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_loginpage_loginpage_component__["a" /* LoginpageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_userregister_userregister_component__["a" /* UserregisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_reguserprofile_reguserprofile_component__["a" /* ReguserprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_reguserheader_reguserheader_component__["a" /* ReguserheaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_reguserfooter_reguserfooter_component__["a" /* ReguserfooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_usernavbar_usernavbar_component__["a" /* UsernavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_usersidebar_usersidebar_component__["a" /* UsersidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_adminsidebar_adminsidebar_component__["a" /* AdminsidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_borrowings_user_borrowings_component__["a" /* UserBorrowingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_fines_user_fines_component__["a" /* UserFinesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admnprofile_admnprofile_component__["a" /* AdmnprofileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admnnavbar_admnnavbar_component__["a" /* AdmnnavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admnlogin_admnlogin_component__["a" /* AdmnloginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_admnbooks_admnbooks_component__["a" /* AdmnbooksComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_manageusers_manageusers_component__["a" /* ManageusersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_managebrrws_managebrrws_component__["a" /* ManagebrrwsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_adminfines_adminfines_component__["a" /* AdminfinesComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_admnsuggest_admnsuggest_component__["a" /* AdmnsuggestComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pipe_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_flash_message__["FlashMessageModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/adminfines/adminfines.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminfines/adminfines.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-6\">Resolved Borrows</h4>\n              \n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"dwnload()\">\n                  Generate report\n              </button>\n\n              <div class=\"col-md-1\"></div>\n              \n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"unpaid()\">\n                Check Unpaid\n              </button>\n\n              <div class=\"col-md-1\"></div>\n\n              \n\n              \n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-2\">Borrow Id</th>\n                    <th class=\"col-md-2\">Username</th>\n                    <th class=\"col-md-2\">TakenDate</th>                    \n                    <th class=\"col-md-2\">DueDate</th>\n                    <th class=\"col-md-2\">Returned Date</th>\n                    <th class=\"col-md-1\">Fine(Rs.)</th>\n                    <th class=\"col-md-2\">Status</th>\n                  </thead>\n                  <tbody>\n                    \n      \n                    <tr *ngFor=\"let item of this.rslvdData; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.borrow_id}}</td>\n                      <td>{{item.username}}</td>\n                      <td>{{item.takendate}}</td>                      \n                      <td>{{item.duedate}}</td>\n                      <td>{{item.returneddate}}</td>\n                      <td>{{item.fine}}</td>\n                      <td>{{item.status}}</td>\n                      <!--td>\n                          <button class=\"btn btn-info\" (click)=\"openEdtBk(item)\">Edit</button>\n                          <button class=\"btn btn-danger\" (click)=\"shwDlt(item)\">Delete</button>\n                      </td-->\n                      \n                    </tr>\n                     \n                  </tbody>\n              </table>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<!--\n                               Unpaid resolved borrows\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Unpaid Borrow Details</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"oncloseEdit()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n     <br>\n      <div class=\"content table-responsive table-full-width col-md-12\">\n        <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n            <thead>\n              \n              <th class=\"col-md-3\">ResolvedId</th>\n              <th class=\"col-md-3\">BorrowId</th>\n              <th class=\"col-md-2\">Username</th>\n              <th class=\"col-md-2\">Fine</th>\n              <th class=\"col-md-1\">Pay Fine</th>\n              \n            </thead>\n            <tbody>\n              \n                  <tr *ngFor=\"let item of this.unpaiddData\">\n                      \n                      <td>{{item._id}}</td>\n                      <td>{{item.borrow_id}}</td>                      \n                      <td>{{item.username}}</td>\n                      <td>{{item.fine}}</td>\n                                         \n                      <td>\n                        <button class=\"btn btn-default\" (click)=\"pay(item)\">Pay Fine</button>\n                      </td> \n                      \n                    </tr>              \n            </tbody>\n        </table>\n\n    </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n"

/***/ }),

/***/ "./src/app/components/adminfines/adminfines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminfinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__ = __webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminfinesComponent = /** @class */ (function () {
    function AdminfinesComponent(auth, flashMessage) {
        this.auth = auth;
        this.flashMessage = flashMessage;
    }
    AdminfinesComponent.prototype.ngOnInit = function () {
        this.showAllRslved();
    };
    AdminfinesComponent.prototype.showAllRslved = function () {
        var _this = this;
        this.auth.ShowAllRslvedBrw().subscribe(function (res) {
            // console.log(res.book_details);
            _this.rslvdData = res.rslvd_details;
            console.log(_this.rslvdData);
        });
    };
    AdminfinesComponent.prototype.showAllUnpaid = function () {
        var _this = this;
        this.auth.ShowAllUnPaid().subscribe(function (res) {
            // console.log(res.book_details);
            _this.unpaiddData = res.unpaid;
            console.log(_this.unpaiddData);
        });
    };
    AdminfinesComponent.prototype.unpaid = function () {
        this.showAllUnpaid();
        this.display = "block";
    };
    AdminfinesComponent.prototype.oncloseEdit = function () {
        this.display = "none";
    };
    AdminfinesComponent.prototype.pay = function (item) {
        var _this = this;
        this.auth.updateUnpaid(item).subscribe(function (res) {
            console.log(res);
            _this.flashMessage.success('Paid details updated..', {
                delay: 1500,
                successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/'
            });
        });
    };
    AdminfinesComponent.prototype.dwnload = function () {
        var today = new Date();
        var today_dy = today.getDate(), today_mnt = (today.getMonth() + 1), today_yr = today.getFullYear();
        var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
        var date = today_yr + "_" + today_mnt + "_" + today_dy;
        //var datenm = today_yr + "" + today_mnt + "-" + today_dy;
        var rows = [];
        var i = 0;
        for (var _i = 0, _a = this.rslvdData; _i < _a.length; _i++) {
            var x = _a[_i];
            var insiderow = [];
            insiderow.push(this.rslvdData[i].username);
            insiderow.push(this.rslvdData[i].fine);
            insiderow.push(this.rslvdData[i].returneddate);
            insiderow.push(this.rslvdData[i].status);
            i = i + 1;
            rows.push(insiderow);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__();
        //var cols = ["paying id", "borrow id", "username", "fine"];
        var cols = ["username", "fine", "returned date", "status"];
        doc.autoTable(cols, rows);
        doc.text(10, 10, "Report on Fine Details: " + date1);
        doc.save('AdminFines' + date + '.pdf');
    };
    AdminfinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminfines',
            template: __webpack_require__("./src/app/components/adminfines/adminfines.component.html"),
            styles: [__webpack_require__("./src/app/components/adminfines/adminfines.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], AdminfinesComponent);
    return AdminfinesComponent;
}());



/***/ }),

/***/ "./src/app/components/adminsidebar/adminsidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminsidebar/adminsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-admnnavbar></app-admnnavbar>\n\n<br>\n\n<base href=\"../../../\">\n\n<div class=\"wrapper col-md-3\">\n  <div class=\"sidebar\" data-color=\"purple\" data-image=\"assets/userassets/img/sidebar-4.jpg\">\n\n  <!--   you can change the color of the sidebar using: data-color=\"blue | azure | green | orange | red | purple\" -->\n\n\n    <div class=\"sidebar-wrapper\">\n        <div class=\"logo\">\n            <a href=\"\" class=\"simple-text\">\n                UCSC Library <br> Admin Profile\n            </a>\n        </div>\n\n          <ul class=\"nav\">\n             \n              <li>\n                  <a [routerLink]=\"['/admnProfile']\">\n                      <i class=\"pe-7s-user\"></i>\n                      <p>User Profile</p>\n                  </a>\n              </li>\n              <li>\n                <a [routerLink]=\"['/admnbook']\">\n                      <i class=\"pe-7s-notebook\"></i>\n                      <p>Manage books</p>\n                  </a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/mnguser']\">\n                      <i class=\"pe-7s-users\"></i>\n                      <p>Manage Users</p>\n                  </a>\n              </li>\n              <li>\n                <a [routerLink]=\"['/mngborrow']\">\n                      <i class=\"pe-7s-paperclip\"></i>\n                      <p>Manage borrowings</p>\n                  </a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/mngfines']\">\n                      <i class=\"pe-7s-cash\"></i>\n                      <p>Fine Payments</p>\n                  </a>\n              </li>\n              <li>\n                <a [routerLink]=\"['/mngsgst']\">\n                    <i class=\"pe-7s-note2\"></i>\n                    <p>Book Suggestions</p>\n                </a>\n            </li>\n              \n          </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/adminsidebar/adminsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminsidebarComponent = /** @class */ (function () {
    function AdminsidebarComponent(routes, authservice) {
        this.routes = routes;
        this.authservice = authservice;
    }
    AdminsidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getAdmnProfileDet().subscribe(function (res) {
            console.log(res.data);
            if (res.data == null) {
                _this.routes.navigate(['/admnLog']);
            }
        });
    };
    AdminsidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-adminsidebar',
            template: __webpack_require__("./src/app/components/adminsidebar/adminsidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/adminsidebar/adminsidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AdminsidebarComponent);
    return AdminsidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/admnbooks/admnbooks.component.css":
/***/ (function(module, exports) {

module.exports = "div.scroll {\r\n\r\n    width: 980px;\r\n    height: 450px;\r\n    overflow: scroll;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/admnbooks/admnbooks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-6\">Book Details</h4>\n\n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"dwnload()\">\n                Generate Report\n              </button>\n\n              <div class=\"col-md-1\"></div>\n\n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"addBooks()\">\n                Add new Books\n              </button>\n\n              <div class=\"col-md-1\"></div>\n              \n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"row container\">\n\n           \n              \n              \n                <button class=\"btn btn-default\" disabled><i class=\"fa fa-search\"></i>\n                  <p class=\"hidden-lg hidden-md\">Search</p>\n                </button>\n              \n              \n              <div class=\"col-md-2\">\n                <input class=\"form-control\" name=\"searchString\" placeholder=\"Search with subject\" [(ngModel)]=\"searchString\">\n              </div>\n              <div class=\"col-md-2\">\n                <input class=\"form-control\" name=\"searchString2\" placeholder=\"Search with name...\" [(ngModel)]=\"searchString2\">\n              </div>\n  \n          </div>\n  \n          <br>\n          <div class=\"content table-responsive table-full-width\">\n            <div class=\"scroll\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th>#</th>\n                    <th class=\"col-md-2\">Book Name</th>\n                    <th>Subject</th>\n                    <th>Author name</th>\n                    <th>ISBN No</th>\n                    <th>Publication</th>\n                    <th>Action</th>\n                    <!--th class=\"col-md-3\">Action</th-->\n                  </thead>\n                  <tbody>\n                    \n                    <!--tr *ngFor=\"let item of this.bookData\"-->\n                    <tr *ngFor=\"let item of this.bookData | filter : 'subject' : searchString | filter : 'bookname' : searchString2; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.subject}}</td>\n                      <td>{{item.authorname}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <td>{{item.publication}}</td>\n                      <td>\n                          <button class=\"btn btn-info\" (click)=\"openEdtBk(item)\">Edit</button>\n                          <button class=\"btn btn-danger\" (click)=\"shwDlt(item)\">Delete</button>\n                      </td>\n                      \n                    </tr>\n                     \n                  </tbody>\n              </table>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<!--\n  \n                              FORM FOR ADDING A NEW BOOK\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Add new Books</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Book name</label>\n              <input type=\"text\" class=\"form-control\" name=\"dnm\" placeholder=\"Book name\" value=\"\" [(ngModel)] = \"bookdet.bookname\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Author name</label>\n                <input type=\"text\" class=\"form-control\" name=\"dnm\" placeholder=\"Author name\" value=\"\" [(ngModel)] = \"bookdet.authorname\" required>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">ISBN Number</label>\n              <input type=\"text\" class=\"form-control\" name=\"mbno\" placeholder=\"ISBN no\" value=\"\" [(ngModel)] = \"bookdet.isbn_no\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Subject</label>\n              <!--input type=\"text\" class=\"form-control\" name=\"tno\" placeholder=\"Subject\" value=\"\" [(ngModel)] = \"bookdet.subject\" required-->\n\n              <select  class=\"form-control\" name=\"sub\" placeholder=\"Subject\" [(ngModel)] = \"bookdet.subject\" required>\n\n                  <option>Select subject..</option>\n\n                  <!--to select subject from book types table -->\n                  <option *ngFor=\"let itmm of subList\">\n                    {{itmm.subject}}\n                  </option>\n              </select>\n\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Publication</label>\n              <input type=\"text\" class=\"form-control\" name=\"tnm\" placeholder=\"publication\" value=\"\" [(ngModel)] = \"bookdet.publication\" required>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-4\"></div>\n              <div class=\"col-md-4\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"addnewBook()\">Add Book</button>\n              </div>\n              <div class=\"col-md-4\"></div>\n            </div>\n            \n            \n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n<!--\n                               Edit book details\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display2}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display2}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Edit Book Details</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled2()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Book name</label>\n              <input type=\"text\" class=\"form-control\" name=\"dnm\" placeholder=\"Driver name\" value=\"updt_bookdet.bookname\" [(ngModel)] = \"updt_bookdet.bookname\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Author name</label>\n                <input type=\"text\" class=\"form-control\" name=\"anm\" placeholder=\"Driver name\" value=\"updt_bookdet.authorname\" [(ngModel)] = \"updt_bookdet.authorname\" required>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">ISBN Number</label>\n              <input type=\"text\" class=\"form-control\" name=\"mbno\" placeholder=\"Mobile no\" value=\"updt_bookdet.isbn_no\" [(ngModel)] = \"updt_bookdet.isbn_no\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Subject</label>\n              <input type=\"text\" class=\"form-control\" name=\"tno\" placeholder=\"Truck no\" value=\"updt_bookdet.subject\" [(ngModel)] = \"updt_bookdet.subject\" required>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Publication</label>\n              <input type=\"text\" class=\"form-control\" name=\"tn\" placeholder=\"publication\" value=\"updt_bookdet.publication\" [(ngModel)] = \"updt_bookdet.publication\" required>\n            </div>\n            \n              <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"editMyBook()\">Edit Book</button>\n                </div>\n                <div class=\"col-md-4\"></div>\n              </div>\n            \n            \n            \n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n<!--\n                               Delete books\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display3}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display3}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Delete Book</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        \n          \n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <p>\n          Are you sure about deleting this book\n        </p>\n        \n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onCloseHandled3()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteIt()\">Yes</button>\n        \n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n"

/***/ }),

/***/ "./src/app/components/admnbooks/admnbooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmnbooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__ = __webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdmnbooksComponent = /** @class */ (function () {
    function AdmnbooksComponent(auth, flashMessage) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.display = 'none';
        this.display2 = 'none';
        this.display3 = 'none';
        this.bookdet = {
            bookname: '',
            authorname: '',
            subject: '',
            //copies:'',
            isbn_no: '',
            publication: ''
        };
        this.updt_bookdet = {
            _id: '',
            bookname: '',
            authorname: '',
            subject: '',
            //copies:'',
            isbn_no: '',
            publication: ''
        };
    }
    AdmnbooksComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    //..............get book details when page load.................
    AdmnbooksComponent.prototype.getData = function () {
        var _this = this;
        this.auth.getBookDet().subscribe(function (res) {
            console.log(res.book_details);
            _this.bookData = res.book_details;
            //console.log(res.book_details[1]);
        });
    };
    //.......................add book functionality..............
    AdmnbooksComponent.prototype.addBooks = function () {
        this.loadSubs();
        this.display = "block";
    };
    AdmnbooksComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    AdmnbooksComponent.prototype.addnewBook = function () {
        var _this = this;
        console.log(this.bookdet);
        var books_det = {
            bookname: this.bookdet.bookname,
            authorname: this.bookdet.authorname,
            subject: this.bookdet.subject,
            publication: this.bookdet.publication,
            isbn_no: this.bookdet.isbn_no
        };
        console.log(books_det);
        this.auth.registerBook(books_det).subscribe(function (res) {
            console.log(res);
            _this.flashMessage.success('Book added Successfully..', {
                delay: 1500,
                successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/mngborrow'
            });
        });
        this.onCloseHandled();
    };
    //.......................edit book functionality..............
    AdmnbooksComponent.prototype.openEdtBk = function (item) {
        this.updt_bookdet._id = item._id;
        this.updt_bookdet.authorname = item.authorname;
        this.updt_bookdet.bookname = item.bookname;
        //this.updt_bookdet.copies = item.copies;
        this.updt_bookdet.isbn_no = item.isbn_no;
        this.updt_bookdet.subject = item.subject;
        this.updt_bookdet.publication = item.publication;
        console.log("open edit book");
        console.log(item);
        this.display2 = "block";
    };
    AdmnbooksComponent.prototype.onCloseHandled2 = function () {
        this.display2 = "none";
    };
    AdmnbooksComponent.prototype.editMyBook = function () {
        var _this = this;
        console.log("in ts file..");
        console.log(this.updt_bookdet);
        //console.log(updtdet);
        //this.auth.editMyBook(this.updt_bookdet);
        this.auth.editMyBook(this.updt_bookdet).subscribe(function (res) {
            _this.flashMessage.success('Book edited Successfully..', {
                delay: 1500,
                successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/'
            });
        });
        this.onCloseHandled2();
    };
    //......................delete book functionality..............
    AdmnbooksComponent.prototype.shwDlt = function (id) {
        this.dltID = id;
        this.display3 = "block";
    };
    AdmnbooksComponent.prototype.onCloseHandled3 = function () {
        this.display3 = "none";
    };
    AdmnbooksComponent.prototype.deleteIt = function () {
        var _this = this;
        this.auth.deleteBook(this.dltID).subscribe(function (res) {
            console.log(res);
            _this.flashMessage.success('Book deleted Successfully..', {
                delay: 1500,
                //successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/'
            });
        });
        this.onCloseHandled3();
    };
    AdmnbooksComponent.prototype.loadSubs = function () {
        var _this = this;
        this.auth.showAllSub().subscribe(function (res) {
            _this.subList = res.subjects;
            console.log(_this.subList);
        });
    };
    AdmnbooksComponent.prototype.dwnload = function () {
        var today = new Date();
        var today_dy = today.getDate(), today_mnt = (today.getMonth() + 1), today_yr = today.getFullYear();
        var date = today_yr + "_" + today_mnt + "_" + today_dy;
        var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
        //var date = today_yr + "-" + today_mnt + "-" + today_dy;
        //var datenm = today_yr + "" + today_mnt + "-" + today_dy;
        var rows = [];
        var i = 0;
        for (var _i = 0, _a = this.bookData; _i < _a.length; _i++) {
            var x = _a[_i];
            var insiderow = [];
            insiderow.push(this.bookData[i].bookname);
            insiderow.push(this.bookData[i].authorname);
            insiderow.push(this.bookData[i].subject);
            insiderow.push(this.bookData[i].publication);
            insiderow.push(this.bookData[i].isbn_no);
            i = i + 1;
            rows.push(insiderow);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__({ orientation: 'landscape' });
        //var cols = ["paying id", "borrow id", "username", "fine"];
        var cols = ["bookname", "authername", "subject", "publication", "isbn_no"];
        doc.text(10, 10, "Report on Book Details: " + date1);
        //doc.text(100, 5, "University of Colombo School of Computing");
        doc.autoTable(cols, rows);
        doc.save('BookDetails' + date + '.pdf');
    };
    AdmnbooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admnbooks',
            template: __webpack_require__("./src/app/components/admnbooks/admnbooks.component.html"),
            styles: [__webpack_require__("./src/app/components/admnbooks/admnbooks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], AdmnbooksComponent);
    return AdmnbooksComponent;
}());



/***/ }),

/***/ "./src/app/components/admnlogin/admnlogin.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/admnlogin/admnlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<h1 style=\"text-align: center\">\n  Admin Login Forum\n</h1>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n\n    \n    <!--form (ngSubmit)=\"logingData(form1)\" #form1=\"ngForm\"-->\n    <form (ngSubmit)=\"logData()\" #form1=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputUsername\" placeholder=\"Username\" name=\"unm\" [(ngModel)] = \"admnlogdet.username\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword\" placeholder=\"Password\" name=\"pwd\" [(ngModel)] = \"admnlogdet.password\" required minlength=\"5\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputKey\">Seriel Key</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputKey\" placeholder=\"Key\" name=\"sky\" [(ngModel)] = \"admnlogdet.serial\" required minlength=\"5\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Login</button>\n    </form>\n  </div>\n\n  <div class=\"col-md-2\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/admnlogin/admnlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmnloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdmnloginComponent = /** @class */ (function () {
    function AdmnloginComponent(authservice, flashMessage) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.admnlogdet = {
            username: '',
            password: '',
            serial: ''
        };
    }
    AdmnloginComponent.prototype.logData = function () {
        //console.log(this.admnlogdet);
        //this.authservice.logingAdminUser(this.admnlogdet);
        var _this = this;
        var admnlgdt = {
            username: this.admnlogdet.username,
            password: this.admnlogdet.password,
            serialkey: this.admnlogdet.serial
        };
        this.authservice.logingAdminUser(admnlgdt).subscribe(function (res) {
            console.log(res.state);
            console.log(res.token);
            console.log(res.admin);
            console.log(res);
            if (res.state) {
                _this.authservice.storeadmnData(res.token, res.Admin);
                _this.flashMessage.success('Admin logged in Successfully..', {
                    delay: 1500,
                    successClass: 'success',
                    close: true,
                    //closeBtnClass: 'class1 class2',
                    navigate: '/admnProfile'
                });
            }
            else {
                _this.flashMessage.danger('Admin login unsuccessful..', {
                    delay: 1500,
                    dangerClass: 'danger',
                    close: true
                    //closeBtnClass: 'class1 class2',
                    //navigate: ''
                });
            }
        });
    };
    AdmnloginComponent.prototype.ngOnInit = function () {
    };
    AdmnloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admnlogin',
            template: __webpack_require__("./src/app/components/admnlogin/admnlogin.component.html"),
            styles: [__webpack_require__("./src/app/components/admnlogin/admnlogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], AdmnloginComponent);
    return AdmnloginComponent;
}());



/***/ }),

/***/ "./src/app/components/admnnavbar/admnnavbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admnnavbar/admnnavbar.component.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"../../../\">\n<div class=\"main-panel\">\n  <nav class=\"navbar navbar-default navbar-fixed\" style=\"align-self: auto;\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Admin</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                \n                <!--li>\n                  <a href=\"\">\n                        <i class=\"fa fa-search\"></i>\n        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li-->\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                  <a [routerLink]=\"['/admnProfile']\">\n                      <p>{{loggedUserData.firstname}} {{loggedUserData.lastname}}</p>\n                    </a>\n                </li>\n                \n                <li>\n                    <a (click)=\"logoutAdmn()\">\n                        Log out\n                    </a>\n                </li>\n    <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/admnnavbar/admnnavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmnnavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdmnnavbarComponent = /** @class */ (function () {
    function AdmnnavbarComponent(authservice, flashMessage, routes) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.routes = routes;
    }
    AdmnnavbarComponent.prototype.logoutAdmn = function () {
        this.authservice.logoutAdmin();
        this.flashMessage.success('Admin logged out Successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/'
        });
        //this.router.navigate(['/logPage']);
    };
    AdmnnavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getAdmnProfileDet().subscribe(function (res) {
            console.log("user data : ");
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
        });
    };
    AdmnnavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admnnavbar',
            template: __webpack_require__("./src/app/components/admnnavbar/admnnavbar.component.html"),
            styles: [__webpack_require__("./src/app/components/admnnavbar/admnnavbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AdmnnavbarComponent);
    return AdmnnavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/admnprofile/admnprofile.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admnprofile/admnprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">Admin Profile</h4>\n                        </div>\n                        <div class=\"content\">\n                            <form>\n                                \n\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Username</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Company\" disabled value={{loggedAdmnData.username}}>\n                                        </div>\n                                    </div>\n                                    \n                                    \n                                </div>\n\n                                <div class=\"row\">\n                                    \n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label>Firstname</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value={{loggedAdmnData.firstname}}>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"exampleInputEmail1\">Lastname</label>\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" value={{loggedAdmnData.lastname}}>\n                                        </div>\n                                    </div>\n    \n                                </div>\n\n                                <!--div class=\"row\">\n                                    <div class=\"col-md-8\">\n                                        <div class=\"form-group\">\n                                            <label>Address</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value={{loggedUserData.address}}>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <div class=\"form-group\">\n                                            <label>Contact no</label>\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value={{loggedUserData.contact}}>\n                                        </div>\n                                    </div>\n                                </div-->                             \n                                \n                                <!--button type=\"submit\" class=\"btn btn-success btn-fill pull-right\">Update Profile</button-->\n                                <div class=\"clearfix\"></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <!--div class=\"col-md-4\">\n                    <div class=\"card card-user\">\n                        <div class=\"image\">\n                            <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"author\">\n                                 <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"asset/suserassets/img/faces/face-3.jpg\" alt=\"...\"/>\n\n                                  <h4 class=\"title\">Mike Andrew<br />\n                                     <small>michael24</small>\n                                  </h4>\n                                </a>\n                            </div>\n                            <p class=\"description text-center\"> \"Lamborghini Mercy <br>\n                                                Your chick she so thirsty <br>\n                                                I'm in that two seat Lambo\"\n                            </p>\n                        </div>\n                        <hr>\n                        <div class=\"text-center\">\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n\n                        </div>\n                    </div>\n                </div-->\n\n            </div>\n<!--app-reguserfooter></app-reguserfooter-->\n\n"

/***/ }),

/***/ "./src/app/components/admnprofile/admnprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmnprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmnprofileComponent = /** @class */ (function () {
    function AdmnprofileComponent(authService) {
        this.authService = authService;
    }
    AdmnprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAdmnProfileDet().subscribe(function (res) {
            console.log(res.data);
            _this.loggedAdmnData = res.data;
            console.log(_this.loggedAdmnData);
        });
    };
    AdmnprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admnprofile',
            template: __webpack_require__("./src/app/components/admnprofile/admnprofile.component.html"),
            styles: [__webpack_require__("./src/app/components/admnprofile/admnprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AdmnprofileComponent);
    return AdmnprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/admnsuggest/admnsuggest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admnsuggest/admnsuggest.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-6\">Book Suggestions</h4>\n\n              \n              \n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th>#</th>\n                    <th>Book Name</th>\n                    <th>Author name</th>\n                    <th>Suggested by</th>\n                  </thead>\n                  <tbody>\n                    \n                    <!--tr *ngFor=\"let item of this.bookData\"-->\n                    <tr *ngFor=\"let item of this.sgstData; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.authorname}}</td>\n                      <td>{{item.username}}</td>\n                      \n                      \n                    </tr>\n                     \n                  </tbody>\n              </table>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admnsuggest/admnsuggest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmnsuggestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmnsuggestComponent = /** @class */ (function () {
    function AdmnsuggestComponent(auth) {
        this.auth = auth;
    }
    AdmnsuggestComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    //..............get book details when page load.................
    AdmnsuggestComponent.prototype.getData = function () {
        var _this = this;
        this.auth.showSgst().subscribe(function (res) {
            // console.log(res.book_details);
            _this.sgstData = res.suggestions;
            console.log(_this.sgstData);
        });
    };
    AdmnsuggestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admnsuggest',
            template: __webpack_require__("./src/app/components/admnsuggest/admnsuggest.component.html"),
            styles: [__webpack_require__("./src/app/components/admnsuggest/admnsuggest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], AdmnsuggestComponent);
    return AdmnsuggestComponent;
}());



/***/ }),

/***/ "./src/app/components/books/books.component.css":
/***/ (function(module, exports) {

module.exports = "div.scroll {\r\n\r\n    width: 980px;\r\n    height: 450px;\r\n    overflow: scroll;\r\n  }\r\n  \r\n\r\n  div.scroll1 {\r\n\r\n    width: 880px;\r\n    height: 300px;\r\n    overflow: scroll;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<app-usersidebar></app-usersidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-6\">Book Details</h4>\n              \n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"openSuggest()\">Suggest books</button>\n              <div class=\"col-md-1\"></div>\n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"showMyRqst()\">Requested Books</button>\n              <div class=\"col-md-1\"></div>\n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n\n          <br>\n\n          <div class=\"row container\">\n              <button class=\"btn btn-default\" disabled><i class=\"fa fa-search\">\n                  <p class=\"hidden-lg hidden-md\">Search</p>\n              </i>\n                \n              </button>\n            \n            <div class=\"col-md-2\">\n              <input class=\"form-control\" name=\"searchString\" placeholder=\"Search with subject\" [(ngModel)]=\"searchString\">\n            </div>\n            <div class=\"col-md-2\">\n              <input class=\"form-control\" name=\"searchString2\" placeholder=\"Search with name\" [(ngModel)]=\"searchString2\">\n            </div>\n\n          </div>\n\n          <br>\n          <div class=\"content table-responsive table-full-width col-md-12\">\n            <div class=\"scroll\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-2\">Book Name</th>\n                    <th class=\"col-md-2\">Subject</th>\n                    <th class=\"col-md-2\">Author name</th>\n                    <th class=\"col-md-1\">ISBN No</th>\n                    <th class=\"col-md-2\">Publication</th>\n                    <th class=\"col-md-2\">Request</th>\n                  </thead>\n\n                  \n                  <tbody>\n                    <!--tr>\n                      <td>1</td>\n                      <td>Hound of the Baskerwills</td>\n                      <td>Novels</td>\n                      <td>Sir Arthur Conan Doyle</td>\n                      <td>ISBN - 3245</td>\n                      <td>5</td>\n                      <td>\n                        <button class=\"btn btn-success\">Request</button>\n                      </td>\n                    </tr-->\n\n                    <!--tr *ngFor=\"let item of this.bookData\"-->\n                    <tr *ngFor=\"let item of this.bookData | filter : 'subject' : searchString | filter : 'bookname' : searchString2; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.subject}}</td>\n                      <td>{{item.authorname}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <td>{{item.publication}}</td>\n                      <td>\n                        <button class=\"btn btn-success\" (click)=\"requestBk(item)\">Request</button>\n                      </td>\n                    </tr>\n\n                  </tbody>\n              </table>\n            </div>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<!--\n  aSSIGN BOOKS\n-->\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Request Book</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n\n\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <p>\n          Are you sure about requesting this book..\n        </p>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"cnfrmRqst()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">No</button>\n\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n<!--\n                               Show and delete my book requests\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display2}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display2}\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">My book requests</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled2()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n     <br>\n      <div class=\"content table-responsive table-full-width col-md-12\">\n        \n          <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n            <thead>\n              <th class=\"col-md-2\">#</th>\n              <th class=\"col-md-4\">Book Name</th>\n              <th class=\"col-md-3\">ISBN No</th>\n              <th class=\"col-md-3\">Delete</th>\n            </thead>\n            <tbody>\n            \n                  <tr *ngFor=\"let item of this.bookreqData; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.isbn_no}}</td>                      \n                      <td>\n                        <button class=\"btn btn-danger\" (click)=\"deleteMyBkReq(item)\">Delete Request</button>\n                      </td> \n                      \n                    </tr>              \n            </tbody>\n          </table>\n      \n    </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n<!--\n                               Suggest new books\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display3}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display3}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Suggestions</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled3()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n     <br>\n      \n\n     <div class=\"modal-body container col-md-12\">\n\n      <!-- Form body -->\n\n      <form>\n                                \n\n        <div>\n            <div>\n                <div class=\"form-group\">\n                    <label>Book name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"unm\" [(ngModel)]=\"sgst.bookname\">\n                </div>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <label>Author name</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Register no\" name=\"rgno\" [(ngModel)]=\"sgst.authorname\">\n                </div>\n            </div>\n            \n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-4\"></div>\n          <div class=\"col-md-4\">\n            \n            <button type=\"submit\" class=\"btn btn-success btn-fill pull-right\" (click)=\"sendSuggestion()\">Suggest</button>\n\n          </div>\n          <div class=\"col-md-4\"></div>\n        </div>\n\n        \n        <div class=\"clearfix\"></div>\n      </form>\n\n\n    </div>\n\n\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n"

/***/ }),

/***/ "./src/app/components/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = /** @class */ (function () {
    function BooksComponent(auth, flashMessage) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.size = 0;
        this.myarr = [];
        this.bk_rqst = {
            username: '',
            bookname: '',
            //duedate:'',
            //takendate:'',
            status: '',
            isbn_no: ''
        };
        this.gtdt = {
            username: ''
        };
        this.sgst = {
            bookname: '',
            authorname: '',
            username: ''
        };
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getData();
        this.auth.getUserProfileDet().subscribe(function (res) {
            console.log("user data : ");
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
        });
    };
    BooksComponent.prototype.getData = function () {
        var _this = this;
        this.auth.getBookDet().subscribe(function (res) {
            console.log(res.book_details);
            _this.bookData = res.book_details;
            //console.log(res.book_details[1]);
        });
    };
    BooksComponent.prototype.requestBk = function (item) {
        this.bk_rqst.username = this.loggedUserData.username;
        this.bk_rqst.bookname = item.bookname;
        this.bk_rqst.isbn_no = item.isbn_no;
        this.bk_rqst.status = "pending";
        this.display = "block";
    };
    BooksComponent.prototype.onCloseHandled = function () {
        this.display = "none";
        this.bk_rqst.bookname = '';
        this.bk_rqst.isbn_no = '';
        this.bk_rqst.status = '';
        this.bk_rqst.username = '';
    };
    BooksComponent.prototype.cnfrmRqst = function () {
        this.auth.requestBorrowbk(this.bk_rqst).subscribe(function (res) {
            console.log(res);
        });
        this.onCloseHandled();
        this.flashMessage.success('Book requested..', {
            delay: 1500,
            successClass: 'succeess',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/books'
        });
    };
    BooksComponent.prototype.showMyRqst = function () {
        var _this = this;
        this.auth.shwMyBrwReq(this.loggedUserData).subscribe(function (res) {
            _this.bookreqData = res.requests;
            console.log(_this.bookreqData);
            _this.display2 = 'block';
        });
    };
    BooksComponent.prototype.onCloseHandled2 = function () {
        this.display2 = 'none';
    };
    BooksComponent.prototype.deleteMyBkReq = function (dltitem) {
        this.auth.deleteBrwReq(dltitem).subscribe(function (res) {
            console.log(res);
        });
        this.flashMessage.success('Book request deleted successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/books'
        });
        this.onCloseHandled2();
    };
    BooksComponent.prototype.openSuggest = function () {
        this.display3 = "block";
    };
    BooksComponent.prototype.onCloseHandled3 = function () {
        this.display3 = 'none';
    };
    BooksComponent.prototype.sendSuggestion = function () {
        this.sgst.username = this.loggedUserData.username;
        this.auth.sendSgst(this.sgst).subscribe(function (res) {
            console.log(res);
        });
        this.onCloseHandled();
        this.flashMessage.success('Suggestion sent..', {
            delay: 1500,
            successClass: 'succeess',
            close: true
            //closeBtnClass: 'class1 class2',
            //navigate: ''
        });
        this.onCloseHandled3();
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-books',
            template: __webpack_require__("./src/app/components/books/books.component.html"),
            styles: [__webpack_require__("./src/app/components/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n  <div style=\"text-align:center\">\n    \n    <img width=\"300\" alt=\"Angular Logo\" src=\"assets/ucsc.png\">\n    \n    <h1>\n      University of Colombo School of Computing\n    </h1>\n\n    <h2>\n      Welcome to the Library Management System\n    </h2>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<h1 style=\"text-align: center\">\n  Login Forum\n</h1>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n\n    \n    <!--form (ngSubmit)=\"logingData(form1)\" #form1=\"ngForm\"-->\n    <form (ngSubmit)=\"logingData()\" #form1=\"ngForm\">\n      <div class=\"form-group\">\n        <!--label for=\"exampleInputUsername\">Username</label-->\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"unm\" [(ngModel)] = \"userlogdet.username\" required=true>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pwd\" [(ngModel)] = \"userlogdet.password\" required=true>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Login</button>\n    </form>\n  </div>\n\n  <div class=\"col-md-2\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(authservice, flashMessage) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.userlogdet = {
            username: '',
            password: ''
        };
    }
    LoginpageComponent.prototype.logingData = function () {
        //console.log(this.userlogdet);
        //console.log(frmData);
        var _this = this;
        var userlgdt = {
            username: this.userlogdet.username,
            password: this.userlogdet.password
        };
        console.log(userlgdt);
        this.authservice.logingRegUser(userlgdt).subscribe(function (res) {
            console.log(res.state);
            console.log(res.token);
            console.log();
            console.log(res);
            if (res.state) {
                _this.authservice.storeData(res.token, res.user);
                _this.flashMessage.success('User logged in Successfully..', {
                    delay: 1500,
                    successClass: 'success',
                    close: true,
                    //closeBtnClass: 'class1 class2',
                    navigate: '/userProfile'
                });
            }
            else {
                _this.flashMessage.danger('User login unsuccessful..', {
                    delay: 1500,
                    dangerClass: 'danger',
                    close: true
                    //closeBtnClass: 'class1 class2',
                    //navigate: ''
                });
            }
        });
    };
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__("./src/app/components/loginpage/loginpage.component.html"),
            styles: [__webpack_require__("./src/app/components/loginpage/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/components/managebrrws/managebrrws.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ndiv.scroll {\r\n\r\n    width: 900px;\r\n    height: 350px;\r\n    overflow: scroll;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/managebrrws/managebrrws.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-5\">Current borrow Details</h4>\n\n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"dwnload()\">\n                Generate Report\n              </button>\n\n              <div class=\"col-md-1\"></div>\n\n              <button class=\"btn btn-info btn-filled col-md-3\" (click)=\"brwRqstDetails()\">Borrow request details</button>\n\n              <div class=\"col-md-1\"></div>              \n\n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    \n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-1\">Username</th>\n\n                    <th class=\"col-md-3\">Book Name</th>\n                    <th class=\"col-md-2\">ISBN No</th>\n                    <th class=\"col-md-1\">Taken Date</th>\n                    <th class=\"col-md-1\">Due Date</th>\n                    <!--th class=\"col-md-1\">No of copies</th-->\n                    <th class=\"col-md-3\">Action</th>\n                  </thead>\n                  <tbody>\n                    <!--tr>\n                      <td>1</td>\n                      <td>15000011</td>\n                      <td>Hound of the Baskerwills</td>\n                      <td>ISBN - 3245</td>\n                      <td>2018 - 06 - 05</td>\n                      <td>2018 - 06 - 12</td>\n                      <td>\n                        <button class=\"btn btn-success\">Resolved</button>\n                        <button class=\"btn btn-success\">Edit</button>\n\n                      </td>\n                    </tr-->\n\n                    <tr *ngFor=\"let item of this.brwdet; index as i\">\n                      <td>{{i+1}}</td>\n                      <!--td>{{item._id}}</td-->\n                      <td>{{item.username}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <td>{{item.takendate}}</td>\n                      <td>{{item.duedate}}</td>\n                      <td>\n                        <button class=\"btn btn-success\" (click)=\"rslvBorrw(item)\">Resolve</button>\n                        <button class=\"btn btn-success\" (click)=\"editBrwDet(item)\">Edit</button>\n                      </td>\n                      \n                    </tr>\n\n                    <!--tr *ngFor=\"let item of this.bookData\"\n                    <tr *ngFor=\"let item of this.bookData\">\n                      <td>{{item._id}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.subject}}</td>\n                      <td>{{item.authorname}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <td>{{item.copies}}</td>\n                      <td>\n                        <button class=\"btn btn-success\" (click)=\"requestBk(item)\">Request</button>\n                      </td>\n                    </tr>-->\n                     \n                  </tbody>\n              </table>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n\n\n<!--\n                               Manage user's borrow details by admin\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Borrow requests</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"oncloseEdit()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n     <br>\n      <div class=\"content table-responsive table-full-width col-md-12\">\n        <div class=\"scroll\">\n          <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n              <thead>\n                <th class=\"col-md-1\">#</th>\n                <!--th class=\"col-md-2\">Request no</th-->\n                <th class=\"col-md-2\">Username</th>\n                <th class=\"col-md-4\">Book Name</th>\n                <th class=\"col-md-2\">ISBN No</th>\n                <th class=\"col-md-3\">Action</th>\n              </thead>\n              <tbody>\n                \n                    <tr *ngFor=\"let item of this.borrwrqstdet; index as i\">\n                        <td>{{i+1}}</td>\n                        <!--td>{{item._id}}</td-->\n                        <td>{{item.username}}</td>\n                        <td>{{item.bookname}}</td>\n                        <td>{{item.isbn_no}}</td>                      \n                        <td>\n                          <button class=\"btn btn-success\" (click)=\"reslvBkRqst(item)\">Approve</button>\n                          <button class=\"btn btn-danger\" (click)=\"deleteBkRequest(item)\">Delete</button>\n                        </td> \n                        \n                      </tr>              \n              </tbody>\n          </table>\n      </div>\n    </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n<!--\n  \n                              FORM FOR SETTING BOOK REQUEST\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display2}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display2}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Set Borrow details</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled2()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Username</label>\n              <input type=\"text\" class=\"form-control\" name=\"bnm\" placeholder=\"Book name\" [(ngModel)] = \"borrowdet.username\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Bookname</label>\n                <input type=\"text\" class=\"form-control\" name=\"unm\" placeholder=\"Username\" [(ngModel)] = \"borrowdet.bookname\" required>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">ISBN Number</label>\n              <input type=\"text\" class=\"form-control\" name=\"mbno\" placeholder=\"ISBN no\" [(ngModel)] = \"borrowdet.isbn_no\" required>\n            </div>\n            <!--div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Taken Date</label>\n              <input type=\"date\" class=\"form-control\" name=\"tno\" placeholder=\"Subject\" [(ngModel)] = \"borrowdet.takendate\" required>\n            </div-->\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Due Date</label>\n              <input type=\"date\" class=\"form-control\" name=\"tno\" placeholder=\"no of copies\" [(ngModel)] = \"borrowdet.duedate\" min=this.CurDate required>\n            </div>\n             \n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-4\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"setBorrow()\">Set Borrow</button>\n            </div>\n            <div class=\"col-md-4\"></div>\n            \n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n<!--\n  \n                              FORM FOR SETTING BOOK REQUEST\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display3}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display3}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Edit Borrow details</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled3()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Borrow Id</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"bnm\" placeholder=\"BorrowId\" [(ngModel)] = \"updt_brrwdet._id\" required>\n            </div>\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Due Date</label>\n              <input type=\"date\" class=\"form-control\" name=\"tno\" placeholder=\"due  date\" [(ngModel)] = \"updt_brrwdet.duedate\" min=this.CurDate required>\n            </div>\n             \n            \n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"updtBorrow()\">Update Borrow</button>\n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n\n\n<!--\n  \n                              Resolve borrow\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display4}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display4}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Resolve Borrow</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled4()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">borrowId</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"bnm\" placeholder=\"Book name\" [(ngModel)] = \"rslv_borrowdet.borw_id\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Username</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"unm\" placeholder=\"Username\" [(ngModel)] = \"rslv_borrowdet.username\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Bookname</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"tnm\" placeholder=\"Username\" [(ngModel)] = \"rslv_borrowdet.bookname\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">ISBN Number</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"mbno\" placeholder=\"ISBN no\" [(ngModel)] = \"rslv_borrowdet.isbn_no\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Taken Date</label>\n              <input type=\"date\" class=\"form-control\" disabled name=\"tn\" placeholder=\"Subject\" [(ngModel)] = \"rslv_borrowdet.takendate\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Due Date</label>\n              <input type=\"date\" class=\"form-control\" disabled name=\"tno\" placeholder=\"no of copies\" [(ngModel)] = \"rslv_borrowdet.duedate\" min=this.CurDate required>\n            </div>\n             \n            <div class=\"row\">\n\n              <div class=\"col-md-4\"></div>\n              <div class=\"col-md-4\">\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"checkFines()\">Check Fines..</button>\n              </div>\n              <div class=\"col-md-4\"></div>\n              <!--div class=\"col-md-3\">\n                  <button type=\"submit\" class=\"btn btn-success\">Check Fines..</button>\n              </div-->\n\n            </div>\n            \n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n<!--\n  \n                              Fines and Finish rslv borrow\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display5}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display5}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Resolve Borrow</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        <button type=\"button col-md-1\" class=\"Close\" aria-label=\"Close \" (click)=\"onCloseHandled5()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <form>\n          <fieldset>\n\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">borrowId</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"bnm\" placeholder=\"Book name\" [(ngModel)] = \"rslv_borrowdet.borw_id\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Username</label>\n              <input type=\"text\" class=\"form-control\" disabled name=\"unm\" placeholder=\"Username\" [(ngModel)] = \"rslv_borrowdet.username\" required>\n            </div>\n            \n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Due Date</label>\n              <input type=\"date\" class=\"form-control\" disabled name=\"tno\" placeholder=\"no of copies\" [(ngModel)] = \"rslv_borrowdet.duedate\" required>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Fine (Rs.)</label>\n                <input type=\"text\" class=\"form-control\" disabled name=\"pnlty\" placeholder=\"no of copies\" [(ngModel)] = \"rslv_borrowdet.fine\">\n              </div>\n\n\n             \n            <div class=\"row\">\n\n              <div class=\"col-md-4\"></div>\n              <div class=\"col-md-4\">\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"resolveIt()\">Resolve It</button>\n              </div>\n              <div class=\"col-md-4\"></div>\n              <!--div class=\"col-md-3\">\n                  <button type=\"submit\" class=\"btn btn-success\">Check Fines..</button>\n              </div-->\n\n            </div>\n            \n                  \n                                                       \n          </fieldset>\n        </form>\n\n      </div>\n\n      <div class=\"modal-footer\">\n        <!--button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandled()\" >Close</button-->\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->"

/***/ }),

/***/ "./src/app/components/managebrrws/managebrrws.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagebrrwsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__ = __webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagebrrwsComponent = /** @class */ (function () {
    function ManagebrrwsComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.status = false;
        this.borrowdet = {
            username: '',
            bookname: '',
            isbn_no: '',
            takendate: '',
            duedate: ''
        };
        this.rslv_borrowdet = {
            borw_id: '',
            username: '',
            bookname: '',
            isbn_no: '',
            takendate: '',
            returneddate: '',
            duedate: '',
            fine: '',
            status: 'not paid'
        };
        this.updt_brrwdet = {
            _id: '',
            duedate: ''
        };
    }
    ManagebrrwsComponent.prototype.ngOnInit = function () {
        this.getBkReqData();
    };
    ManagebrrwsComponent.prototype.brwRqstDetails = function () {
        this.display = 'block';
    };
    ManagebrrwsComponent.prototype.oncloseEdit = function () {
        this.display = 'none';
    };
    ManagebrrwsComponent.prototype.showBkrqst = function () {
        var _this = this;
        this.authService.getAllBookRequest().subscribe(function (res) {
            console.log(res.req_details);
            _this.borrwrqstdet = res.req_details;
            console.log(_this.borrwrqstdet);
        });
    };
    ManagebrrwsComponent.prototype.reslvBkRqst = function (brw_req) {
        var d = new Date();
        var m = d.getMonth(), month = '', dt = '';
        this.CurDate = d.getFullYear() + '-' + month + '-' + d.getDate();
        if ((m + 1) < 10) {
            month = "0" + (m + 1).toString();
        }
        else {
            month = (m + 1).toString();
        }
        if ((d.getDate()) < 10) {
            dt = "0" + (d.getDate()).toString();
        }
        else {
            dt = (d.getDate()).toString();
        }
        var cur_date = d.getFullYear() + '-' + month + '-' + dt;
        this.borrowdet.bookname = brw_req.bookname;
        this.borrowdet.duedate = brw_req.duedate;
        this.borrowdet.isbn_no = brw_req.isbn_no;
        this.borrowdet.takendate = cur_date;
        this.borrowdet.username = brw_req.username;
        console.log(this.borrowdet);
        this.oncloseEdit();
        this.showCnfrmBkRequest(brw_req);
    };
    ManagebrrwsComponent.prototype.onCloseHandled2 = function () {
        this.display2 = 'none';
    };
    ManagebrrwsComponent.prototype.showCnfrmBkRequest = function (brw_req) {
        this.display2 = 'block';
        this.brwrqstId = brw_req;
    };
    ManagebrrwsComponent.prototype.setBorrow = function () {
        this.status = true;
        console.log(this.borrowdet);
        //insert into borrowed det table 
        this.authService.setBorrowDet(this.borrowdet).subscribe(function (res) {
            console.log(res);
        });
        //delete from bk request table
        this.deleteBkRequest(this.brwrqstId);
        this.flashMessage.success('Book borrowed successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/admnbook'
        });
        this.onCloseHandled2();
    };
    ManagebrrwsComponent.prototype.deleteBkRequest = function (dltitem) {
        this.authService.deleteBrwReq(dltitem).subscribe(function (res) {
            console.log(res);
        });
        this.flashMessage.success('Book request deleted successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/'
        });
    };
    ManagebrrwsComponent.prototype.getBkReqData = function () {
        var _this = this;
        this.showBkrqst();
        this.authService.getBookBorrowDet().subscribe(function (res) {
            console.log(res);
            _this.brwdet = res.Borrow_details;
            //console.log(res.book_details[1]);
        });
    };
    ManagebrrwsComponent.prototype.editBrwDet = function (item) {
        this.updt_brrwdet._id = item._id;
        this.updt_brrwdet.duedate = item.duedate;
        this.display3 = "block";
    };
    ManagebrrwsComponent.prototype.onCloseHandled3 = function () {
        this.display3 = 'none';
    };
    ManagebrrwsComponent.prototype.updtBorrow = function () {
        var _this = this;
        console.log(this.updt_brrwdet);
        this.authService.editBorrowdet(this.updt_brrwdet).subscribe(function (res) {
            _this.flashMessage.success('Borrow details edited Successfully..', {
                delay: 1500,
                successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/'
            });
        });
        this.onCloseHandled3();
    };
    ManagebrrwsComponent.prototype.rslvBorrw = function (itm) {
        var today = new Date();
        var today_dy = today.getDate(), today_mnt = (today.getMonth() + 1), today_yr = today.getFullYear();
        var due = new Date(itm.duedate);
        var due_dy = due.getDate(), due_mnt = (due.getMonth() + 1), due_yr = due.getFullYear();
        //var today_dy = 1, today_mnt = 6, today_yr = 2018;
        //var due_dy = 30, due_mnt = 9, due_yr = 2015;
        var finalgap = 0;
        var gapday = 0, gapmnt = 0, gapyr = 0;
        if (today_dy >= due_dy) {
            gapday = today_dy - due_dy;
            if (today_mnt >= due_mnt) {
                gapmnt = (today_mnt - due_mnt);
                if (today_yr >= due_yr) {
                    gapyr = (today_yr - due_yr);
                }
                else {
                    gapyr = 0;
                    gapmnt = 0;
                    gapday = 0;
                    finalgap = -1;
                }
            }
            else {
                gapmnt = (12 + today_mnt - due_mnt);
                today_yr = today_yr - 1;
                if (today_yr >= due_yr) {
                    gapyr = (today_yr - due_yr);
                }
                else {
                    gapyr = 0;
                    gapmnt = 0;
                    gapday = 0;
                    finalgap = -1;
                }
            }
        }
        else {
            gapday = 30 + today_dy - due_dy;
            today_mnt = today_mnt - 1;
            if (today_mnt >= due_mnt) {
                gapmnt = (today_mnt - due_mnt);
                if (today_yr >= due_yr) {
                    gapyr = (today_yr - due_yr);
                }
                else {
                    gapyr = 0;
                    gapmnt = 0;
                    gapday = 0;
                    finalgap = -1;
                }
            }
            else {
                gapmnt = (12 + today_mnt - due_mnt);
                today_yr = today_yr - 1;
                if (today_yr >= due_yr) {
                    gapyr = (today_yr - due_yr);
                }
                else {
                    gapyr = 0;
                    gapmnt = 0;
                    gapday = 0;
                    finalgap = -1;
                }
            }
        }
        if (finalgap == -1) {
            finalgap = 0;
        }
        else {
            finalgap = gapday + (gapmnt * 30) + (gapyr * 365);
        }
        console.log("gap " + finalgap);
        console.log("gapday " + gapday + " gapmnt " + gapmnt + " gapyr " + gapyr);
        var month = '', dt = '';
        if ((today_mnt + 1) < 10) {
            month = "0" + (today_mnt + 1).toString();
        }
        else {
            month = (today_mnt + 1).toString();
        }
        if (today_dy < 10) {
            dt = "0" + today_dy.toString();
        }
        else {
            dt = today_dy.toString();
        }
        this.rslv_borrowdet.borw_id = itm._id;
        this.rslv_borrowdet.username = itm.username;
        this.rslv_borrowdet.bookname = itm.bookname;
        this.rslv_borrowdet.isbn_no = itm.isbn_no;
        this.rslv_borrowdet.takendate = itm.takendate;
        this.rslv_borrowdet.duedate = itm.duedate;
        this.rslv_borrowdet.returneddate = (today.getFullYear()).toString() + "-" + month + "-" + dt;
        this.rslv_borrowdet.fine = (finalgap * 5).toString() + ".00";
        this.rslv_borrowdet.status = "not paid";
        if (finalgap == 0) {
            this.rslv_borrowdet.status = "zero charge";
        }
        this.display4 = "block";
    };
    ManagebrrwsComponent.prototype.onCloseHandled4 = function () {
        this.display4 = 'none';
    };
    ManagebrrwsComponent.prototype.checkFines = function () {
        this.onCloseHandled4();
        this.display5 = "block";
    };
    ManagebrrwsComponent.prototype.onCloseHandled5 = function () {
        this.display5 = 'none';
    };
    ManagebrrwsComponent.prototype.resolveIt = function () {
        var _this = this;
        console.log(this.rslv_borrowdet);
        this.authService.addRslvdBrw(this.rslv_borrowdet).subscribe(function (res) {
            //console.log(res);
            _this.deleteFromBorrows(_this.rslv_borrowdet);
        });
        this.onCloseHandled5();
    };
    ManagebrrwsComponent.prototype.deleteFromBorrows = function (rslv) {
        this.authService.deleteBrwDet(this.rslv_borrowdet).subscribe(function (res) {
            console.log(res);
        });
        this.flashMessage.success('Borrowed details resolved Successfully..', {
            delay: 1500,
            //successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/'
        });
    };
    ManagebrrwsComponent.prototype.dwnload = function () {
        var today = new Date();
        var today_dy = today.getDate(), today_mnt = (today.getMonth() + 1), today_yr = today.getFullYear();
        var date = today_yr + "_" + today_mnt + "_" + today_dy;
        var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
        //var datenm = today_yr + "" + today_mnt + "-" + today_dy;
        var rows = [];
        var i = 0;
        for (var _i = 0, _a = this.brwdet; _i < _a.length; _i++) {
            var x = _a[_i];
            var insiderow = [];
            insiderow.push(this.brwdet[i].username);
            insiderow.push(this.brwdet[i].bookname);
            insiderow.push(this.brwdet[i].isbn_no);
            insiderow.push(this.brwdet[i].takendate);
            insiderow.push(this.brwdet[i].duedate);
            i = i + 1;
            rows.push(insiderow);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__({ orientation: 'landscape' });
        //var cols = ["paying id", "borrow id", "username", "fine"];
        var cols = ["Username", "Book Name", "ISBN No", "Taken Date", "Due Date"];
        doc.autoTable(cols, rows);
        doc.text(10, 10, "Report on Borrowed Details: " + date1);
        doc.save('Borrow_Details' + date + '.pdf');
    };
    ManagebrrwsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-managebrrws',
            template: __webpack_require__("./src/app/components/managebrrws/managebrrws.component.html"),
            styles: [__webpack_require__("./src/app/components/managebrrws/managebrrws.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], ManagebrrwsComponent);
    return ManagebrrwsComponent;
}());



/***/ }),

/***/ "./src/app/components/manageusers/manageusers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manageusers/manageusers.component.html":
/***/ (function(module, exports) {

module.exports = "<app-adminsidebar></app-adminsidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-8\">User Details</h4>\n              <button class=\"btn btn-info btn-filled col-md-2\" (click)=\"dwnload()\">\n                Generate Report\n              </button>\n              \n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th>#</th>\n                    <th class=\"col-md-1\">firstname</th>\n                    <th class=\"col-md-1\">lastname</th>\n                    <th class=\"col-md-2\">Username</th>\n                    <th class=\"col-md-2\">Reg no</th>                    \n                    <th class=\"col-md-2\">Contact</th>\n                    <th class=\"col-md-2\">Delete</th>\n                  </thead>\n                  <tbody>\n\n                      <tr *ngFor=\"let item of this.userData; index as i\">\n                          <td>{{i+1}}</td>\n                          <td>{{item.firstname}}</td>\n                          <td>{{item.lastname}}</td>\n                          <td>{{item.username}}</td>\n                          <td>{{item.regno}}</td>\n                          <td>{{item.contact}}</td>\n                          <td>\n                              <!--button class=\"btn btn-info\" (click)=\"openEdtBk(item)\">Edit</button-->\n                              <button class=\"btn btn-danger\" (click)=\"shwDlt(item)\">Delete</button>\n                          </td>\n                          \n                        </tr>\n                    \n                    <!--tr *ngFor=\"let item of this.bookData\"-->\n                    <!--tr *ngFor=\"let item of this.bookData\">\n                      <td>{{item._id}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.subject}}</td>\n                      <td>{{item.authorname}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <td>\n                          <button class=\"btn btn-info\" (click)=\"openEdtBk(item)\">Edit</button>\n                          <button class=\"btn btn-danger\" (click)=\"shwDlt()\">Delete</button>\n                      </td>\n                      \n                    </tr-->\n                     \n                  </tbody>\n              </table>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n\n<!--\n                               Delete books\n-->\n\n<div class=\"backdrop\" [ngStyle]=\"{'display':display}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header row\">\n        <h4 class=\"modal-title col-md-11\">Delete User</h4>\n        <!--button type=\"button col-md-1\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button-->\n        \n          \n      </div>\n      <div class=\"modal-body container col-md-12\">\n\n        <!-- Form body -->\n\n        <p>\n          Are you sure about deleting this user\n        </p>\n        \n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onCloseHandled()\">No</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteIt()\">Yes</button>\n        \n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal !-->\n\n"

/***/ }),

/***/ "./src/app/components/manageusers/manageusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageusersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__ = __webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageusersComponent = /** @class */ (function () {
    function ManageusersComponent(auth, flashMessage) {
        this.auth = auth;
        this.flashMessage = flashMessage;
    }
    ManageusersComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    ManageusersComponent.prototype.getUserData = function () {
        var _this = this;
        this.auth.getallUserDet().subscribe(function (res) {
            console.log(res);
            _this.userData = res.user_details;
            //console.log(res.book_details[1]);
        });
    };
    ManageusersComponent.prototype.shwDlt = function (item) {
        this.dltItm = item;
        this.display = "block";
    };
    ManageusersComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    ManageusersComponent.prototype.deleteIt = function () {
        var _this = this;
        this.auth.deleteUser(this.dltItm).subscribe(function (res) {
            _this.flashMessage.success('User deleted Successfully..', {
                delay: 1500,
                //successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/mngborrow'
            });
            /** }else{
               this.flashMessage.danger('User deletion failed..', {
                 delay: 1500,
                // successClass: 'success',
                 close: true,
                 //closeBtnClass: 'class1 class2',
                 navigate: '/mnguser'
               });
             }**/
        });
        this.onCloseHandled();
    };
    ManageusersComponent.prototype.dwnload = function () {
        var today = new Date();
        var today_dy = today.getDate(), today_mnt = (today.getMonth() + 1), today_yr = today.getFullYear();
        var date1 = today_yr + "-" + today_mnt + "-" + today_dy;
        var date = today_yr + "_" + today_mnt + "_" + today_dy;
        //var datenm = today_yr + "" + today_mnt + "-" + today_dy;
        var rows = [];
        var i = 0;
        for (var _i = 0, _a = this.userData; _i < _a.length; _i++) {
            var x = _a[_i];
            var insiderow = [];
            insiderow.push(this.userData[i].firstname);
            insiderow.push(this.userData[i].lastname);
            insiderow.push(this.userData[i].username);
            insiderow.push(this.userData[i].regno);
            insiderow.push(this.userData[i].contact);
            i = i + 1;
            rows.push(insiderow);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__({ orientation: 'landscape' });
        //var cols = ["paying id", "borrow id", "username", "fine"];
        var cols = ["firstname", "lastname", "Username", "Reg no", "Contact"];
        doc.autoTable(cols, rows);
        doc.text(10, 10, "Report on User Details: " + date1);
        doc.save('UserDetails' + date + '.pdf');
    };
    ManageusersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manageusers',
            template: __webpack_require__("./src/app/components/manageusers/manageusers.component.html"),
            styles: [__webpack_require__("./src/app/components/manageusers/manageusers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], ManageusersComponent);
    return ManageusersComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\">UCSC</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav\">\n          \n        </ul>\n        \n        <ul class=\"nav navbar-nav navbar-right\">\n          <!--<li><a [routerLink]=\"['']\">About Us</a></li>\n          <li><a [routerLink]=\"['']\">Contact Us</a></li-->\n          <li><a [routerLink]=\"['/regUser']\">User Registration</a></li>\n          <li>\n            <a [routerLink]=\"['/logPage']\">Login</a>\n          </li>\n                   \n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Router} from '@angular/router';



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(
        //private router:Router,
        authservice, flashMessage, routes
        //  private jwthlper:JwtHelperService
    ) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.routes = routes;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getUserProfileDet().subscribe(function (res) {
            console.log(res.data);
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
            if (_this.loggedUserData) {
                _this.routes.navigate(['/userProfile']);
            }
        });
        this.authservice.getAdmnProfileDet().subscribe(function (res) {
            console.log(res.data);
            _this.loggedAdmnData = res.data;
            console.log(_this.loggedAdmnData);
            if (_this.loggedAdmnData) {
                _this.routes.navigate(['/admnProfile']);
            }
        });
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.authservice.logoutUser();
        this.flashMessage.success('User logged out Successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/'
        });
        //this.router.navigate(['/logPage']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]
            //  private jwthlper:JwtHelperService
        ])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/reguserfooter/reguserfooter.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reguserfooter/reguserfooter.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--/div>\n</div-->\n\n\n<html>\n  <head>\n      <title></title>\n      <base href=\"../../../\">\n  </head>\n  \n  <body>\n    \n  </body>\n\n  \n\n\n<!--   Core JS Files   -->\n<script src=\"assets/userassets/js/jquery.3.2.1.min.js\" type=\"text/javascript\"></script>\n<script src=\"assets/userassets/js/bootstrap.min.js\" type=\"text/javascript\"></script>\n\n<!--  Charts Plugin -->\n<script src=\"assets/userassets/js/chartist.min.js\"></script>\n\n<!--  Notifications Plugin    -->\n<script src=\"assets/userassets/js/bootstrap-notify.js\"></script>\n\n<!--  Google Maps Plugin    -->\n<script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"></script>\n\n<!-- Light Bootstrap Table Core javascript and methods for Demo purpose -->\n<script src=\"assets/userassets/js/light-bootstrap-dashboard.js?v=1.4.0\"></script>\n\n<!-- Light Bootstrap Table DEMO methods, don't include it in your project! -->\n<script src=\"assets/userassets/js/demo.js\"></script>\n\n</html>"

/***/ }),

/***/ "./src/app/components/reguserfooter/reguserfooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReguserfooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReguserfooterComponent = /** @class */ (function () {
    function ReguserfooterComponent() {
    }
    ReguserfooterComponent.prototype.ngOnInit = function () {
    };
    ReguserfooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reguserfooter',
            template: __webpack_require__("./src/app/components/reguserfooter/reguserfooter.component.html"),
            styles: [__webpack_require__("./src/app/components/reguserfooter/reguserfooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReguserfooterComponent);
    return ReguserfooterComponent;
}());



/***/ }),

/***/ "./src/app/components/reguserheader/reguserheader.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reguserheader/reguserheader.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n\n  \n\n  <!--link rel=\"icon\" type=\"image/png\" href=\"assets/userassets/img/favicon.ico\"-->\n  \t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n\n  <title>Light Bootstrap Dashboard by Creative Tim</title>\n  \n  <base href=\"../../../\">\n\n\t<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n\n\n    <!-- Bootstrap core CSS     -->\n    <link href=\"assets/userassets/css/bootstrap.min.css\" rel=\"stylesheet\" />\n\n    <!-- Animation library for notifications   -->\n    <link href=\"assets/userassets/css/animate.min.css\" rel=\"stylesheet\"/>\n\n    <!--  Light Bootstrap Table core CSS    -->\n    <link href=\"assets/userassets/css/light-bootstrap-dashboard.css\" rel=\"stylesheet\"/>\n\n\n    <!--  CSS for Demo Purpose, don't include it in your project     -->\n    <link href=\"assets/userassets/css/demo.css\" rel=\"stylesheet\" />\n\n\n    <!--     Fonts and icons     -->\n    <link href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>\n    <link href=\"assets/userassets/css/pe-icon-7-stroke.css\" rel=\"stylesheet\" />\n\n</head>\n<body>\n\n  <div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"purple\" data-image=\"assets/userassets/img/sidebar-5.jpg\">\n\n    <!--   you can change the color of the sidebar using: data-color=\"blue | azure | green | orange | red | purple\" -->\n\n\n    \t<div class=\"sidebar-wrapper\">\n            <div class=\"logo\">\n                UCSC Library\n            </div>\n\n            <ul class=\"nav\">\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-graph\"></i>\n                        <p>Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a href=\"\">\n                        <i class=\"pe-7s-user\"></i>\n                        <p>User Profile</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-note2\"></i>\n                        <p>Table List</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-news-paper\"></i>\n                        <p>Typography</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-science\"></i>\n                        <p>Icons</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-map-marker\"></i>\n                        <p>Maps</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <i class=\"pe-7s-bell\"></i>\n                        <p>Notifications</p>\n                    </a>\n                </li>\n\t\t\t\t<li class=\"active-pro\">\n                    <a href=\"\">\n                        <i class=\"pe-7s-rocket\"></i>\n                        <p>Upgrade to PRO</p>\n                    </a>\n                </li>\n            </ul>\n    \t</div>\n    </div>\n\n    <div class=\"main-panel\">\n\t\t<nav class=\"navbar navbar-default navbar-fixed\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" href=\"#\">User</a>\n                </div>\n                <div class=\"collapse navbar-collapse\">\n                    <ul class=\"nav navbar-nav navbar-left\">\n                        <li>\n                            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                <i class=\"fa fa-dashboard\"></i>\n\t\t\t\t\t\t\t\t<p class=\"hidden-lg hidden-md\">Dashboard</p>\n                            </a>\n                        </li>\n                        <li class=\"dropdown\">\n                              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                    <i class=\"fa fa-globe\"></i>\n                                    <b class=\"caret hidden-sm hidden-xs\"></b>\n                                    <span class=\"notification hidden-sm hidden-xs\">5</span>\n\t\t\t\t\t\t\t\t\t<p class=\"hidden-lg hidden-md\">\n\t\t\t\t\t\t\t\t\t\t5 Notifications\n\t\t\t\t\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t\t\t\t\t</p>\n                              </a>\n                              <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Notification 1</a></li>\n                                <li><a href=\"#\">Notification 2</a></li>\n                                <li><a href=\"#\">Notification 3</a></li>\n                                <li><a href=\"#\">Notification 4</a></li>\n                                <li><a href=\"#\">Another notification</a></li>\n                              </ul>\n                        </li>\n                        <li>\n                           <a href=\"\">\n                                <i class=\"fa fa-search\"></i>\n\t\t\t\t\t\t\t\t<p class=\"hidden-lg hidden-md\">Search</p>\n                            </a>\n                        </li>\n                    </ul>\n\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li>\n                           <a href=\"\">\n                               <p>Account</p>\n                            </a>\n                        </li>\n                        <li class=\"dropdown\">\n                              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                    <p>\n\t\t\t\t\t\t\t\t\t\tDropdown\n\t\t\t\t\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t\t\t\t\t</p>\n\n                              </a>\n                              <!--ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                              </ul-->\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                <p>Log out</p>\n                            </a>\n                        </li>\n\t\t\t\t\t\t<li class=\"separator hidden-lg hidden-md\"></li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n\n       </div>\n    </div>\n</body>\n</html>\n\n<!--/div></div>\n\n</body>\n\n  <script src=\"assets/userassets/js/jquery.3.2.1.min.js\" type=\"text/javascript\"></script>\n  <script src=\"assets/userassets/js/bootstrap.min.js\" type=\"text/javascript\"></script>\n\n  \n  <script src=\"assets/userassets/js/chartist.min.js\"></script>\n\n\n  <script src=\"assets/userassets/js/bootstrap-notify.js\"></script>\n\n  \n  <script type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"></script>\n\n\n  <script src=\"assets/userassets/js/light-bootstrap-dashboard.js?v=1.4.0\"></script>\n\n  <script src=\"assets/userassets/js/demo.js\"></script>\n\n</html-->\n\n"

/***/ }),

/***/ "./src/app/components/reguserheader/reguserheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReguserheaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReguserheaderComponent = /** @class */ (function () {
    function ReguserheaderComponent() {
    }
    ReguserheaderComponent.prototype.ngOnInit = function () {
    };
    ReguserheaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reguserheader',
            template: __webpack_require__("./src/app/components/reguserheader/reguserheader.component.html"),
            styles: [__webpack_require__("./src/app/components/reguserheader/reguserheader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReguserheaderComponent);
    return ReguserheaderComponent;
}());



/***/ }),

/***/ "./src/app/components/reguserprofile/reguserprofile.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/reguserprofile/reguserprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-usersidebar></app-usersidebar>\r\n\r\n<div class=\"content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-9\">\r\n                    <div class=\"card\">\r\n                        <div class=\"header\">\r\n                            <h4 class=\"title\">Registered User Profile</h4>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <form >\r\n                                \r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" disabled name=\"unm\" value={{loggedUserData.username}}>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Registration no</label>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Register no\" disabled name=\"rgno\" value={{loggedUserData.regno}}>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    \r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Firstname</label>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Firstname\" name=\"fnm\" [(ngModel)] = \"userprofdet.firstname\" value={{loggedUserData.firstname}}>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"exampleInputEmail1\">Lastname</label>\r\n                                            <input type=\"email\" class=\"form-control\" placeholder=\"Lastname\" name=\"lnm\" [(ngModel)] = \"userprofdet.lastname\" value={{loggedUserData.lastname}}>\r\n                                        </div>\r\n                                    </div>\r\n    \r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Address</label>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" name=\"addr\" [(ngModel)] = \"userprofdet.address\" value={{loggedUserData.address}}>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Contact no</label>\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"07X XXXXXXX\" name=\"cntct\" [(ngModel)] = \"userprofdet.contact\" value={{loggedUserData.contact}}>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                             \r\n                                \r\n                                <!--button type=\"submit\" class=\"btn btn-success btn-fill pull-right\" (click)=\"updtProf()\">Update Profile</button-->\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--div class=\"col-md-4\">\r\n                    <div class=\"card card-user\">\r\n                        <div class=\"image\">\r\n                            <img src=\"https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400\" alt=\"...\"/>\r\n                        </div>\r\n                        <div class=\"content\">\r\n                            <div class=\"author\">\r\n                                 <a href=\"#\">\r\n                                <img class=\"avatar border-gray\" src=\"asset/suserassets/img/faces/face-3.jpg\" alt=\"...\"/>\r\n\r\n                                  <h4 class=\"title\">Mike Andrew<br />\r\n                                     <small>michael24</small>\r\n                                  </h4>\r\n                                </a>\r\n                            </div>\r\n                            <p class=\"description text-center\"> \"Lamborghini Mercy <br>\r\n                                                Your chick she so thirsty <br>\r\n                                                I'm in that two seat Lambo\"\r\n                            </p>\r\n                        </div>\r\n                        <hr>\r\n                        <div class=\"text-center\">\r\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\r\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\r\n                            <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div-->\r\n\r\n            </div>\r\n<!--app-reguserfooter></app-reguserfooter-->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/reguserprofile/reguserprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReguserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReguserprofileComponent = /** @class */ (function () {
    function ReguserprofileComponent(authService, routes) {
        this.authService = authService;
        this.routes = routes;
        this.userprofdet = {
            firstname: '',
            lastname: '',
            address: '',
            contact: ''
        };
    }
    ReguserprofileComponent.prototype.updtProf = function () {
        //this.userprofdet.address;
        //console.log(dtst);
        console.log(this.userprofdet);
    };
    ReguserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfileDet().subscribe(function (res) {
            console.log(res.data);
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
            console.log(res);
        });
    };
    ReguserprofileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reguserprofile',
            template: __webpack_require__("./src/app/components/reguserprofile/reguserprofile.component.html"),
            styles: [__webpack_require__("./src/app/components/reguserprofile/reguserprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], ReguserprofileComponent);
    return ReguserprofileComponent;
}());



/***/ }),

/***/ "./src/app/components/user-borrowings/user-borrowings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-borrowings/user-borrowings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-usersidebar></app-usersidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-8\">Borrowings Details</h4>\n              <!--button class=\"btn btn-info btn-filled col-md-2\">Requested Books</button-->\n              <!--p class=\"category\">Here is a subtitle for this table</p-->\n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-3\">Book Name</th>\n                    <th class=\"col-md-2\">Taken Date</th>\n                    <th class=\"col-md-2\">Due Date</th>\n                    <th class=\"col-md-2\">ISBN No</th>\n                    <!--th class=\"col-md-1\">No of copies</th>\n                    <th class=\"col-md-2\">Request</th-->\n                  </thead>\n                  <tbody>\n                    \n\n                    <tr *ngFor=\"let item of this.borrowdet; index as i\">\n                      <td>{{i+1}}</td>\n                      <td>{{item.bookname}}</td>\n                      <td>{{item.takendate}}</td>\n                      <td>{{item.duedate}}</td>\n                      <td>{{item.isbn_no}}</td>\n                      <!--td>{{item.copies}}</td-->\n                      <!--td>\n                        <button class=\"btn btn-success\" (click)=\"requestBk(item)\">Request</button>\n                      </td-->\n                    </tr>\n                     \n                  </tbody>\n              </table>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-borrowings/user-borrowings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBorrowingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserBorrowingsComponent = /** @class */ (function () {
    function UserBorrowingsComponent(authService) {
        this.authService = authService;
        this.myDet = {
            username: ''
        };
    }
    UserBorrowingsComponent.prototype.ngOnInit = function () {
        this.getMyBorrows();
    };
    UserBorrowingsComponent.prototype.getMyBorrows = function () {
        var _this = this;
        this.authService.getUserProfileDet().subscribe(function (res) {
            console.log("user data : ");
            _this.myDet.username = res.data.username;
            console.log(_this.myDet.username);
            _this.passdata(_this.myDet);
        });
    };
    UserBorrowingsComponent.prototype.passdata = function (data) {
        var _this = this;
        console.log('here are my borrows...');
        //console.log(this.authService.getMyBorrwDet(data));
        //console.log(mydata);
        this.authService.getMyBorrwDet(data).subscribe(function (res) {
            console.log(res.borrows);
            _this.borrowdet = res.borrows;
        });
    };
    UserBorrowingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-borrowings',
            template: __webpack_require__("./src/app/components/user-borrowings/user-borrowings.component.html"),
            styles: [__webpack_require__("./src/app/components/user-borrowings/user-borrowings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], UserBorrowingsComponent);
    return UserBorrowingsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-fines/user-fines.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-fines/user-fines.component.html":
/***/ (function(module, exports) {

module.exports = "<app-usersidebar></app-usersidebar>\n\n<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n      <div class=\"card\">\n          <div class=\"header row\">\n              <h4 class=\"title col-md-8\">Fine Details</h4>\n              \n          </div>\n          <br>\n          <div class=\"content table-responsive table-full-width\">\n              <table class=\"table table-hover table-striped\" style=\"align-content: center\">\n                  <thead>\n                    <th class=\"col-md-1\">#</th>\n                    <th class=\"col-md-2\">Bookname</th>\n                    <th class=\"col-md-2\">Taken date</th>\n                    <th class=\"col-md-2\">Due date</th>\n                    <th class=\"col-md-2\">Returned date</th>\n                    <th class=\"col-md-1\">Fine(Rs.)</th>\n                    <th class=\"col-md-2\">Status</th>\n                    <!--th class=\"col-md-1\">ISBN No</th>\n                    <th class=\"col-md-1\">No of copies</th>\n                    <th class=\"col-md-2\">Request</th-->\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let item of this.rslvdata; index as i\">\n                          \n                          <td>{{i+1}}</td>\n                          <td>{{item.bookname}}</td>\n                          <td>{{item.takendate}}</td>\n                          <td>{{item.duedate}}</td>\n                          <td>{{item.returneddate}}</td>\n                          <td>{{item.fine}}</td>\n                          <td>{{item.status}}</td>\n                         \n                        </tr>\n                  </tbody>\n              </table>\n\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-fines/user-fines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFinesComponent = /** @class */ (function () {
    function UserFinesComponent(auth) {
        this.auth = auth;
    }
    UserFinesComponent.prototype.getuserData = function () {
        var _this = this;
        this.auth.getUserProfileDet().subscribe(function (res) {
            console.log("user data taken: ");
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
            _this.takeMyRslv();
        });
    };
    UserFinesComponent.prototype.takeMyRslv = function () {
        var _this = this;
        this.auth.showMyRslved(this.loggedUserData).subscribe(function (res) {
            console.log("rslved data: ");
            _this.rslvdata = res.details;
            console.log(_this.rslvdata);
        });
    };
    UserFinesComponent.prototype.ngOnInit = function () {
        this.getuserData();
    };
    UserFinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-fines',
            template: __webpack_require__("./src/app/components/user-fines/user-fines.component.html"),
            styles: [__webpack_require__("./src/app/components/user-fines/user-fines.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], UserFinesComponent);
    return UserFinesComponent;
}());



/***/ }),

/***/ "./src/app/components/usernavbar/usernavbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/usernavbar/usernavbar.component.html":
/***/ (function(module, exports) {

module.exports = "<base href=\"../../../\">\n<div class=\"main-panel\">\n  <nav class=\"navbar navbar-default navbar-fixed\" style=\"align-self: auto;\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">User</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                \n                <!--li>\n                  <a href=\"\">\n                        <i class=\"fa fa-search\"></i>\n        <p class=\"hidden-lg hidden-md\">Search</p>\n                    </a>\n                </li-->\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a [routerLink]=\"['/userProfile']\">\n                        {{loggedUserData.firstname}} {{loggedUserData.lastname}}\n                    </a>                    \n                </li>\n                \n                <li>\n                    <a (click)=\"logoutUser()\">\n                        Log out\n                    </a>\n                </li>\n    <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/usernavbar/usernavbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsernavbarComponent = /** @class */ (function () {
    function UsernavbarComponent(authservice, flashMessage, routes) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.routes = routes;
    }
    UsernavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getUserProfileDet().subscribe(function (res) {
            console.log("user data : ");
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
        });
    };
    UsernavbarComponent.prototype.logoutUser = function () {
        this.authservice.logoutUser();
        this.flashMessage.success('User logged out Successfully..', {
            delay: 1500,
            successClass: 'success',
            close: true,
            //closeBtnClass: 'class1 class2',
            navigate: '/'
        });
        //this.router.navigate(['/logPage']);
    };
    UsernavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usernavbar',
            template: __webpack_require__("./src/app/components/usernavbar/usernavbar.component.html"),
            styles: [__webpack_require__("./src/app/components/usernavbar/usernavbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], UsernavbarComponent);
    return UsernavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/userregister/userregister.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\r\n    border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n    border-left: 5px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/userregister/userregister.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<h1 style=\"text-align: center\">\n  User Registration Form\n</h1>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6\">\n\n    \n    <form  (ngSubmit)=\"sendregUser()\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">First Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Lahiru\" name=\"fnm\" value=\"\" [(ngModel)] = \"user_det.firstname\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Abe\" name=\"lnm\" value=\"\" [(ngModel)] = \"user_det.lastname\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"15XXXXXX\" name=\"unm\" value=\"\" [(ngModel)] = \"user_det.username\" required maxlength=\"8\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Registration no</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"2015/CS/001\" name=\"regno\" value=\"\" [(ngModel)] = \"user_det.regno\" required maxlength=\"11\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Contact details</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"07TPPPPPPP\" name=\"cntct\" value=\"\" [(ngModel)] = \"user_det.contact\" required maxlength=\"10\">\n        </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Address</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" name=\"addr\" value=\"\" [(ngModel)] = \"user_det.address\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"pwd\" value=\"\" [(ngModel)] = \"user_det.password\" required minlength=\"5\" #pswd = \"ngModel\">\n      \n        <br>\n\n        <div *ngIf = \"!pswd.valid\">\n          <span class=\"alert alert-danger\">Required</span>\n        </div>\n      \n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password Again<span class=\"glyphicon glyphicon-asterisk-sm\" aria-hidden=\"true\" style=\"color:red;\"></span></label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password again\" name=\"pwd_a\" value=\"\" [(ngModel)] = \"user_det.passworda\" required minlength=\"5\" #pswda=\"ngModel\">\n\n        <br>        \n\n        <div class=\"row\">\n\n            <div *ngIf = \"!pswda.valid\">\n              <span class=\"alert alert-danger\" *ngIf=\"pswda.errors.minlength\">Minimum length is 5</span>\n            </div>\n      \n            <div class=\"alert alert-danger\" *ngIf = \"!(pswda.value==pswd.value)\">\n              <!--span class=\"alert alert-danger\"></span-->\n              <span class=\"glyphicon glyphicon-asterisk\" aria-hidden=\"true\" style=\"color:red;\"></span>Not equal to password\n              \n              \n            </div>\n\n        </div>\n       \n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n            <button type=\"submit\" class=\"btn btn-success\">Register</button>\n        </div>\n        <div class=\"col-md-4\"></div>\n      </div>\n\n      \n    </form>\n  </div>\n\n  <div class=\"col-md-3\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/userregister/userregister.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserregisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { BaseModalConfig,BasicModalService, BaseModal } from 'angular-basic-modal';
var UserregisterComponent = /** @class */ (function () {
    //bmc = new BaseModalConfig();
    function UserregisterComponent(authservice, flashMessage) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.user_det = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            passworda: '',
            regno: '',
            contact: '',
            address: ''
        };
    }
    UserregisterComponent.prototype.ngOnInit = function () {
    };
    UserregisterComponent.prototype.sendregUser = function () {
        var _this = this;
        console.log('component');
        console.log(this.user_det);
        var users_det = {
            firstname: this.user_det.firstname,
            lastname: this.user_det.lastname,
            username: this.user_det.username,
            password: this.user_det.password,
            //passworda:this.user_det.passworda,
            regno: this.user_det.regno,
            contact: this.user_det.contact,
            address: this.user_det.address
        };
        console.log(users_det);
        //this.authservice.registerUser(users_det).subscribe();
        this.authservice.registerUser(users_det).subscribe(function (res) {
            console.log(res);
            _this.flashMessage.success('User Registered Successfully..', {
                delay: 1500,
                successClass: 'success',
                close: true,
                //closeBtnClass: 'class1 class2',
                navigate: '/logPage'
            });
        });
    };
    UserregisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userregister',
            template: __webpack_require__("./src/app/components/userregister/userregister.component.html"),
            styles: [__webpack_require__("./src/app/components/userregister/userregister.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular_flash_message__["FlashMessage"]])
    ], UserregisterComponent);
    return UserregisterComponent;
}());



/***/ }),

/***/ "./src/app/components/usersidebar/usersidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/usersidebar/usersidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-usernavbar></app-usernavbar>\n\n<br>\n\n<base href=\"../../../\">\n\n<div class=\"wrapper col-md-3\">\n  <div class=\"sidebar\" data-color=\"blue\" data-image=\"assets/userassets/img/sidebar-6.jpg\">\n\n  <!--   you can change the color of the sidebar using: data-color=\"blue | azure | green | orange | red | purple\" -->\n\n\n    <div class=\"sidebar-wrapper\">\n        <div class=\"logo\">\n            <a href=\"\" class=\"simple-text\">\n                UCSC Library <br> User Profile\n            </a>\n        </div>\n\n          <ul class=\"nav\">\n             \n              <li>\n                  <a [routerLink]=\"['/userProfile']\">\n                      <i class=\"pe-7s-user\"></i>\n                      <p>User Profile</p>\n                  </a>\n              </li>\n              <li>\n                    <a [routerLink]=\"['/books']\">\n                      <i class=\"pe-7s-note2\"></i>\n                      <p>Books section</p>\n                  </a>\n              </li>\n              <li>\n                    <a [routerLink]=\"['/myborrw']\">\n                      <i class=\"pe-7s-news-paper\"></i>\n                      <p>My Borrowings</p>\n                  </a>\n              </li>\n              <li>\n                  <a [routerLink]=\"['/userFines']\">\n                      <i class=\"pe-7s-science\"></i>\n                      <p>Fines</p>\n                  </a>\n              </li>\n              <!--li>\n                  <a href=\"\">\n                      <i class=\"pe-7s-map-marker\"></i>\n                      <p>Maps</p>\n                  </a>\n              </li>\n              <li>\n                  <a href=\"\">\n                      <i class=\"pe-7s-bell\"></i>\n                      <p>Notifications</p>\n                  </a>\n              </li>\n      <li class=\"active-pro\">\n                  <a href=\"\">\n                      <i class=\"pe-7s-rocket\"></i>\n                      <p>Upgrade to PRO</p>\n                  </a>\n              </li-->\n          </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/usersidebar/usersidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__ = __webpack_require__("./node_modules/angular-flash-message/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_flash_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_flash_message__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersidebarComponent = /** @class */ (function () {
    function UsersidebarComponent(authservice, flashMessage, routes) {
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.routes = routes;
    }
    UsersidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getUserProfileDet().subscribe(function (res) {
            console.log("user data : ");
            _this.loggedUserData = res.data;
            console.log(_this.loggedUserData);
            if (res.data == null) {
                _this.routes.navigate(['/logPage']);
            }
        });
    };
    UsersidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usersidebar',
            template: __webpack_require__("./src/app/components/usersidebar/usersidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/usersidebar/usersidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angular_flash_message__["FlashMessage"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], UsersidebarComponent);
    return UsersidebarComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return singleItem[field].includes(value); });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { JwtHelperService } from '@auth0/angular-jwt';
//import '../components/reguserprofile/reguserprofile.component/loggedUserData';

var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        //console.log('Authentify');
        // console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers });
    };
    AuthService.prototype.logingRegUser = function (userdata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/login", userdata, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenId", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.user = userdata;
        this.authtoken = token;
    };
    AuthService.prototype.getUserProfileDet = function () {
        this.fetchUserToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtoken);
        headers.append('Content-Type', 'application/json');
        //return this.http.get("http://localhost:3000/user/profile", {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/user/profile", this.user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.fetchUserToken = function () {
        var Token = localStorage.getItem("tokenId");
        this.authtoken = Token;
    };
    AuthService.prototype.logoutUser = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.removeItem("tokenId");
        localStorage.removeItem("user");
    };
    AuthService.prototype.getBookDet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/books/show", { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('');
    };
    AuthService.prototype.logingAdminUser = function (admndata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //console.log(admndata);
        return this.http.post("http://localhost:3000/admin/login", admndata, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeadmnData = function (token, admndata) {
        localStorage.setItem("tokenIdA", token);
        localStorage.setItem("admin", JSON.stringify(admndata));
        //localStorage.setItem("admin", admndata);
        this.admin = admndata;
        this.authtokenA = token;
    };
    AuthService.prototype.getAdmnProfileDet = function () {
        this.fetchAdminToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.authtokenA);
        headers.append('Content-Type', 'application/json');
        //return this.http.get("http://localhost:3000/user/profile", {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/admin/profile", this.admin, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.fetchAdminToken = function () {
        var Token = localStorage.getItem("tokenIdA");
        this.authtokenA = Token;
    };
    AuthService.prototype.logoutAdmin = function () {
        this.authtokenA = null;
        this.admin = null;
        localStorage.removeItem("tokenIdA");
        localStorage.removeItem("admin");
    };
    AuthService.prototype.registerBook = function (nwbook) {
        //console.log('Authentify');
        // console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/books/new", nwbook, { headers: headers });
    };
    AuthService.prototype.editMyBook = function (book) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log("in auth file..");
        console.log(book);
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/books/edit", book, { headers: headers });
    };
    AuthService.prototype.deleteBook = function (borrowreq) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/books/delete", borrowreq, { headers: headers });
    };
    AuthService.prototype.getallUserDet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/show", { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('');
    };
    AuthService.prototype.deleteUser = function (usr) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/user/delete", usr, { headers: headers });
    };
    AuthService.prototype.requestBorrowbk = function (bkdet) {
        //console.log('Authentify');
        // console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/brwbook/request", bkdet, { headers: headers });
    };
    AuthService.prototype.getAllBookRequest = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/brwbook/show", { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('');
    };
    AuthService.prototype.setBorrowDet = function (borrowdet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/borrows/insert", borrowdet, { headers: headers });
    };
    AuthService.prototype.deleteBrwReq = function (borrowreq) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/brwbook/delete1", borrowreq, { headers: headers });
    };
    AuthService.prototype.getBookBorrowDet = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/borrows/show", { headers: headers }).map(function (res) { return res.json(); });
        // return this.http.post('');
    };
    AuthService.prototype.shwMyBrwReq = function (userdet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/brwbook/showMine", userdet, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMyBorrwDet = function (userdet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //console.log('Userdetails: '+userdet);
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/borrows/showMine", userdet, { headers: headers }).map(function (res) { return res.json(); });
        //return dtset;
    };
    AuthService.prototype.editBorrowdet = function (brw) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log("in auth file..");
        console.log(brw);
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/borrows/edit", brw, { headers: headers });
    };
    AuthService.prototype.addRslvdBrw = function (brw) {
        //console.log('Authentify');
        // console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/rslvdbrw/new", brw, { headers: headers });
    };
    AuthService.prototype.deleteBrwDet = function (borrow) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/borrows/delete", borrow, { headers: headers });
    };
    AuthService.prototype.ShowAllRslvedBrw = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/rslvdbrw/show", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.ShowAllUnPaid = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/rslvdbrw/showUnpaid", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUnpaid = function (details) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/rslvdbrw/edit", details, { headers: headers });
    };
    AuthService.prototype.showAllSub = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/sub/show", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.showMyRslved = function (usrdet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/rslvdbrw/showByMe", usrdet, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.sendSgst = function (sgst) {
        //console.log('Authentify');
        // console.log(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/suggest/new", sgst, { headers: headers });
    };
    AuthService.prototype.showSgst = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
        return this.http.post("http://localhost:3000/suggest/show", { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map