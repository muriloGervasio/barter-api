-- CreateTable
CREATE TABLE "freight_origin" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "common_city_id" INTEGER NOT NULL,

    CONSTRAINT "freight_origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freight_destination" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "common_city_id" INTEGER NOT NULL,

    CONSTRAINT "freight_destination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "freight_value" (
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" DOUBLE PRECISION NOT NULL,
    "currency" "currency_enum" NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "freight_originId" INTEGER NOT NULL,
    "freight_destinationId" INTEGER NOT NULL,

    CONSTRAINT "freight_value_pkey" PRIMARY KEY ("freight_originId","freight_destinationId","month","year")
);

-- AddForeignKey
ALTER TABLE "freight_origin" ADD CONSTRAINT "freight_origin_common_city_id_fkey" FOREIGN KEY ("common_city_id") REFERENCES "common_city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freight_destination" ADD CONSTRAINT "freight_destination_common_city_id_fkey" FOREIGN KEY ("common_city_id") REFERENCES "common_city"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freight_value" ADD CONSTRAINT "freight_value_freight_originId_fkey" FOREIGN KEY ("freight_originId") REFERENCES "freight_origin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freight_value" ADD CONSTRAINT "freight_value_freight_destinationId_fkey" FOREIGN KEY ("freight_destinationId") REFERENCES "freight_destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
