import { Controller, UseGuards, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { IUser } from './user.interface';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post('check-in')
  async checkIn(): Promise<boolean> {
    // Add check-in logic
    try {
      return await this.userService.checkIn();
    } catch (error) {

    }
    return true;
  }
}