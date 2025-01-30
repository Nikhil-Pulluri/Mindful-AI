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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const prisma_service_1 = require("../prisma/prisma.service");
const chat_service_1 = require("../chat/chat.service");
let UserService = class UserService {
    constructor(prisma, chatService) {
        this.prisma = prisma;
        this.chatService = chatService;
    }
    async getAllUsers() {
        return this.prisma.user.findMany();
    }
    async find_createUser(data) {
        const email = data.email;
        const existingUser = await this.prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            console.log('User already exists');
            return existingUser;
        }
        const newUser = await this.prisma.user.create({
            data,
        });
        try {
            await this.chatService.createChat({
                userId: newUser.id,
                chatTitle: 'General Chat',
            });
        }
        catch (error) {
            console.error('Error creating chat for user:', error);
        }
        return newUser;
    }
    async findUserByEmail(email) {
        console.log("User by email called");
        const user = this.prisma.user.findUnique({
            where: { email: email },
            include: { chats: true },
        });
        if (user) {
            return user;
        }
        else
            throw (0, console_1.error)("User not found");
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        chat_service_1.ChatService])
], UserService);
//# sourceMappingURL=user.service.js.map