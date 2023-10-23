import { PrismaClient } from '@prisma/client';
import * as cities from './city.json';

export async function seedCity(prisma: PrismaClient) {
  await prisma.common_city.createMany({
    data: cities,
  });
}
