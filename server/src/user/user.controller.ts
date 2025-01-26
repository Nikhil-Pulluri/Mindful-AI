import { Controller } from '@nestjs/common';
import { Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() : Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Post('find-create')
  async find_createUser(
    @Body() body: {name: string, email: string, image? : string} 
  ) : Promise<User> {
    return this.userService.find_createUser(body)
  }


  @Get(':id')
  async findUserById(
    @Param('id') id: string
  ) : Promise<User>
  {
    return this.userService.findUserById(id)
  }

}
