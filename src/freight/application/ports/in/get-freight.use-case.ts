export abstract class GetFreightValueUseCase {
  abstract execute(
    destinationId: number,
    originId: number,
    date: Date,
  ): Promise<number>;
}
