import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { OriginRequest } from './origin.request';
import { GetOriginUseCase } from 'src/freight/application/ports/in/get-origin.use-case';
import { Public } from 'nest-keycloak-connect';

@Resolver(() => OriginRequest)
@Public()
export class OriginResolver {
  constructor(private readonly getOrigin: GetOriginUseCase) {}

  @Query(() => OriginRequest)
  async origin(@Args('id') id: number) {
    const origin = await this.getOrigin.execute(id);
    return origin;
  }

  @ResolveField()
  async freights(@Parent() origin: OriginRequest) {
    console.log('FRETE');
    const { id } = origin;
    return [{ value: id }];
  }
}
