export abstract class GetDollarUseCase {
  abstract execute(date: Date): Promise<number>;
}
