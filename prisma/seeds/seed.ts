import { PrismaClient } from '@prisma/client';
import { seedCity } from './city/city.seed';
const prisma = new PrismaClient();

async function main() {
  await seedCity(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
