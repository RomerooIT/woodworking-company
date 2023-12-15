import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({ type: Number, nullable: false, required: false })
  @IsNumber()
  clientId: number;

  @ApiProperty({ type: Number, nullable: false, required: false })
  @IsNumber()
  productId: number;

  @ApiProperty({ type: String, nullable: false, required: false })
  @IsString()
  customerAddress: string;

  @ApiProperty({ type: Number, nullable: false, required: false, default: 1 })
  @IsNumber()
  amount: number;

  @ApiProperty({ type: String, nullable: false, required: false })
  @IsString()
  requirements?: string;
}