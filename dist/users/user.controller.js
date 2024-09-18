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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
let UserController = class UserController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createCreateuserDto) {
        return this.usersService.create(createCreateuserDto);
    }
    updatepassw(createCreateuserDto) {
        return this.usersService.updatepassw(createCreateuserDto);
    }
    updatemail(createCreateuserDto) {
<<<<<<< HEAD
=======
        console.log("osman");
>>>>>>> c8b6d475c6db84bc4bdff9c77ae2cbd7ba4eaac3
        return this.usersService.updateMail(createCreateuserDto);
    }
    delete(createCreateuserDto) {
        return this.usersService.delete(createCreateuserDto);
    }
    async readAllUsers() {
        const users = await this.usersService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            users
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("/insert"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update/passw"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updatepassw", null);
__decorate([
    (0, common_1.Post)("/update/mail"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updatemail", null);
__decorate([
    (0, common_1.Post)("/delete"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "readAllUsers", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map