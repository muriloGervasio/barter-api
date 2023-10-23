import { Module } from '@nestjs/common';
import { DollarRepository } from '../application/ports/out/dollar.repository';
import { DollarPrismaRepository } from './adapters/out/dollar.prisma-repository';
import { GetDollarUseCase } from '../application/ports/in/get-dollar.use-case';
import { GetDollarService } from '../application/service/get-future-dollar.service';

const dollarRepositoryProvider = {
  provide: DollarRepository,
  useClass: DollarPrismaRepository,
};

const getDollarUseCaseProvider = {
  provide: GetDollarUseCase,
  useClass: GetDollarService,
};

@Module({
  providers: [getDollarUseCaseProvider, dollarRepositoryProvider],
  exports: [getDollarUseCaseProvider, dollarRepositoryProvider],
})
export class DollarModule {}
