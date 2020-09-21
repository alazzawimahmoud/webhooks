import { Controller, UseGuards, Get, Param, Post, Body, Logger, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post('check-in')
  async checkIn(@Body() _user: Partial<IUser>): Promise<boolean> {
    // Add check-in logic

    // Mocking data
    const user : Partial<IUser> = {
      id: 1,
      username: 'User',
      email: 'user@email.com',
    }

    Logger.log('checkIn - incoming check in');
    
    try {
      return await this.userService.checkIn(user);
    } catch (error) {
    }
  }
}