import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from '@prisma/client';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  @ApiOperation({ summary: 'Get all chats' })
  @ApiResponse({ status: 200, description: 'Successful response', type: [Object] })
  async getAllchats(): Promise<Chat[]> {
    return this.chatService.getAllChats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get chats by user ID' })
  @ApiParam({ name: 'id', type: String, description: 'The ID of the user' })
  @ApiResponse({ status: 200, description: 'Successful response', type: [Object] })
  @ApiResponse({ status: 404, description: 'Chats not found' })
  async getChatsById(
    // id is the id of the user in the user model
    @Param('id') id: string
  ): Promise<Chat[]> {
    return this.chatService.getChatsBYId(id);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new chat' })
  @ApiBody({ description: 'Chat creation payload', type: Object })
  @ApiResponse({ status: 201, description: 'Chat created successfully', type: Object })
  async createChat(
    @Body() body: { userId: string; chatTitle: string }
  ): Promise<Chat> {
    return this.chatService.createChat(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a chat' })
  @ApiParam({ name: 'id', type: String, description: 'The ID of the chat to be deleted' })
  @ApiResponse({ status: 200, description: 'Chat deleted successfully', type: Object })
  @ApiResponse({ status: 404, description: 'Chat not found' })
  async deleteChat(
    @Param('id') id: string
  ): Promise<Chat> {
    return this.chatService.deleteChat(id);
  }
}
