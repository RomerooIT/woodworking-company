import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { SupportEntity } from './support.entity';

@Injectable()
export class SupportService {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {}


  async createMessage(message: SupportEntity): Promise<SupportEntity> {
    try {
      const query = `
        INSERT INTO "Support" ("clientId", "message")
        VALUES ($1, $2)
        RETURNING *
      `;
      const values = [
        message.client.id,
        message.message,
      ];
      const result = await this.entityManager.query(query, values);
  
      return result[0];
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating a message.');
    }
  }

  async getUserSupportDialog(userId: number): Promise<SupportEntity[]> {
    const query = `
      SELECT *
      FROM "Support" r
      WHERE r."clientId" = $1 OR r."replyToClientId" = $1
    `;
    const values = [userId];
    const result = await this.entityManager.query(query, values);
    return result;
  }

  async createMessageToUser(message: SupportEntity): Promise<SupportEntity> {
    try {
      const query = `
        INSERT INTO "Support" ("clientId", "message", "replyToClientId")
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const values = [
        message.client.id,
        message.message,
        message.replyToClient.id,
      ];
      const result = await this.entityManager.query(query, values);
  
      return result[0];
    } catch (error) {
      console.error(error);
      throw new Error('An error occurred while creating a message.');
    }
  }
}