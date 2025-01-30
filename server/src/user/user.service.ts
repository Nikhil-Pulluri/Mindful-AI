import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatService } from 'src/chat/chat.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService,
    private chatService : ChatService){}

  async getAllUsers() : Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async find_createUser(data: { name: string; email: string; image?: string }): Promise<User> {
    const email = data.email;
  
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
  
    if (existingUser) {
      console.log('User already exists');
      return existingUser;
    }
  
    const newUser = await this.prisma.user.create({
      data,
    });
  
    try {
      await this.chatService.createChat({
        userId: newUser.id,
        chatTitle: 'General Chat',
      });
    } catch (error) {
      console.error('Error creating chat for user:', error);
    }
  
    return newUser;
  }
  


  // async findUserById(id: string) : Promise<User> {
  //   const user = await this.prisma.user.findUnique({
  //     where: {id : id}
  //   })

  //   if(user)
  //   {
  //     return user;
  //   }

  //   else 
  //   {
  //     throw new Error("User Not found")
  //   }
  // }


  async findUserByEmail(email : string) : Promise<User> {
    console.log("User by email called")
    const user =  this.prisma.user.findUnique({
      where: {email : email},
      include: {chats: true},
    })

    if(user)
    {
      return user;
    }

    else throw error("User not found")
  }


  
}
