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

module.exports = ".body {\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 3fr 1fr;\n        grid-template-columns: 3fr 1fr;\n    padding-top: 5%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>    \n<div class=\"container\">\n    <div class=\"body\">\n        <app-entry *ngIf=\"!searching; else searchComponent\"></app-entry>\n        <ng-template #searchComponent>\n            <app-search></app-search>\n        </ng-template>\n        <app-calendar></app-calendar>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(searchService) {
        this.searchService = searchService;
        this.searching = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.observableSearch.subscribe(function (observableSearch) { return _this.searching = observableSearch; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("./src/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_entry_entry_component__ = __webpack_require__("./src/components/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar_component__ = __webpack_require__("./src/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_diary_service__ = __webpack_require__("./src/services/diary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_calendar_service__ = __webpack_require__("./src/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__ = __webpack_require__("./src/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_search_service__ = __webpack_require__("./src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_entry_entry_component__["a" /* EntryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_diary_service__["a" /* DiaryService */], __WEBPACK_IMPORTED_MODULE_10__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_12__services_search_service__["a" /* SearchService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/calendar/calendar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" (click)=\"setDate()\"></ngb-datepicker>  \n</div>\n"

/***/ }),

/***/ "./src/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("./src/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var now = new Date();
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, searchService) {
        this.calendarService = calendarService;
        this.searchService = searchService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    // On init, we want to start our app state with today's date
    CalendarComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    // When user clicks on a date on calendar widget, we set app state to that date
    CalendarComponent.prototype.setDate = function () {
        var month = this.model.month + "";
        var day = this.model.day + "";
        if (Number(day) < 10) {
            day = "0" + day;
        }
        if (Number(month) < 10) {
            month = "0" + month;
        }
        var dateString = this.model.year + "-" + month + "-" + day;
        this.calendarService.setDate(dateString);
        this.searchService.switchViews();
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/components/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/components/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/components/entry/entry.component.css":
/***/ (function(module, exports) {

module.exports = ".entry-area {\n    border: 1px solid #ccc;\n}\n\n.entry-header {\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n}\n\n.title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-left: 5%;\n}\n\n.date {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;    \n    padding-right: 5%; \n}\n\n.entry-body {\n    padding: 5% 5% 5% 5%;\n}\n\n.content {\n    height: 600px;\n    display:-ms-grid;\n    display:grid;\n    -ms-grid-rows: 1fr 4fr 1fr;\n        grid-template-rows: 1fr 4fr 1fr;\n}\n\n.edit {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-right: 5%;\n}\n\n.btn-outline-primary {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    width: 25%\n}\n\n.btn-outline-primary:hover {\n    width: 25%\n}\n\n#title-form {\n    padding-top: 5%;\n    padding-left: 5%; \n}"

/***/ }),

/***/ "./src/components/entry/entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"entry-area\">\n  <div class=\"content\">\n\t\t\n\t\t<!--Show diary in edit mode if editingMode is true-->\n\t\t<div *ngIf=\"editingMode; else standardView\"> \n\t\t\t<form #diaryEntry = \"ngForm\" (ngSubmit) = \"updateDiary(diaryEntry.value)\" ngNativeValidate>\n\t\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t\t<div class=\"form-group\" id=\"title-form\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Title\" required ngModel>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<h3 class=\"date\">{{entryDate}}</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"entry-body\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" [(ngModel)]=\"entry\" name=\"entry\" placeholder=\"Click 'Save' to save this entry\"id=\"page-entry\" rows=\"15\" required ngModel></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"edit\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-outline-primary\">Save</button>  \n\t\t\t\t</div>\n\t\t\t </form>\n\t\t</div>\n\n\t\t<!--Show the standard diary view if editingMode is false -->\n\t\t<ng-template #standardView>\n\t\t\t<div class=\"entry-header\">\n\t\t\t\t\t<div *ngIf=\"title !== null; else newEntry\" class=\"title\" >\n\t\t\t\t\t\t<h2> {{title}} </h2>        \n\t\t\t\t\t</div>\n\t\t\t\t\t<ng-template #newEntry>\n\t\t\t\t\t\t<div class=\"title\" >\n\t\t\t\t\t\t\t<h2> Page Title </h2>        \t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<h3 class=\"date\">{{entryDate}}</h3>\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<div class=\"entry-body\">\n\t\t\t\t\t<p>{{entry}}</p>\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<div class=\"edit\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"toggleEditingMode()\">Edit</button>        \n\t\t\t\t</div>\n\t\t</ng-template>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/components/entry/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_diary_service__ = __webpack_require__("./src/services/diary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__ = __webpack_require__("./src/services/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryComponent = /** @class */ (function () {
    function EntryComponent(diaryService, calendarService) {
        var _this = this;
        this.diaryService = diaryService;
        this.calendarService = calendarService;
        this.title = null;
        this.entry = null;
        this.entryDate = '';
        this.editingMode = false;
        this.calendarService.observableDate.subscribe(function (observableDate) { return _this.entryDate = observableDate; });
        this.diaryService.observableEntry.subscribe(function (observableEntry) { return _this.entry = observableEntry; });
        this.diaryService.observableTitle.subscribe(function (observableTitle) { return _this.title = observableTitle; });
    }
    // If user clicks on edit button, then it'll toggle edit mode
    EntryComponent.prototype.toggleEditingMode = function () {
        this.editingMode = !this.editingMode;
    };
    // Call the diaryService to make POST request to server for updating diary entries
    // Calls toggleEditingMode() after to revert back to normal diary viewing
    EntryComponent.prototype.updateDiary = function (data) {
        this.diaryService.postEntry(this.entryDate, data.title, data.entry);
        this.toggleEditingMode();
    };
    EntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-entry',
            template: __webpack_require__("./src/components/entry/entry.component.html"),
            styles: [__webpack_require__("./src/components/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_diary_service__["a" /* DiaryService */], __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__["a" /* CalendarService */]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n    width: 10%;\n    min-width: 112px;\n}\n\n.navbar {\n    border-bottom: #a2a2a2 3px solid;    \n    opacity: 0.8;\n}"

/***/ }),

/***/ "./src/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"container\">\n    <!-- <a class=\"navbar-brand\">Navbar</a> -->\n    <img src=\"assets/xoom-logo.png\" class=\"navbar-brand\">    \n    <form #searchForm=\"ngForm\" (ngSubmit)=\"search(searchForm.value)\" class=\"form-inline\" ngNativeValidate>\n      <input class=\"form-control mr-sm-2\" name=\"searchVal\"type=\"search\" placeholder=\"Search\" aria-label=\"Search\" required ngModel>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\"  type=\"submit\">Search</button>\n    </form>\n  </div>\n  </nav>"

/***/ }),

/***/ "./src/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(searchService) {
        this.searchService = searchService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    // Calls searchService to search diary entries for specific keyword
    HeaderComponent.prototype.search = function (data) {
        this.searchService.toggleSearchMode();
        this.searchService.search(data.searchVal);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/components/header/header.component.html"),
            styles: [__webpack_require__("./src/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search-area {\n    border: 1px solid #ccc;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.results {\n    height: 600px;\n    padding-top: 2.5%;\n}\n\n.items ul {\n    text-decoration: underline;\n    cursor: pointer;\n    padding-left: 0px;    \n}"

/***/ }),

/***/ "./src/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-area\">\n  <div class=\"results\">\n      <h2>Search Result</h2>\n      <div class=\"items\">\n          <ul *ngFor=\"let result of results; let i = index\" (click) = \"getEntry(i)\">\n              {{result.creationDate}} : {{result.title}}\n          </ul>\n      </div>\n  </div>\n</div>\n\n  "

/***/ }),

/***/ "./src/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__ = __webpack_require__("./src/services/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, calendarService) {
        var _this = this;
        this.searchService = searchService;
        this.calendarService = calendarService;
        this.results = [];
        this.searchService.observableResults.subscribe(function (observableResults) { return _this.results = observableResults; });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getEntry = function (index) {
        this.searchService.toggleSearchMode();
        this.calendarService.setDate(this.results[index].creationDate);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/components/search/search.component.html"),
            styles: [__webpack_require__("./src/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__["a" /* CalendarService */]])
    ], SearchComponent);
    return SearchComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_diary_service__ = __webpack_require__("./src/services/diary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var now = new Date();
var CalendarService = /** @class */ (function () {
    function CalendarService(diaryService) {
        this.diaryService = diaryService;
        this.date = '';
        this.today = '';
        this.observableDate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](String);
        var year = now.getFullYear();
        var month = now.getMonth() + 1 + '';
        var date = now.getDate() + '';
        if (Number(month) < 10) {
            month = '0' + month;
        }
        if (Number(date) < 10) {
            date = '0' + date;
        }
        this.today = year + "-" + month + "-" + date;
        this.setDate(this.today);
    }
    // Sets/updates app's date state and gets diary entry for that date(if any)
    CalendarService.prototype.setDate = function (dateString) {
        this.date = dateString;
        this.observableDate.next(this.date);
        this.diaryService.getEntry(dateString);
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_diary_service__["a" /* DiaryService */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/services/diary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var now = new Date();
var DiaryService = /** @class */ (function () {
    function DiaryService(http) {
        this.http = http;
        this.title = '';
        this.entry = '';
        this.today = '';
        this.observableEntry = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](String);
        this.observableTitle = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](String);
        this.observableEntry.next(null);
        this.observableTitle.next(null);
        // Get a reference to today's date in the proper format
        var year = now.getFullYear();
        var month = now.getMonth() + 1 + '';
        var date = now.getDate() + '';
        if (Number(month) < 10) {
            month = '0' + month;
        }
        if (Number(date) < 10) {
            date = '0' + date;
        }
        this.today = year + "-" + month + "-" + date;
    }
    // Make HTTTP GET requests to server for entries based off of today's date or a future/past date.
    // Update observable variables with response data
    DiaryService.prototype.getEntry = function (date) {
        var _this = this;
        if (date === this.today) {
            this.http.get('http://localhost:8080/api/v1/pages/today').subscribe(function (data) {
                var entry = JSON.parse(JSON.stringify(data));
                if (entry.title !== '' && entry.content !== '') {
                    _this.observableTitle.next(entry.title);
                    _this.observableEntry.next(entry.content);
                }
                else {
                    _this.observableTitle.next(null);
                    _this.observableEntry.next(null);
                }
            });
        }
        else {
            this.http.get('http://localhost:8080/api/v1/pages/' + date)
                .subscribe(function (data) {
                var entry = JSON.parse(JSON.stringify(data));
                if (entry.title !== '' && entry.content !== '') {
                    _this.observableTitle.next(entry.title);
                    _this.observableEntry.next(entry.content);
                }
                else {
                    _this.observableTitle.next(null);
                    _this.observableEntry.next(null);
                }
            });
        }
    };
    // Makes HTTP POST requests to server to update diary entries. 
    // Updates observable variables with data posted from user
    DiaryService.prototype.postEntry = function (date, title, entry) {
        this.observableEntry.next(entry);
        this.observableTitle.next(title);
        // Use this endpoint if we are NOT saving to today's entry
        if (date !== this.today) {
            this.http.post('http://localhost:8080/api/v1/pages/' + date, {
                "date_created": date,
                "content": entry,
                "title": title
            })
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log('Error occured');
            });
            // Use this endpoint if we are saving to today's entry
        }
        else {
            this.http.post('http://localhost:8080/api/v1/pages/', {
                "date_created": date,
                "content": entry,
                "title": title
            })
                .subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log('Error occured');
            });
        }
    };
    DiaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DiaryService);
    return DiaryService;
}());



/***/ }),

/***/ "./src/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.searching = false;
        this.results = [];
        this.observableSearch = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](Boolean);
        this.observableSearch.next(this.searching);
        this.observableResults = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    // Toggles searchMode
    SearchService.prototype.toggleSearchMode = function () {
        this.searching = !this.searching;
        this.observableSearch.next(this.searching);
    };
    // Make HTTP GET request to server to search diary entries for a specific keyword
    SearchService.prototype.search = function (searchVal) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]().set("search", searchVal);
        this.http.get('http://localhost:8080/api/v1/pages', { params: params }).subscribe(function (data) {
            _this.results = JSON.parse(JSON.stringify(data));
            // Format date 
            for (var i = 0; i < _this.results.length; i++) {
                _this.results[i].creationDate = _this.results[i].creationDate.substring(0, 10);
            }
            _this.observableResults.next(_this.results);
        });
    };
    // If user clicks on calendar date when in search mode, revert back to viewing diary entry
    SearchService.prototype.switchViews = function () {
        if (this.searching === true) {
            this.searching = !this.searching;
            this.observableSearch.next(this.searching);
        }
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map