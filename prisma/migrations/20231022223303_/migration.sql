/*
  Warnings:

  - A unique constraint covering the columns `[common_freight_config_id]` on the table `common_company_config` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "common_company_config_common_freight_config_id_key" ON "common_company_config"("common_freight_config_id");
