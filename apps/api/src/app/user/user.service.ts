import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { IMessageType, IWebhookMessage, MessageTypes, WORKER_SERVICE_NAME } from '@webhooks/shared';
import { Repository, InsertResult, FindConditions } from 'typeorm';
import { User } from './user.entity';
import { IUser } from './user.interface';


@Injectable()
export class UserService {
  constructor(
    @Inject(WORKER_SERVICE_NAME)
    private readonly workerService: ClientProxy,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async checkIn(): Promise<boolean> {
    // Check-in logic
    
    // get client webhook config
    const webhookMessage: IWebhookMessage = {
      url: '',
      token: '',
      subscriptions: [],
      timestamp: new Date()
    };

    // send message
    this.workerService.send<IMessageType, IWebhookMessage>(MessageTypes.USER_CHECKED_IN, webhookMessage)
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