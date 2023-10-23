export class Dollar {
  constructor(
    private readonly spot: number,
    private currency: 'usd' | 'brl' = 'usd',
    private value = 0,
  ) {}

  getSpot() {
    return this.spot;
  }

  getFuture(date: Date) {
    if (date.getTime() < new Date().getTime()) throw new Error('Invalid date');

    return this.spot;
  }

  setCurrency(currency: 'usd' | 'brl') {
    this.currency = currency;

    return this;
  }

  setValue(value: number) {
    this.value = value;

    return this;
  }

  toBRL(date: Date) {
    return this.currency === 'brl'
      ? this.value
      : this.value * this.getFuture(date);
  }

  toUSD(date: Date) {
    return this.currency === 'usd'
      ? this.value
      : this.value / this.getFuture(date);
  }
}
