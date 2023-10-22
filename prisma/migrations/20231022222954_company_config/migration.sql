-- CreateEnum
CREATE TYPE "currency_enum" AS ENUM ('brl', 'usd');

-- CreateTable
CREATE TABLE "common_company_config" (
    "id" SERIAL NOT NULL,
    "common_freight_config_id" INTEGER NOT NULL,

    CONSTRAINT "common_company_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "common_freight_config" (
    "id" SERIAL NOT NULL,
    "currency" "currency_enum" NOT NULL,

    CONSTRAINT "common_freight_config_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "common_company_config" ADD CONSTRAINT "common_company_config_common_freight_config_id_fkey" FOREIGN KEY ("common_freight_config_id") REFERENCES "common_freight_config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
