import { MessageService } from './message.service';
import { Message } from '@prisma/client';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    getAllChats(): Promise<Message[]>;
    updateChat(body: {
        chatId: string;
        message: string;
        isUser: boolean;
    }): Promise<Message>;
    getChat(id: string): Promise<Message[]>;
}
