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
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var MemberDetailsComponent = /** @class */ (function () {
    function MemberDetailsComponent(userService, activatedRoute, auth, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.router = router;
        this.member = {};
        this.id = -1;
        this.loggedIn = false;
    }
    MemberDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.auth.isExpired()) {
            this.loggedIn = true;
            this.id = this.activatedRoute.snapshot.params.id;
            this.getUser(this.id);
        }
        else {
            this.loggedIn = false;
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 5000);
        }
    };
    MemberDetailsComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUser(id).subscribe(function (data) { return _this.member = data; });
    };
    MemberDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-member-details',
            templateUrl: './member-details.component.html',
            styleUrls: ['./member-details.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, auth_service_1.AuthService, router_1.Router])
    ], MemberDetailsComponent);
    return MemberDetailsComponent;
}());
exports.MemberDetailsComponent = MemberDetailsComponent;
//# sourceMappingURL=member-details.component.js.map