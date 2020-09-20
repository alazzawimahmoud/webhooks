import { Controller, UseGuards, Get, Param, Post, Body, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IUser } from './user.interface';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post('check-in')
  async checkIn(@Body() data: any = {}): Promise<boolean> {
    // Add check-in logic
    
    Logger.log('checkIn - incoming check in');

    try {
      return await this.userService.checkIn(data);
    } catch (error) {

    }
    
    return true;
  }
}