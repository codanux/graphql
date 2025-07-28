import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('users')
export class UserController {

    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    @Get()
    findAll() {
        return this.prismaService.user.findMany({
            include: {
                posts: true,
            }
        });
    }
}
