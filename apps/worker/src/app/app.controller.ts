import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { MessageTypes, IWebhookMessage } from '@webhooks/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(MessageTypes.USER_CHECKED_IN)
  async userCheckedIn(
    @Payload() payload: IWebhookMessage,
    @Ctx() context: RedisContext
  ) {
    
    Logger.log(`userCheckedIn - message received`);

    this.appService.sendWebhookMessage(payload);

    return true;
  }
}
