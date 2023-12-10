import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { ProductService } from './product.service';

@ApiTags('Product')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {} 
}