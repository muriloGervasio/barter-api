import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FreightRequest } from './freight.request';

@ObjectType()
export class OriginRequest {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [FreightRequest])
  freights: FreightRequest[];
}
