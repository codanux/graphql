import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [UserResolver, UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
