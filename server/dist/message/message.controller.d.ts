import { MessageService } from './message.service';
import { Message } from '@prisma/client';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    getAllChats(): Promise<Message[]>;
    updateChat(body: {
        chatId: string;
        content: string;
        role: string;
    }): Promise<Message>;
    getChat(id: string): Promise<{
        role: string;
        content: string;
    }[]>;
}
