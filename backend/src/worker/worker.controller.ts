import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { WorkerService } from './worker.service';

@ApiTags('Worker')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {} 
}