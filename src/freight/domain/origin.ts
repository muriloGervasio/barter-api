import { City } from 'src/common/domain/city';
import { Freight } from './freight';

export class Origin {
  constructor(
    private readonly id: number,
    private readonly name: string,

    private readonly city: City,
    private readonly freights: Freight[],
  ) {}

  getFreights() {
    return this.freights;
  }

  getCity() {
    return this.city;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getFreightForDestination(destinationId: number) {
    return this.getFreights()
      .find((f) => f.getDestination().getId() === destinationId)
      .getValue();
  }
}
