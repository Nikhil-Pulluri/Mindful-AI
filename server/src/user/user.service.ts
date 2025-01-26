import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}

  async getAllUsers() : Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async find_createUser(data: {name: string, email: string, image ?:string}) : Promise<User> { 
    const email = data.email;

    const user = await this.prisma.user.findUnique({
      where: {email: email}
    })

    if(user)
    {
      console.log('User already exists');
      return user;
    }

    else 
    {
      return this.prisma.user.create(
        {data,
        }
      )
    }
  }


  async findUserById(id: string) : Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {id : id}
    })

    if(user)
    {
      return user;
    }

    else 
    {
      throw new Error("User Not found")
    }
  }


  
}
