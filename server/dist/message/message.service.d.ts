import { PrismaService } from 'src/prisma/prisma.service';
import { Message } from '@prisma/client';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllChats(): Promise<Message[]>;
    updateChat(chatId: string, message: string, isUser: boolean): Promise<{
        message: string;
        id: string;
        chatId: string;
        isUser: boolean;
        timestamp: Date;
    }>;
    getChat(chatId: string): Promise<Message[]>;
}
