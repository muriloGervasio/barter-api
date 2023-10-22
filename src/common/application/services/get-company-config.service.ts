import { Injectable } from '@nestjs/common';
import { GetCompanyConfigValueUseCase } from '../ports/in/get-company-config-value.use-case';
import { CompanyConfigRepository } from '../ports/out/company-config.repository';

@Injectable()
export class GetCompanyConfigService implements GetCompanyConfigValueUseCase {
  constructor(
    private readonly companyConfigRepository: CompanyConfigRepository,
  ) {}

  async execute(configPath: string): Promise<string> {
    const companyConfig = await this.companyConfigRepository.getFreightConfig();

    return companyConfig.getConfig(configPath);
  }
}
