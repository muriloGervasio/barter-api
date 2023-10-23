import { Prisma } from '@prisma/client';
import { City } from 'src/common/domain/city';
import { Destination } from 'src/freight/domain/destination';
import { Freight } from 'src/freight/domain/freight';
import { Origin } from 'src/freight/domain/origin';

type OriginSchema = Prisma.freight_originGetPayload<{
  include: {
    city: true;
    freight_value: {
      include: {
        destiny: true;
      };
    };
  };
}>;

export class OriginMapper {
  static toDomain(from: OriginSchema): Origin {
    const freights = from.freight_value.map(
      (f) =>
        new Freight(
          f.value,
          undefined,
          new Destination(f.destiny.id, f.destiny.name),
        ),
    );

    return new Origin(
      from.id,
      from.name,
      new City(from.id, from.city.name, from.city.uf, from.city.apiId),
      freights,
    );
  }
}
