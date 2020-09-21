import { Controller, UseGuards, Get, Param, Post, Body, Logger, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post('check-in')
  async checkIn(@Body() user: Partial<IUser>): Promise<boolean> {
    // Add check-in logic
    Logger.log('checkIn - incoming check in');
    
    try {
      return await this.userService.checkIn(user);
    } catch (error) {
    }
  }

  @HttpCode(400)
  @Post('test')
  async test(@Body() data: any): Promise<boolean> {
    Logger.log('test - data received');
    return data;
  }
}