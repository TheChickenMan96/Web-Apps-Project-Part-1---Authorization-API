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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_text_sample_text_component__ = __webpack_require__("./src/app/sample-text/sample-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_data_sample_data_component__ = __webpack_require__("./src/app/sample-data/sample-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'sampletext', component: __WEBPACK_IMPORTED_MODULE_2__sample_text_sample_text_component__["a" /* SampleTextComponent */] },
    { path: 'sampledata', component: __WEBPACK_IMPORTED_MODULE_3__sample_data_sample_data_component__["a" /* SampleDataComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Link</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n\r\n<main role=\"main\" class=\"container\">\r\n\r\n  <div class=\"starter-template\">\r\n    <h1>Bootstrap starter template</h1>\r\n    <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\r\n  </div>\r\n\r\n</main>\r\n"

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
        this.title = 'Angular';
        this.show = true;
        this.label = "HIDE BANNER";
    }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.label = this.show ? "HIDE BANNER" : "SHOW BANNER";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__value_service__ = __webpack_require__("./src/app/value.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_data_sample_data_component__ = __webpack_require__("./src/app/sample-data/sample-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__ = __webpack_require__("./src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sample_text_sample_text_component__ = __webpack_require__("./src/app/sample-text/sample-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__server_data_server_data_component__ = __webpack_require__("./src/app/server-data/server-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__person_form_person_form_component__ = __webpack_require__("./src/app/person-form/person-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__values_values_component__ = __webpack_require__("./src/app/values/values.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sample_data_sample_data_component__["a" /* SampleDataComponent */],
                __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sample_text_sample_text_component__["a" /* SampleTextComponent */],
                __WEBPACK_IMPORTED_MODULE_10__server_data_server_data_component__["a" /* ServerDataComponent */],
                __WEBPACK_IMPORTED_MODULE_11__person_form_person_form_component__["a" /* PersonFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__values_values_component__["a" /* ValuesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__value_service__["a" /* ValueService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  border: 2px solid blue;\r\n  padding: 20px;\r\n  text-align: center;\r\n  display: inline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animate fadeIn\">{{title}}</h1>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.title = "Here is the banner content";
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'banner',
            template: __webpack_require__("./src/app/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/person-form/person-form.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n  border: 1px solid black;\r\n  margin: 25px;\r\n  padding: 25px;\r\n}\r\n\r\n.error {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/person-form/person-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submit(); form.reset()\">\r\n\r\n  <div>\r\n    <label>Name</label>\r\n    <input type=\"text\" #n=\"ngModel\" name=\"name\" [(ngModel)]=\"model.name\" required />\r\n  <br />  Name touched: {{n.touched}}<br />\r\n    Name dirty: {{n.dirty}}<br />\r\n    Name valid: {{n.valid}}<br />\r\n    <span class=\"error\" *ngIf=\"n.touched && n.invalid\">Name is required</span>\r\n  </div>\r\n\r\n  <div>\r\n    <label>Birth Year</label>\r\n    <input type=\"number\" name=\"birthYear\" [(ngModel)]=\"model.birthYear\" />\r\n  </div>\r\n\r\n  <div>\r\n    <label>Security question</label>\r\n    <select name=\"question\" [(ngModel)]=\"model.question\">\r\n      <option value=\"pet\">First pet's name?</option>\r\n      <option value=\"food\">Favorite food?</option>\r\n      <option value=\"song\">Favorite song?</option>\r\n    </select>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/person-form/person-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonFormComponent; });
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

var PersonFormComponent = /** @class */ (function () {
    function PersonFormComponent() {
        this.model = new User();
    }
    PersonFormComponent.prototype.ngOnInit = function () {
        this.model.question = 'pet';
    };
    PersonFormComponent.prototype.submit = function () {
        console.log(this.model);
    };
    PersonFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-person-form',
            template: __webpack_require__("./src/app/person-form/person-form.component.html"),
            styles: [__webpack_require__("./src/app/person-form/person-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonFormComponent);
    return PersonFormComponent;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());


/***/ }),

/***/ "./src/app/sample-data/sample-data.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 0 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sample-data/sample-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container animate fadeIn\">\r\n  <h1>Sample Data</h1>\r\n  <ul>\r\n    <li *ngFor=\"let drink of beverages\">{{drink.name}} : {{drink.price | currency}}</li>\r\n  </ul>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sample-data/sample-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDataComponent; });
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

var SampleDataComponent = /** @class */ (function () {
    function SampleDataComponent() {
    }
    SampleDataComponent.prototype.ngOnInit = function () {
        this.beverages = [
            new Beverage('Coffee', 2),
            new Beverage('Tea', 2.5),
            new Beverage('Beer', 5),
            new Beverage('Wine', 7.5)
        ];
    };
    SampleDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample-data',
            template: __webpack_require__("./src/app/sample-data/sample-data.component.html"),
            styles: [__webpack_require__("./src/app/sample-data/sample-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleDataComponent);
    return SampleDataComponent;
}());

var Beverage = /** @class */ (function () {
    function Beverage(name, price) {
        this.name = name;
        this.price = price;
    }
    return Beverage;
}());


/***/ }),

/***/ "./src/app/sample-text/sample-text.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  width: 75%;\r\n  margin: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sample-text/sample-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container animate fadeIn\">\r\n  <h1>Sample Text</h1>\r\n  <p>Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.</p>\r\n  <p>Laoreet ac, aliquam sit amet justo nunc tempor, metus vel placerat suscipit, orci nisl iaculis eros, a tincidunt nisi odio eget lorem nulla condimentum tempor mattis ut vitae feugiat augue cras ut metus a risus iaculis scelerisque eu ac ante fusce non varius purus aenean nec magna felis fusce vestibulum.</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sample-text/sample-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleTextComponent; });
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

var SampleTextComponent = /** @class */ (function () {
    function SampleTextComponent() {
    }
    SampleTextComponent.prototype.ngOnInit = function () {
    };
    SampleTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sample-text',
            template: __webpack_require__("./src/app/sample-text/sample-text.component.html"),
            styles: [__webpack_require__("./src/app/sample-text/sample-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleTextComponent);
    return SampleTextComponent;
}());



/***/ }),

/***/ "./src/app/server-data/server-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-data/server-data.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Server data\r\n</h3>\r\n<div *ngFor=\"let item of data\">{{\"Got: \" + item}}</div>\r\n<p *ngIf=\"!data\">NO DATA RETURNED</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/server-data/server-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerDataComponent = /** @class */ (function () {
    function ServerDataComponent(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:58763/api';
    }
    ServerDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.baseUrl + '/values').subscribe(function (response) {
            _this.data = response;
        }, function (error) {
            console.log('Need CORS to access: ' + _this.baseUrl);
        });
    };
    ServerDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-server-data',
            template: __webpack_require__("./src/app/server-data/server-data.component.html"),
            styles: [__webpack_require__("./src/app/server-data/server-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServerDataComponent);
    return ServerDataComponent;
}());



/***/ }),

/***/ "./src/app/value.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueService = /** @class */ (function () {
    function ValueService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:58763/api/values/';
    }
    ValueService.prototype.getValues = function () {
        return this.http.get(this.baseUrl);
    };
    ValueService.prototype.getValue = function (id) {
        return this.http.get(this.baseUrl + id);
    };
    ValueService.prototype.postValue = function (value) {
        var contentHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
        return this.http.post(this.baseUrl, value, { headers: contentHeader });
    };
    ValueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ValueService);
    return ValueService;
}());



/***/ }),

/***/ "./src/app/values/values.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/values/values.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <button (click)=\"onClick()\">Click for data</button>\r\n</p>\r\n<div *ngIf=\"values\">\r\n  <ol>\r\n    <li *ngFor=\"let val of values\">{{ val | uppercase }}</li>\r\n  </ol>\r\n</div>\r\n\r\n<div>\r\n  <select #v (change)=\"showValue(v.value)\">\r\n    <option value=\"\">Pick one...</option>\r\n    <option value=\"0\">1</option>\r\n    <option value=\"1\">2</option>\r\n    <option value=\"2\">3</option>\r\n    <option value=\"3\">4</option>\r\n  </select>\r\n  <span *ngIf=\"selectedValue\">{{ selectedValue }}</span>\r\n</div>\r\n\r\n<div>\r\n  <form ngForm (submit)=\"onSubmit()\">\r\n    <input type=\"text\" name=\"newValue\" [(ngModel)]=\"newValue\" />\r\n    <button type=\"submit\">Add a Value</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/values/values.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__value_service__ = __webpack_require__("./src/app/value.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValuesComponent = /** @class */ (function () {
    function ValuesComponent(valueService) {
        this.valueService = valueService;
        this.newValue = '';
    }
    ValuesComponent.prototype.ngOnInit = function () {
    };
    ValuesComponent.prototype.onClick = function () {
        var _this = this;
        this.valueService.getValues().subscribe(function (data) {
            _this.values = data;
        });
    };
    ValuesComponent.prototype.showValue = function (val) {
        var _this = this;
        if (val != '') {
            this.valueService.getValue(val).subscribe(function (data) {
                _this.selectedValue = data;
            });
        }
    };
    ValuesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.valueService.postValue('"' + this.newValue + '"')
            .subscribe(function () { return _this.newValue = ''; });
    };
    ValuesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-values',
            template: __webpack_require__("./src/app/values/values.component.html"),
            styles: [__webpack_require__("./src/app/values/values.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__value_service__["a" /* ValueService */]])
    ], ValuesComponent);
    return ValuesComponent;
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
    production: false,
    apiUrl: 'http://localhost:58763/api'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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