import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException, Req, Query  } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { RequestService } from './request.service';
import { CreateRequestDto } from './inputs/create-request.input';
import { RequestEntity } from './request.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import { UsersService } from 'src/users';
import { ProductService } from 'src/product/product.service';
import { UpdateAdminRequestDto, UpdateUserRequestDto } from './inputs/update-request.input';

@ApiTags('Request')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService, private readonly userService: UsersService, private readonly productService: ProductService) {} 

  @Post()
  async createRequest(
    @Body() params: CreateRequestDto,
  ): Promise<RequestEntity> {
    const {amount, clientId, customerAddress, productId, requirements} = params

    const user = await this.userService.getById({userId: clientId})

    const product = await this.productService.getProduct(productId)

    const request: RequestEntity = {
     amount,
     client: user.data,
     customerAddress,
     product, 
     requirements, 
    };
  
   const result = await this.requestService.createRequest(request);

   return result
  }

  @Get('/getUserRequests')
  async getRequests(@Query('userId') clientId: number): Promise<RequestEntity[]> {
    return await this.requestService.getAllUserRequests(clientId);
  }

  @Get('/getAllRequests')
  async getAllRequests(): Promise<RequestEntity[]> {
    return this.requestService.getRequests();
  }

  @Put('/putForUsers')
    async updateRequest(@Param('id') id: number, @Body() updateRequestDto: UpdateUserRequestDto) {
        const currentRequest = await this.requestService.getRequest(id);
        if (!currentRequest) {
            return null;
        }
        return this.requestService.updateUserRequest( id,{
            ...currentRequest,
            ...updateRequestDto,
        });
    }


  @Put('/putForAdmins')
  async updateUserRequest(@Param('id') id: number, @Body() updateRequestDto: UpdateAdminRequestDto) {
      const currentRequest = await this.requestService.getRequest(id);
      if (!currentRequest) {
          return null;
      }
      return this.requestService.updateAdminRequest( id,{
          ...currentRequest,
          ...updateRequestDto,
      });
  }

  @Delete(':id')
  async deleteRequest(@Param('id') id: number): Promise<void> {
    return this.requestService.deleteRequest(id);
  }
}
