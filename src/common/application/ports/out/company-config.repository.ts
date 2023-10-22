import { CompanyConfig } from 'src/common/domain/company-config';

export abstract class CompanyConfigRepository {
  abstract getFreightConfig(): Promise<CompanyConfig>;
}
