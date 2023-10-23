import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/infrastructure/db/prisma/prisma.service';
import { OriginRepository } from 'src/freight/application/ports/out/origin.repository';
import { Origin } from 'src/freight/domain/origin';
import { OriginMapper } from './origin.mapper';

@Injectable()
export class OriginPrismaRepository implements OriginRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getOriginById(originId: number): Promise<Origin> {
    const origin = await this.prisma.freight_origin.findFirst({
      where: { id: originId },
      include: {
        city: true,
        freight_value: {
          include: {
            destiny: {
              include: {
                city: true,
              },
            },
          },
        },
      },
    });

    if (!origin) throw new Error('Origin not found');

    return OriginMapper.toDomain(origin);
  }
}
