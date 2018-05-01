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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var angular_jwt_1 = require("@auth0/angular-jwt");
var environment_1 = require("../../environments/environment");
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    //The map method was not properly assigning 
    AuthService.prototype.login = function (user) {
        return this.http.post(this.baseUrl + '/auth/login', user)
            .map(function (result) {
            if (result) {
                var buildUser = { id: result.id, userName: result.userName };
                var auth = { tokenString: result.tokenString, user: buildUser };
                localStorage.setItem('token', auth.tokenString);
                localStorage.setItem('user', JSON.stringify(auth.user));
            }
            return result;
        });
    };
    AuthService.prototype.isExpired = function () {
        return this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    AuthService.prototype.register = function (model) {
        var contentHeader = new http_1.HttpHeaders({ 'Content-type': 'application/json' });
        return this.http.post(this.baseUrl + '/auth/register', model, { headers: contentHeader });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, angular_jwt_1.JwtHelperService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map