import { InputType, Int, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'The name of the user' })
  name: string;

  @Field(() => String, { description: 'The email of the user' })
  email: string;

}
