import { Origin } from 'src/freight/domain/origin';
import { GetOriginUseCase } from '../ports/in/get-origin.use-case';
import { OriginRepository } from '../ports/out/origin.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class getOriginById implements GetOriginUseCase {
  constructor(private readonly originRepository: OriginRepository) {}
  async execute(originId: number): Promise<Origin> {
    return this.originRepository.getOriginById(originId);
  }
}
