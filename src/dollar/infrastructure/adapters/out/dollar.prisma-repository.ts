import { Injectable } from '@nestjs/common';
import { DollarRepository } from 'src/dollar/application/ports/out/dollar.repository';
import { Dollar } from 'src/dollar/domain/dollar';

@Injectable()
export class DollarPrismaRepository implements DollarRepository {
  constructor() {}

  async getCurrent(): Promise<any> {
    return new Dollar(5.5);
  }
}
