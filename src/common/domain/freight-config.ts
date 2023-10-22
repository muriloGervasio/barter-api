export class FreightConfig {
  constructor(
    private readonly id: number,
    private readonly currency: 'usd' | 'brl',
  ) {}

  getCurrency() {
    return this.currency;
  }

  getId() {
    return this.id;
  }
}
