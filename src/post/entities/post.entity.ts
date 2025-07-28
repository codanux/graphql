import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Title of the post' })
  title: string;

  @Field(() => String, { description: 'Content of the post' })
  content: string;

  @Field(() => Int, { description: 'ID of the author' })
  authorId: number;

  @Field(() => User, { description: 'Author of the post' })
  author: User;

  @Field(() => [Category], { description: 'Category of the post' })
  categories: Category[];
}
