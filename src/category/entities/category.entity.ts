import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class Category {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Name of the category' })
  name: string;

  @Field(() => [Post], { description: 'Posts associated with the category' })
  posts: Post[];
}
  