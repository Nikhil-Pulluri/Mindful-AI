import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatService } from 'src/chat/chat.service';
export declare class UserService {
    private prisma;
    private chatService;
    constructor(prisma: PrismaService, chatService: ChatService);
    getAllUsers(): Promise<User[]>;
    find_createUser(data: {
        name: string;
        email: string;
        image?: string;
    }): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
}
