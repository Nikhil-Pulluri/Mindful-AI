import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Message } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(private prisma : PrismaService) {}

  async getAllChats() : Promise<Message[]> {
    return this.prisma.message.findMany()
  }

  async updateChat(chatId : string, content: string, role: string)
  {
    console.log("update chat called")
    return this.prisma.message.create(
      {
        data: {
          chatId: chatId,
          content: content,
          role: role
        }
      }
    )
  }

  // async getChat(chatId : string) : Promise<Message[]> {
  //   return this.prisma.message.findMany(
  //     {
  //       where: {
  //         chatId: chatId
  //       }
  //     }
  //   )
  // }


  async getChat(chatId: string): Promise<{ role: string; content: string }[]> {
    const messages = await this.prisma.message.findMany({
      where: {
        chatId: chatId,
      },
      orderBy: {
        timestamp: 'asc', // Ensure messages are sorted by creation time
      },
    });
  
    // Map the database messages to the required structure
    return messages.map((message) => ({
      role: message.role === 'user' ? 'user' : 'assistant', // Map sender to 'role'
      content: message.content, // Use content directly
    }));
  }
  
}
