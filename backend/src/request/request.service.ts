import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { RequestEntity } from './request.entity';
import { UpdateAdminRequestDto, UpdateUserRequestDto } from './inputs/update-request.input';

@Injectable()
export class RequestService {
  constructor(
    @InjectEntityManager() private entityManager: EntityManager
  ) {}

  async createRequest(request: RequestEntity): Promise<RequestEntity> {
    try {
      const query = `
        INSERT INTO "Request" ("clientId", "productId", "customerAddress", "amount", "requirements")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const values = [
        request.client.id,
        request.product.id,
        request.customerAddress,
        request.amount,
        request.requirements,
      ];
      const result = await this.entityManager.query(query, values);
  
      return result[0];
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating a request.');
    }
  }
  

  async getRequest(id: number): Promise<RequestEntity> {
    const query = `
      SELECT * FROM "Request"
      WHERE id = $1
    `;
    const values = [id];
    const result = await this.entityManager.query(query, values);
    return result[0];
  }

  async getRequests(): Promise<RequestEntity[]> {
    const query = `
      SELECT * FROM "Request"
    `;
    const result = await this.entityManager.query(query);
    return result;
  }

  async updateUserRequest(id: number, updateRequestDto: UpdateUserRequestDto): Promise<RequestEntity> {
    const currentRequest = await this.getRequest(id);

    if (!currentRequest) {
        throw new NotFoundException(`Request with id ${id} not found`);
    }

    const { amount, customerAddress, requirements} = updateRequestDto;

    const query = `
        UPDATE "request"
        SET amount = $1, customerAddress = $2, requirements = $3
        WHERE id = $4
        RETURNING *
    `;

    const values = [amount || currentRequest.amount, customerAddress || currentRequest.customerAddress, requirements || currentRequest.requirements, id];

    const result = await this.entityManager.query(query, values);

    if (result.length > 0) {
        return result[0];
    } else {
        throw new NotFoundException(`Request with id ${id} not found after update`);
    }
}

  async updateAdminRequest(id: number, updateRequestDto: UpdateAdminRequestDto): Promise<RequestEntity> {
    const currentRequest = await this.getRequest(id);

    if (!currentRequest) {
        throw new NotFoundException(`Request with id ${id} not found`);
    }

    const { workerId } = updateRequestDto;

    const query = `
        UPDATE "request"
        SET workerId = $1,
        WHERE id = $2
        RETURNING *
    `;

    const values = [ workerId || currentRequest.worker, id];

    const result = await this.entityManager.query(query, values);

    if (result.length > 0) {
        return result[0];
    } else {
        throw new NotFoundException(`Request with id ${id} not found after update`);
    }
  }


  async deleteRequest(id: number): Promise<void> {
    const query = `
      DELETE FROM "Request"
      WHERE id = $1
    `;
    const values = [id];
    await this.entityManager.query(query, values);
  }

  async getAllUserRequests(userId: number): Promise<RequestEntity[]> {
    const query = `
      SELECT *
      FROM "Request" r
      WHERE r."clientId" = $1
    `;
    const values = [userId];
    const result = await this.entityManager.query(query, values);
    return result;
  }
}
