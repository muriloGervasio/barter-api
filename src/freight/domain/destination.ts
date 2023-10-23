import { City } from 'src/common/domain/city';
import { Freight } from './freight';

export class Destination {
  constructor(
    private readonly id: number,
    private readonly name: string,

    private readonly city?: City,
    private readonly freights?: Freight[],
  ) {}

  getId() {
    return this.id;
  }
}
