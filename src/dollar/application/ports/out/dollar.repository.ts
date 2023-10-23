import { Dollar } from '../../../domain/dollar';

export abstract class DollarRepository {
  abstract getCurrent(): Promise<Dollar>;
}
