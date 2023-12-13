import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { WorkerEntity } from './worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @InjectEntityManager() private entityManager: EntityManager
  ) {}

  async createWorker(worker: WorkerEntity): Promise<WorkerEntity> {
    const query = `
      INSERT INTO "Worker" (name, surname, age, salary, category, currentState)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [worker.name, worker.surname, worker.age, worker.salary, worker.category, worker.currentState];
    const result = await this.entityManager.query(query, values);
    return result[0];
  }


  async getWorkers(): Promise<WorkerEntity[]> {
    const query = `
      SELECT * FROM "Worker"
    `;
    const result = await this.entityManager.query(query);
    return result;
  }
}