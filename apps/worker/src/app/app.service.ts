import { HttpService, Injectable, Logger } from '@nestjs/common';
import { IWebhookMessage } from '@webhooks/shared';
import { MAX_ATTEMPTS, retry } from './app.utility';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) { }
  sendWebhookMessage(message: IWebhookMessage) {
    let _attemptNum = 0;
    retry(async ({ attemptNum }) => {
      _attemptNum = attemptNum + 1;
      Logger.log(`sendWebhookMessage - processing incoming message | attempt: ${attemptNum + 1}/${MAX_ATTEMPTS}`);

      // Execute sending 
      const { data, timestamp } = message
      const { url, token, subscriptions } = message.config;

      // Fake test
      return this.httpService.post('http://localhost:4000/api/test', data).toPromise();
    })
      .then(() => Logger.log(`sendWebhookMessage - webhook message sent after ${_attemptNum} attempts`))
      .catch(() => Logger.error(`sendWebhookMessage - webhook message sending failed after ${_attemptNum} attempts`))
  }
}
