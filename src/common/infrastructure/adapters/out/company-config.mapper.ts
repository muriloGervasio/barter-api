import { Prisma } from '@prisma/client';
import { CompanyConfig } from 'src/common/domain/company-config';
import { FreightConfig } from 'src/common/domain/freight-config';
import { IConfig } from '../../../domain/interface/config.interface';

type CompanyConfigSchema = Prisma.common_company_configGetPayload<{
  include: { freight: true };
}>;

export class CompanyConfigMapper {
  static toDomain(companyConfig: CompanyConfigSchema) {
    const freightConfig = new FreightConfig(
      companyConfig.freight.id,
      companyConfig.freight.currency,
    );

    return new CompanyConfig(companyConfig.id, freightConfig);
  }

  static toPersistence(companyConfig: CompanyConfig): CompanyConfigSchema {
    return {
      id: companyConfig.getId(),
      common_freight_config_id: companyConfig.getFreight().getId(),
      freight: {
        id: companyConfig.getFreight().getId(),
        currency: companyConfig.getFreight().getCurrency(),
      },
    };
  }

  static toConfig(companyConfig: CompanyConfig): IConfig {
    return {
      freight: {
        currency: companyConfig.getFreight().getCurrency(),
      },
    };
  }
}
