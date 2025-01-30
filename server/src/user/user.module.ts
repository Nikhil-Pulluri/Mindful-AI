import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatModule } from 'src/chat/chat.module';

@Module({
  imports : [ChatModule],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {
}
