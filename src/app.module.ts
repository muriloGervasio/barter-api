import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './common/infrastructure/db/prisma/prisma.service';
import { KeycloakModule } from './common/infrastructure/server/keycloak/keycloak.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakConfigService } from './common/infrastructure/server/keycloak/keycloak.config';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './common/infrastructure/server/config/configuration';
import { APP_GUARD } from '@nestjs/core';
import { CompanyConfigModule } from './common/infrastructure/server/adapters/company-config.module';
import { CacheModule } from '@nestjs/cache-manager';
import { DollarModule } from './dollar/infrastructure/dollar.module';
import { FreightModule } from './freight/infrastructure/freight.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    PrismaModule,
    KeycloakModule,
    FreightModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),

    DollarModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 5,
      max: 10,
    }),
    CompanyConfigModule,
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [ConfigModule, KeycloakModule],
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [
    AppResolver,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
