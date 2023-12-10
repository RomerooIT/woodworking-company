import { BadRequestException, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { UserRepository } from '../repository/user.repository';
import {
  GetUserByNameParams,
  CreateUserParams,
  GetUserByIdParams,
  UpdateUserParams,
  UpdateUserResult,
} from './users-service.types';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async createUser(params: CreateUserParams) {
    const newUser = this.usersRepository.create({
      ...params,
    });

    const user = await this.usersRepository.save(newUser);

    return {
      data: user,
    };
  }


  async getById(params: GetUserByIdParams) {
    const { userId } = params;

    const user = await this.usersRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new BadRequestException(`user with id <${userId}> not found`);
    }

    return {
      data: user,
    };
  }

  async getByName(params:GetUserByNameParams){
    const { name } = params;

    const user = await this.usersRepository.findOne({ where: { name: name } });
    if (!user) {
      throw new BadRequestException(`user with name <${name}> not found`);
    }

    return {
      data: user,
    };
    
  }
}
