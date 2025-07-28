import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  create(createPostInput: CreatePostInput) {
    return this.prismaService.post.create({
      data: {
        title: createPostInput.title,
        authorId: createPostInput.authorId,
        categories: {
          connect: createPostInput.categories.map(id => ({ id }))
        },
      },
      include: {
        categories: true,
        author: true,
      },
    });
  }

  findAll() {
    return this.prismaService.post.findMany({
      include: {
        categories: true,
        author: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
      include: {
        categories: true,
        author: true,
      },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
