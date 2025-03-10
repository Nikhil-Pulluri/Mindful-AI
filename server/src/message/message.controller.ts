import { Controller, Get, Body, Post, Param} from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  @ApiOperation({ summary: 'Get all messages' })
  @ApiResponse({ status: 200, description: 'Successful response', type: Object })
  async getAllChats(): Promise<Object[]> {
    return this.messageService.getAllChats();
  }

  @Post('update')
  @ApiOperation({ summary: 'Update a message' })
  @ApiBody({ description: 'Message update payload', type: Object })
  @ApiResponse({ status: 200, description: 'Message updated successfully', type: Object })
  async updateChat(
    @Body() body: {
      chatId: string;
      content: string;
      role: string;
    }
  ): Promise<Object> {
    return this.messageService.updateChat(body.chatId, body.content, body.role);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get message by chat ID' })
  @ApiParam({ name: 'id', type: String, description: 'The ID of the chat' })
  @ApiResponse({ status: 200, description: 'Successful response', type: Object })
  async getChat(
    @Param('id') id: string
  ): Promise<Object[]> {
    return this.messageService.getChat(id);
  }
}
