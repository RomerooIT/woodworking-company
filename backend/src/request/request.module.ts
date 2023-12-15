import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { UsersModule } from 'src/users';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [UsersModule, ProductModule],
  controllers: [RequestController],
  exports: [RequestService],
  providers: [RequestService]
})

export class RequestModule {}