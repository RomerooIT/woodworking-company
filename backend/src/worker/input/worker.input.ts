import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class WorkerDto {
  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  name: string;

  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  surname: string;

  @ApiProperty({ type: Number, nullable: false, required: true })
  @IsNumber()
  age: number;

  @ApiProperty({ type: Number, nullable: false, required: true })
  @IsNumber()
  salary: number;

  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  category: string;

  @ApiProperty({ type: String, nullable: false, required: true })
  @IsString()
  currentstate: string;
}