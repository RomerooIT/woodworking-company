import { Module } from '@nestjs/common';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';

@Module({
  controllers: [SupportController],
  exports: [SupportService],
  providers: [SupportService]
})

export class SupportModule {}