import { GetCompanyConfigValueUseCase } from '../../ports/in/get-company-config-value.use-case';

export class Facade<T> {
  constructor(private readonly companyConfig: GetCompanyConfigValueUseCase) {}

  async execute(): Promise<T> {
    const exec = Reflect.getMetadata('executor', this);
    const configPath = Reflect.getMetadata('companyConfig', this);

    const config = await this.companyConfig.execute(configPath);

    return exec.get(config)();
  }
}
