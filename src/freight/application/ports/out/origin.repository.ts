import { Origin } from 'src/freight/domain/origin';

export abstract class OriginRepository {
  abstract getOriginById(originId: number): Promise<Origin>;
}
