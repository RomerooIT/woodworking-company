import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';


@Injectable()
export class ProductService {
  constructor(
    @InjectEntityManager() private entityManager: EntityManager
  ) {}

  async createProduct(product: ProductEntity): Promise<ProductEntity> {
    const query = `
      INSERT INTO "Product" (material, materialtype, price)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [product.material, product.materialtype, product.price];
    const result = await this.entityManager.query(query, values);
    return result[0];
  }

  async getProduct(id: number): Promise<ProductEntity> {
    const query = `
      SELECT * FROM "Product"
      WHERE id = $1
    `;
    const values = [id];
    const result = await this.entityManager.query(query, values);
    return result[0];
  }

  async getProducts(): Promise<ProductEntity[]> {
    const query = `
      SELECT * FROM "Product"
    `;
    const result = await this.entityManager.query(query);
    return result;
  }

  async updateProduct(product: ProductEntity): Promise<ProductEntity> {
    const query = `
      UPDATE "Product"
      SET material = $1, materialtype = $2, price = $3
      WHERE id = $4
      RETURNING *
    `;
    const values = [product.material, product.materialtype, product.price, product.id];
    const result = await this.entityManager.query(query, values);
    return result[0];
  }

  async deleteProduct(id: number): Promise<void> {
    const query = `
      DELETE FROM "Product"
      WHERE id = $1
    `;
    const values = [id];
    await this.entityManager.query(query, values);
  }
}