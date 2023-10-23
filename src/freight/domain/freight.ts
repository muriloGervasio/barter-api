import { Destination } from './destination';
import { Origin } from './origin';

export class Freight {
  constructor(
    private readonly id: number,
    private readonly origin: Origin,
    private readonly destination: Destination,
    private readonly value: number,
  ) {}

  getValue() {
    return this.value;
  }

  getDestination() {
    return this.destination;
  }
}
