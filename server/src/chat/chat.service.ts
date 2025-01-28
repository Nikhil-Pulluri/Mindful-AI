import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chat } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma : PrismaService) {}


  async getAllChats() : Promise<Chat[]> {
    return this.prisma.chat.findMany()
  }

  async getChatsBYId(id :string) : Promise<Chat[]> {
    // id is the id of the user in the user model
    return this.prisma.chat.findMany({
      where : {id : id},
      include : {messages : true}
    })
  }

  async createChat(
    data : {userId : string, chatTitle : string}
  ) : Promise<Chat> {
    return this.prisma.chat.create(
      {
        data,
      }
    )
  }

  async deleteChat(id : string) : Promise<Chat> {
    return this.prisma.chat.delete(
      {
        where : {id : id}
      }
    )
  }

}
