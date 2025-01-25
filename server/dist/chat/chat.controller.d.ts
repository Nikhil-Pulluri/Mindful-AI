import { ChatService } from './chat.service';
import { Chat } from '@prisma/client';
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    getChatsById(id: string): Promise<Chat[]>;
    createChat(body: {
        userId: string;
        chatTitle: string;
    }): Promise<Chat>;
}
