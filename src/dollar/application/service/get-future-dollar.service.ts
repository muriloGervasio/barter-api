import { Injectable } from '@nestjs/common';
import { GetDollarUseCase } from '../ports/in/get-dollar.use-case';
import { DollarRepository } from '../ports/out/dollar.repository';

@Injectable()
export class GetDollarService implements GetDollarUseCase {
  constructor(private readonly dollarRepository: DollarRepository) {}

  async execute(date: Date): Promise<number> {
    const dollar = await this.dollarRepository.getCurrent();

    return dollar.getFuture(date);
  }
}
