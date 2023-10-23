import { Destination } from './destination';
import { Origin } from './origin';

export class Freight {
  constructor(
    private readonly value: number,
    private readonly origin?: Origin,
    private readonly destination?: Destination,
  ) {}

  getValue() {
    return this.value;
  }

  getDestination() {
    return this.destination;
  }
}
