"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./services/auth.service");
var http_1 = require("@angular/common/http");
var collapse_1 = require("ngx-bootstrap/collapse");
var angular_jwt_1 = require("@auth0/angular-jwt");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var alert_1 = require("ngx-bootstrap/alert");
var user_service_1 = require("./services/user.service");
var member_list_component_1 = require("./member/member-list/member-list.component");
var member_card_component_1 = require("./member/member-card/member-card.component");
var friend_list_component_1 = require("./friend-list/friend-list.component");
var messages_component_1 = require("./messages/messages.component");
function tokenGetter() {
    return localStorage.getItem('token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent,
                member_list_component_1.MemberListComponent,
                member_card_component_1.MemberCardComponent,
                friend_list_component_1.FriendListComponent,
                messages_component_1.MessagesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                collapse_1.CollapseModule.forRoot(),
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:51190']
                    }
                }),
                dropdown_1.BsDropdownModule.forRoot(),
                alert_1.AlertModule.forRoot()
            ],
            providers: [auth_service_1.AuthService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map