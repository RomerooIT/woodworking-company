import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { RequestEntity } from './request.entity';

@Injectable()
export class RequestService extends Repository<RequestEntity> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(RequestEntity, entityManager);
  }
}