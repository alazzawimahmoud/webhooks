import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { IWebhookMessage } from '@webhooks/shared';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @HttpCode(400)
  @Post('test')
  async test(@Body() data: IWebhookMessage) {
    Logger.log('test - data received');
    return data;
  }
}
