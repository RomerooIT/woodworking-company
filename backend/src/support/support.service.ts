import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { SupportEntity } from './support.entity';

@Injectable()
export class SupportService extends Repository<SupportEntity> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(SupportEntity, entityManager);
  }
}