-- CreateTable
CREATE TABLE "common_city" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "uf" VARCHAR(255) NOT NULL,
    "apiId" VARCHAR(255),

    CONSTRAINT "common_city_pkey" PRIMARY KEY ("id")
);
