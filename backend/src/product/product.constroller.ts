import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateProductDto {
  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  material: string;

  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  materialtType: string;

  @ApiProperty({ type: Number, nullable: false, required: true })
  @IsNumber()
  price: number;
}


@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  //@ApiConsumes('application/json')
  async createProduct(
    @Body() params: CreateProductDto,
  ): Promise<ProductEntity> {
    const {material, materialtType, price} = params

    console.log(params.materialtType)
  
    if (isNaN(price)) {
      throw new BadRequestException('Invalid price value');
    }
  
    const product: ProductEntity = {
      material,
      materialtype: materialtType,
      price: price
    };
  
   const result = await this.productService.createProduct(product);
   return result
  }

  @Get()
  async getProducts(): Promise<ProductEntity[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  async getProduct(@Param('id') id: number): Promise<ProductEntity> {
    return this.productService.getProduct(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() product: ProductEntity
  ): Promise<ProductEntity> {
    product.id = id;
    return this.productService.updateProduct(product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}