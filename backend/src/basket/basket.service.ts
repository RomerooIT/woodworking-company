import { Injectable } from '@nestjs/common';
import { BasketEntity } from './basket.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';

@Injectable()
export class BasketService extends Repository<BasketEntity> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(BasketEntity, entityManager);
  }
}