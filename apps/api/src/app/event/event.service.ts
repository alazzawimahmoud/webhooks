import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
    IWebhookConfig, IMessageType, IWebhookMessage,
    MessageTypes, WORKER_SERVICE_NAME
} from '@webhooks/shared';


@Injectable()
export class EventService {
    constructor(
        @Inject(WORKER_SERVICE_NAME)
        private readonly workerService: ClientProxy,
    ) { }

    checkIn(data: any): void {
        Logger.log(`checkIn - processing check in ...`);

        // get client webhook config
        const clientWebhookConfig: IWebhookConfig = {
            url: '',
            token: '',
            subscriptions: ['USER_CHECKED_IN'],
        }

        // Check if client has subscribed to this topic
        if (!clientWebhookConfig.subscriptions.includes('USER_CHECKED_IN')) {
            return null;
        }

        // Create message
        const webhookMessage: IWebhookMessage = {
            data,
            config: clientWebhookConfig,
            timestamp: new Date()
        };

        // send message
        const operation = this.workerService.send<IMessageType, IWebhookMessage>(
            MessageTypes.USER_CHECKED_IN,
            webhookMessage
        )

        operation.toPromise()
            .then(() => {
                Logger.log(`checkIn - message sent`);
            })
            .catch((error) => {
                Logger.error(`checkIn - message not sent`);
            })
    }

}