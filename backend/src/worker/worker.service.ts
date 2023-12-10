import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { WorkerEntity } from './worker.entity';

@Injectable()
export class WorkerService extends Repository<WorkerEntity> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(WorkerEntity, entityManager);
  }
}