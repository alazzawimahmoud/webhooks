import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, FindConditions } from 'typeorm';
import { EventService } from '../event/event.service';
import { User } from './user.entity';
import { IUser } from './user.interface';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly eventService: EventService
  ) { }

  async checkIn(data: any): Promise<boolean> {
    // Check-in logic
    // ...

    // Handle event
    await this.eventService.checkIn(data);
    
    return true;
  }

  findOne(query: FindConditions<User>): Promise<User> {
    return this.userRepository.findOne(query);
  }

  async createUser(user: IUser): Promise<InsertResult> {
    try {
      const userEntity = this.userRepository.create(user);

      const res = await this.userRepository.insert(userEntity);

      Logger.log('createUser - Created user');

      return res;
    } catch (e) {
      Logger.log(e);
      throw e;
    }
  }
}