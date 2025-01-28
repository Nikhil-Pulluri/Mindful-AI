import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(private prisma : PrismaService) {}

  async getAllChats() : Promise<Message[]> {
    return this.prisma.message.findMany()
  }

  async updateChat(chatId : string, message: string, isUser : boolean)
  {
    return this.prisma.message.create(
      {
        data: {
          chatId: chatId,
          message: message,
          isUser: isUser
        }
      }
    )
  }

  async getChat(chatId : string) : Promise<Message[]> {
    return this.prisma.message.findMany(
      {
        where: {
          chatId: chatId
        }
      }
    )
  }
}
