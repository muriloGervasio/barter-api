import { Global, Module } from '@nestjs/common';
import { GetCompanyConfigValueUseCase } from 'src/common/application/ports/in/get-company-config-value.use-case';
import { CompanyConfigRepository } from 'src/common/application/ports/out/company-config.repository';
import { GetCompanyConfigService } from 'src/common/application/services/get-company-config.service';
import { CompanyConfigPrismaRepository } from '../../adapters/out/company-config.prisma.repository';

@Global()
@Module({
  providers: [
    {
      provide: GetCompanyConfigValueUseCase,
      useClass: GetCompanyConfigService,
    },
    {
      provide: CompanyConfigRepository,
      useClass: CompanyConfigPrismaRepository,
    },
  ],
  exports: [],
})
export class CompanyConfigModule {}
