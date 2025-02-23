import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from '@prisma/client';

@Controller('chat')
export class ChatController {
  constructor(private chatService : ChatService) {}

  @Get()
  async getAllchats() : Promise<Chat[]> {
    return this.chatService.getAllChats()
  }

  @Get(':id')
  async getChatsById(
    // id is the id of the user in the user model
    @Param('id') id : string
  ) : Promise<Chat[]>{
    return this.chatService.getChatsBYId(id)
  }


  @Post('create')
  async createChat(
    @Body() body : {userId : string, chatTitle: string}
  ) : Promise<Chat> {
    return this.chatService.createChat(body)
  }

  @Delete(':id')
  async deleteChat(
    @Param('id') id : string 
  ) : Promise<Chat> {
    return this.chatService.deleteChat(id)
  }
}
