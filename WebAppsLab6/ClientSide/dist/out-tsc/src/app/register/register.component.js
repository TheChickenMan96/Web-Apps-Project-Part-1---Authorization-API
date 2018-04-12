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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.model = { username: '', password: '' };
        this.passwordCon = { password: '' };
        this.errors = [];
        this.success = false;
        this.passwordConAlert = {
            type: 'danger',
            msg: 'Passwords do not match!',
            timeout: 10000
        };
        this.alert = {
            type: 'danger',
            timeout: 2000
        };
        this.err = null;
        this.data = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.checkPassword = function () {
        return this.model.password == this.passwordCon.password;
    };
    RegisterComponent.prototype.getErrors = function (error) {
        if (error.Password != null) {
            this.errors.push(error.Password["0"]);
        }
        if (error.UserName != null) {
            this.errors.push(error.UserName["0"]);
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.checkPassword()) {
            this.authService.register(this.model).subscribe(function (data) { return _this.success = true; }, function (error) { return _this.getErrors(error.error); });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map