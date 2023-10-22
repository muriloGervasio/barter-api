import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
  PolicyEnforcementMode,
} from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    const config = this.configService.get('keycloak');
    if (!config) {
      throw new Error('Keycloak configuration not found');
    }
    return { ...config, policyEnforcement: PolicyEnforcementMode.PERMISSIVE };
  }
}
