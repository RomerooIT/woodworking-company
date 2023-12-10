import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService extends Repository<ProductEntity> {
  constructor(@InjectEntityManager() entityManager: EntityManager) {
    super(ProductEntity, entityManager);
  }
}