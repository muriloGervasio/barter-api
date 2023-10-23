import { FreightConfig } from './freight-config';

export class CompanyConfig {
  constructor(
    private readonly id: number,
    private readonly freightConfig: FreightConfig,
  ) {}

  getId() {
    return this.id;
  }

  getFreight() {
    return this.freightConfig;
  }
}
