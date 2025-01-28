import { Controller, Get, Body, Post, Param} from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '@prisma/client';

@Controller('message')
export class MessageController {
  constructor(private messageService : MessageService) {}

  @Get()
  async getAllChats() : Promise<Message[]> {
    return this.messageService.getAllChats()
  }

  @Post('update')
  async updateChat(
    @Body() body : {
      chatId : string,
      message: string,
      isUser : boolean
    }
  ) : Promise<Message> {
    return this.messageService.updateChat(body.chatId, body.message, body.isUser)
  }

  @Get(':id')
  async getChat(
    @Param('id') id : string 
  ) : Promise<Message[]> {
    return this.messageService.getChat(id)
  }
}
