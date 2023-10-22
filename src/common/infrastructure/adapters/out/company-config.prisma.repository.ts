import { Inject, Injectable } from '@nestjs/common';
import { CompanyConfigRepository } from 'src/common/application/ports/out/company-config.repository';
import { CompanyConfig } from 'src/common/domain/company-config';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CompanyConfigMapper } from './company-config.mapper';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ECache } from 'src/common/application/types/cache.enum';
import { Cache } from 'cache-manager';

@Injectable()
export class CompanyConfigPrismaRepository implements CompanyConfigRepository {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly prisma: PrismaService,
  ) {}

  async getFreightConfig(): Promise<CompanyConfig> {
    const cachedConfig = await this.cacheManager.get<CompanyConfig>(
      ECache.COMPANY_CONFIG,
    );

    if (cachedConfig) return cachedConfig;

    const companyConfig = await this.prisma.common_company_config.findFirst({
      where: { id: 1 },
      include: { freight: true },
    });

    if (!companyConfig) throw new Error('Company config not found');

    const config = CompanyConfigMapper.toDomain(companyConfig);

    await this.cacheManager.set(ECache.COMPANY_CONFIG, config, 60 * 60);

    return config;
  }
}
