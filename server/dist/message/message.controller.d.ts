import { MessageService } from './message.service';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    getAllChats(): Promise<Object[]>;
    updateChat(body: {
        chatId: string;
        content: string;
        role: string;
    }): Promise<Object>;
    getChat(id: string): Promise<Object[]>;
}
