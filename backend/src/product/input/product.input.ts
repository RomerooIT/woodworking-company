import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
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