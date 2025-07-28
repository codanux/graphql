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
      data: createPostInput,
    });
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return this.prismaService.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  remove(id: number) {
    return this.prismaService.post.delete({
      where: { id },
    });
  }
}
