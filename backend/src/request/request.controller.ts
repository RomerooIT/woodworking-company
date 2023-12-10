import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { RequestService } from './request.service';

@ApiTags('Request')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {} 
}