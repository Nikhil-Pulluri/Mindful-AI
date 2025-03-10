import { Controller } from '@nestjs/common';
import { Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Successful response', type: Object })
  async getAllUsers(): Promise<Object[]> {
    return this.userService.getAllUsers();
  }

  @Post('find-create')
  @ApiOperation({ summary: 'Find or create a user' })
  @ApiBody({ description: 'User creation or search payload', type: Object })
  @ApiResponse({ status: 201, description: 'User created or found successfully', type: Object })
  async find_createUser(
    @Body() body: { name: string; email: string; image?: string }
  ): Promise<Object> {
    return this.userService.find_createUser(body);
  }

  // @Get(':id')
  // async findUserById(
  //   @Param('id') id: string
  // ) : Promise<User>
  // {
  //   return this.userService.findUserById(id)
  // }

  @Get('email/:email')
  @ApiOperation({ summary: 'Find user by email' })
  @ApiParam({ name: 'email', type: String, description: 'The email of the user' })
  @ApiResponse({ status: 200, description: 'Successful response', type: Object })
  async findUserByEmail(
    @Param('email') email: string
  ): Promise<Object> {
    return this.userService.findUserByEmail(email);
  }

}
