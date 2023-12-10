import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { BasketService } from './basket.service';

@ApiTags('Basket')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {} 
}