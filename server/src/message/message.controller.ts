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
      content: string,
      role: string
    }
  ) : Promise<Message> {
    return this.messageService.updateChat(body.chatId, body.content, body.role)
  }

  @Get(':id')
  async getChat(
    @Param('id') id : string 
  ) : Promise<{role : string ; content : string}[]> {
    return this.messageService.getChat(id)
  }
}
