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
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { CompanyConfigModule } from './common/infrastructure/server/adapters/company-config.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    PrismaModule,
    KeycloakModule,
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
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
