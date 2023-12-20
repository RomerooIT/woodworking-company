import {Body, Controller, Get, Param, Post, Put, UseGuards, Delete, BadRequestException, Req, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { SupportService } from './support.service';
import { SupportEntity } from './support.entity';
import { UsersService } from 'src/users';

@ApiTags('Support')
// @ApiBearerAuth()
// @UseGuards(AuthGuard)
@Controller('support')
export class SupportController {
  constructor(private supportService: SupportService, private readonly userService: UsersService) {} 

  @Post('/createMessage')
  async createRequest(
    @Query('clientId') clientId : number,
    @Query('message') message : string,
  ): Promise<SupportEntity> {

    const user = await this.userService.getById({userId: clientId})

    const messge: SupportEntity = {
     client: user.data,
     message,
    };
  
   const result = await this.supportService.createMessage(messge);

   return result
  }

  @Get('/getUserSupportDialog')
  async getUserSupportDialog(@Query('userId') clientId: number): Promise<SupportEntity[]> {
    return await this.supportService.getUserSupportDialog(clientId);
  }

  @Post('/createMessageToUser')
  async createMessageToUser(
    @Query('clientId') clientId : number,
    @Query('message') message : string,
    @Query('replyToClientId') replyToClient : number,
  ): Promise<SupportEntity> {

    const me = await this.userService.getById({userId: clientId})
    const user = await this.userService.getById({userId: replyToClient})

    const messageEnt: SupportEntity = {
     client: me.data,
     message,
     replyToClient: user.data,
    };
  
   const result = await this.supportService.createMessageToUser(messageEnt);

   return result
  }

  @Get('/getUserIdsWithActiveChat')
  async getUserIdsWithActiveChat(): Promise<any[]> {
    return await this.supportService.getActiveUserIdsChats();
  }
}