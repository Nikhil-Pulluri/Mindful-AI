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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const swagger_1 = require("@nestjs/swagger");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async getAllChats() {
        return this.messageService.getAllChats();
    }
    async updateChat(body) {
        return this.messageService.updateChat(body.chatId, body.content, body.role);
    }
    async getChat(id) {
        return this.messageService.getChat(id);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all messages' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response', type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getAllChats", null);
__decorate([
    (0, common_1.Post)('update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a message' }),
    (0, swagger_1.ApiBody)({ description: 'Message update payload', type: Object }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Message updated successfully', type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "updateChat", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get message by chat ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The ID of the chat' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response', type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getChat", null);
exports.MessageController = MessageController = __decorate([
    (0, swagger_1.ApiTags)('message'),
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map