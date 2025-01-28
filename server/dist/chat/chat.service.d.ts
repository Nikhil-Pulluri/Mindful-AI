import { PrismaService } from 'src/prisma/prisma.service';
import { Chat } from '@prisma/client';
export declare class ChatService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllChats(): Promise<Chat[]>;
    getChatsBYId(id: string): Promise<Chat[]>;
    createChat(data: {
        userId: string;
        chatTitle: string;
    }): Promise<Chat>;
    deleteChat(id: string): Promise<Chat>;
}
