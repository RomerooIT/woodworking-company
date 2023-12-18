import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { WorkerService } from './worker.service';
import { WorkerEntity } from './worker.entity';
import { WorkerDto } from './input/worker.input';

@ApiTags('Worker')
@Controller('worker')
export class WorkerController {
  constructor(private workerService: WorkerService) {} 
  
  @Post()
  async createProduct(
    @Body() params: WorkerDto,
  ): Promise<WorkerEntity> {
    const { name, surname, age, salary, category, currentstate } = params;
  
    const worker: WorkerEntity = {
      name,
      surname, 
      age, 
      salary, 
      category, 
      currentstate
    };
  
    const result = await this.workerService.createWorker(worker);
    return result;
  }

  @Get()
  async getProducts(): Promise<WorkerEntity[]> {
    return this.workerService.getWorkers();
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() updatedWorker: WorkerDto): Promise<WorkerEntity> {
    if (!id) {
      throw new BadRequestException('Invalid id parameter');
    }

    const result = await this.workerService.updateWorker(id, updatedWorker);
    return result;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    if (!id) {
      throw new BadRequestException('Invalid id parameter');
    }

    await this.workerService.deleteWorker(id);
  }
}
