import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
  controllers: [RequestController],
  exports: [RequestService],
  providers: [RequestService]
})

export class RequestModule {}