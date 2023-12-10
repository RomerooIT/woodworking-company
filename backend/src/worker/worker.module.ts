import { Module } from '@nestjs/common';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

@Module({
  controllers: [WorkerController],
  exports: [WorkerService],
  providers: [WorkerService]
})

export class WorkerModule {}