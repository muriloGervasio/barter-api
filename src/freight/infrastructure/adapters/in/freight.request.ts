import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FreightRequest {
  @Field(() => Int)
  value: number;
}
