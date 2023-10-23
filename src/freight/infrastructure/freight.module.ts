import { Module } from '@nestjs/common';
import { OriginRepository } from '../application/ports/out/origin.repository';
import { OriginPrismaRepository } from './adapters/out/origin.prisma-repository';
import { GetOriginUseCase } from '../application/ports/in/get-origin.use-case';
import { getOriginById } from '../application/service/get-origin.service';
import { OriginResolver } from './adapters/in/origin.resolver';

@Module({
  providers: [
    { provide: OriginRepository, useClass: OriginPrismaRepository },
    {
      provide: GetOriginUseCase,
      useClass: getOriginById,
    },
    OriginResolver,
  ],
  imports: [],
})
export class FreightModule {}
