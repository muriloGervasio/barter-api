import { Origin } from 'src/freight/domain/origin';

export abstract class GetOriginUseCase {
  abstract execute(originId: number): Promise<Origin>;
}
