import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { ProductDto } from './input/product.input';



@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  //@ApiConsumes('application/json')
  async createProduct(
    @Body() params: ProductDto,
  ): Promise<ProductEntity> {
    const {material, materialType, price} = params

    console.log(params.materialType)
  
    if (isNaN(price)) {
      throw new BadRequestException('Invalid price value');
    }
  
    const product: ProductEntity = {
      material,
      materialtype: materialType,
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

  @Put('/:id')
    async updateProduct(@Param('id') id: number, @Body() productDto: ProductDto) {

        const currentProduct = await this.productService.getProduct(id);
        if (!currentProduct) {
            return null;
        }
        return this.productService.updateProduct( id,{
            ...currentProduct,
            ...productDto,
        });
    }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}