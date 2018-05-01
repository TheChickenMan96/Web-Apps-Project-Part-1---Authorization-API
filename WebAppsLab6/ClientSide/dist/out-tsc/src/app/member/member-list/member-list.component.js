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
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.users = [];
        this.curUser = {};
        this.loggedIn = false;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isExpired()) {
            this.loggedIn = true;
            this.curUser = JSON.parse(localStorage.getItem('user'));
            this.getUsers();
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 5000);
        }
    };
    MemberListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (p) { return _this.users = p.filter(function (u) { return u.id != _this.curUser.id; }); });
    };
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'app-member-list',
            templateUrl: './member-list.component.html',
            styleUrls: ['./member-list.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map