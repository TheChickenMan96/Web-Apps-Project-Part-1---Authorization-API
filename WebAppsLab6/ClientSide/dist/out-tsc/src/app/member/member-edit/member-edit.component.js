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
var user_service_1 = require("../../services/user.service");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.member = {};
        this.updated = {};
        this.id = JSON.parse(localStorage.getItem('user')).id;
        this.loggedIn = false;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isExpired()) {
            this.loggedIn = true;
            this.getUser(this.id);
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 5000);
        }
    };
    MemberEditComponent.prototype.updateUser = function () {
        this.updated = { introduction: this.member.introduction, lookingFor: this.member.lookingFor, interests: this.member.interests, city: this.member.city };
        this.userService.updateUser(this.id, this.updated).subscribe();
    };
    MemberEditComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUser(id).subscribe(function (data) { return _this.member = data; });
    };
    MemberEditComponent = __decorate([
        core_1.Component({
            selector: 'app-member-edit',
            templateUrl: './member-edit.component.html',
            styleUrls: ['./member-edit.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
    ], MemberEditComponent);
    return MemberEditComponent;
}());
exports.MemberEditComponent = MemberEditComponent;
//# sourceMappingURL=member-edit.component.js.map