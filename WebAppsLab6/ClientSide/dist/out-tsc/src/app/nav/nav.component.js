"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../services/auth.service");
var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.model = {};
        this.isCollapsed = false;
        this.loggedIn = false;
        this.user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')).userName : '';
        this.alertPlaying = false;
        this.alert = {};
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) { return _this.playAlert(-10); }, function (error) { return _this.playAlert(error.status); }, function () { return _this.user = JSON.parse(localStorage.getItem('user')).userName; });
    };
    NavComponent.prototype.playAlert = function (errorStatus) {
        this.alertPlaying = true;
        if (errorStatus == 401) {
            this.alert = {
                type: 'danger',
                msg: 'Invalid userName and/or password',
                timeout: 2000
            };
        }
        else if (errorStatus == -10) {
            this.alert = {
                type: 'success',
                msg: 'Successfully Logged In',
                timeout: 2000
            };
        }
        else if (errorStatus == -1) {
            this.alert = {
                type: 'info',
                msg: 'Logged out',
                timeout: 2000
            };
        }
        else if (errorStatus == 500) {
            this.alert = {
                type: 'danger',
                msg: 'Server Error Occurred',
                timeout: 2000
            };
        }
        else if (errorStatus == 0) {
            this.alert = {
                type: 'danger',
                msg: 'Unknown Error Occurred',
                timeout: 2000
            };
        }
    };
    NavComponent.prototype.closeAlert = function () {
        this.alertPlaying = false;
    };
    NavComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.playAlert(-1);
    };
    NavComponent.prototype.checkLogin = function () {
        return this.authService.isExpired();
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map