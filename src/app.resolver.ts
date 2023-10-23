import { Query, Resolver } from '@nestjs/graphql';
import { Public } from 'nest-keycloak-connect';

@Resolver()
@Public()
export class AppResolver {
  @Query(() => String)
  hello() {
    return 'Hello World';
  }
}
