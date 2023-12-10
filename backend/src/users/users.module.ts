import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './repository';
import { UserRepository } from './repository/user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  imports: [],
  exports: [UsersService],
})
export class UsersModule {}
