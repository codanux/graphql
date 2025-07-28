import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class User {

  @Field(() => Int, { description: 'The unique identifier of the user' })
  id: number;

  @Field(() => String, { description: 'The name of the user' })
  name: string;

  @Field(() => String, { description: 'The email of the user' })
  email: string;

  @Field(type => [Post], { description: 'The posts created by the user' })
  posts: Post[];
  
}
