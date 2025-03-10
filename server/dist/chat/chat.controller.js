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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const swagger_1 = require("@nestjs/swagger");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async getAllchats() {
        return this.chatService.getAllChats();
    }
    async getChatsById(id) {
        return this.chatService.getChatsBYId(id);
    }
    async createChat(body) {
        return this.chatService.createChat(body);
    }
    async deleteChat(id) {
        return this.chatService.deleteChat(id);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all chats' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response', type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getAllchats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get chats by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The ID of the user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response', type: [Object] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chats not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "getChatsById", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new chat' }),
    (0, swagger_1.ApiBody)({ description: 'Chat creation payload', type: Object }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Chat created successfully', type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "createChat", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a chat' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'The ID of the chat to be deleted' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chat deleted successfully', type: Object }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chat not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "deleteChat", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('chat'),
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
//# sourceMappingURL=chat.controller.js.map