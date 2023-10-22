import { FreightConfig } from './freight-config';

export class CompanyConfig {
  constructor(
    private readonly id: number,
    private readonly freightConfig: FreightConfig,
  ) {}

  getConfig(configPath: string) {
    return configPath.split('.').reduce((acc, part) => {
      if (acc) {
        return typeof acc[part] === 'function' ? acc[part]() : acc[part];
      }
    }, this);
  }

  getId() {
    return this.id;
  }

  getFreight() {
    return this.freightConfig;
  }
}
