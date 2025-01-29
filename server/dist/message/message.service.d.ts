import { PrismaService } from 'src/prisma/prisma.service';
import { Message } from '@prisma/client';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllChats(): Promise<Message[]>;
    updateChat(chatId: string, content: string, role: string): Promise<{
        id: string;
        chatId: string;
        content: string;
        role: string;
        timestamp: Date;
    }>;
    getChat(chatId: string): Promise<{
        role: string;
        content: string;
    }[]>;
}
