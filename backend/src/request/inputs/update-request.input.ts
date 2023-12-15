import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateRequestDto } from './create-request.input';

export class UpdateAdminRequestDto {
  @ApiProperty({ type: Number, nullable: false, required: false })
  @IsNumber()
  workerId: number;
}



export class UpdateUserRequestDto {
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