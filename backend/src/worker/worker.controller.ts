import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { WorkerService } from './worker.service';
import { WorkerEntity } from './worker.entity';
import { WorkerDto } from './input/worker.input';

@ApiTags('Worker')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {} 
  
  @Post()
  //@ApiConsumes('application/json')
  async createProduct(
    @Body() params: WorkerDto,
  ): Promise<WorkerEntity> {
    const {name, surname, age, salary, category, currentstate} = params
  
    const worker: WorkerEntity = {
      name,
      surname, 
      age, 
      salary, 
      category, 
      currentstate
    };
  
   const result = await this.workerService.createWorker(worker);
   return result
  }

  @Get()
  async getProducts(): Promise<WorkerEntity[]> {
    return this.workerService.getWorkers();
  }
}