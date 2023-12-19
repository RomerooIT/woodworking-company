import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';
import { UsersModule, UsersService } from 'src/users';

@Module({
  imports: [UsersModule],
  controllers: [SupportController],
  exports: [SupportService],
  providers: [SupportService]
})

export class SupportModule {}