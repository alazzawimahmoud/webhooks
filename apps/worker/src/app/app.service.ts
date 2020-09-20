import { Injectable, Logger } from '@nestjs/common';
import { IWebhookMessage } from '@webhooks/shared';
import { retry } from './app.utility';

@Injectable()
export class AppService {
  async sendWebhookMessage(message: IWebhookMessage) {
    await retry(async function () {
      try {
        // Execute sending 
        const { data, timestamp } = message
        const { url, token, subscriptions } = message.config;

        Logger.log(message);

      } catch (error) {

      }
    });
  }
}
