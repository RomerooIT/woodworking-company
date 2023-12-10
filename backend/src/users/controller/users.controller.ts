import { Body, Controller, Get, Param, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

import { UsersService } from '../repository';
import { UpdateUserInput } from './update-user.input';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/:userId')
  async getUserById(@Param('userId') userId: string) {
    const { data } = await this.usersService.getById({ userId: +userId });

    return data;
  }


  @Get('/:name/username')
  async getUserByName(@Param('name') name: string) {
    const { data } = await this.usersService.getByName({ name: name });
    return data;
  }
}
