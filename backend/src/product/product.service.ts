import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductDto } from './input/product.input';


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

  async updateProduct(id: number, updateProductDto: ProductDto): Promise<ProductEntity> {
    const currentProduct = await this.getProduct(id);

    if (!currentProduct) {
        throw new NotFoundException(`Product with id ${id} not found`);
    }

    const { material, materialType, price } = updateProductDto;

    const query = `
        UPDATE "Product"
        SET material = $1, materialtype = $2, price = $3
        WHERE id = $4
        RETURNING *
    `;

    const values = [material || currentProduct.material, materialType || currentProduct.materialtype, price || currentProduct.price, id];

    const result = await this.entityManager.query(query, values);

    if (result.length > 0) {
        return result[0];
    } else {
        throw new NotFoundException(`Product with id ${id} not found after update`);
    }
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