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
var ng2_file_upload_1 = require("ng2-file-upload");
var environment_1 = require("../../environments/environment");
var auth_service_1 = require("../services/auth.service");
var user_service_1 = require("../services/user.service");
var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.baseUrl = environment_1.environment.apiUrl;
    }
    PhotoEditorComponent.prototype.initializeUploader = function () {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: this.baseUrl +
                '/users/' +
                JSON.parse(localStorage.getItem('user')).id +
                '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
    };
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    PhotoEditorComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-editor',
            templateUrl: './photo-editor.component.html',
            styleUrls: ['./photo-editor.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, user_service_1.UserService])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());
exports.PhotoEditorComponent = PhotoEditorComponent;
//# sourceMappingURL=photo-editor.component.js.map