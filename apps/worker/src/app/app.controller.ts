import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { MessageTypes, IMessageData } from '@webhooks/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(MessageTypes.USER_CHECKED_IN)
  async userCheckedIn(
    @Payload() payload: IMessageData,
    @Ctx() context: RedisContext
  ) {
    // Process incoming message.
    return null;
  }
}
