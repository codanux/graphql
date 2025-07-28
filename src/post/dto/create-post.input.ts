import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Title of the post' })
  title: string;

  @Field(() => Int, { description: 'ID of the author' })
  authorId: number;

  @Field(() => [Int], { description: 'Categories associated with the post' })
  categories: number[];
}
