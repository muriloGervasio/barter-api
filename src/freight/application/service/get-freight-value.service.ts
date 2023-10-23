import { Injectable } from '@nestjs/common';
import { GetFreightValueUseCase } from '../ports/in/get-freight.use-case';
import { OriginRepository } from '../ports/out/origin.repository';
import { Facade } from 'src/common/application/decorators/facade/facade.class';
import { GetCompanyConfigValueUseCase } from 'src/common/application/ports/in/get-company-config-value.use-case';
import { Config } from 'src/common/application/decorators/facade/company.decorator';
import { CompanyConfigValue } from 'src/common/application/decorators/facade/company-config.decorator';
import { DollarRepository } from 'src/dollar/application/ports/out/dollar.repository';

@Injectable()
@Config('freight.currency')
export class GetFreightValueService
  extends Facade<number>
  implements GetFreightValueUseCase
{
  constructor(
    private readonly getConfig: GetCompanyConfigValueUseCase,
    private readonly dollarRepository: DollarRepository,
    private readonly originRepository: OriginRepository,
  ) {
    super(getConfig);
  }

  @CompanyConfigValue('usd')
  async executeUsd(
    destinationId: number,
    originId: number,
    date: Date,
  ): Promise<number> {
    const dollar = await this.dollarRepository.getCurrent();
    const origin = await this.originRepository.getOriginById(originId);

    return dollar
      .setCurrency('usd')
      .setValue(origin.getFreightForDestination(destinationId))
      .toUSD(date);
  }

  @CompanyConfigValue('brl')
  async executeBrl(
    destinationId: number,
    originId: number,
    date: Date,
  ): Promise<number> {
    const dollar = await this.dollarRepository.getCurrent();
    const origin = await this.originRepository.getOriginById(originId);

    return dollar
      .setCurrency('brl')
      .setValue(origin.getFreightForDestination(destinationId))
      .toUSD(date);
  }
}
