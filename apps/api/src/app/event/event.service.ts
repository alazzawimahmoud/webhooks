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

    async checkIn(data: any): Promise<boolean> {
        Logger.log(`checkIn - processing check in ...`);

        // get client webhook config
        const clientWebhookConfig: IWebhookConfig = {
            url: '',
            token: '',
            subscriptions: ['USER_CHECKED_IN'],
        }

        // Check if client has subscribed to this topic
        if (clientWebhookConfig.subscriptions.includes('USER_CHECKED_IN')) {
            return null;
        }

        // Create message
        const webhookMessage: IWebhookMessage = {
            data,
            config: clientWebhookConfig,
            timestamp: new Date()
        };

        // send message
        this.workerService.send<IMessageType, IWebhookMessage>(
            MessageTypes.USER_CHECKED_IN,
            webhookMessage
        );

        Logger.log(`checkIn - message sent: `);
        Logger.log(webhookMessage);

        return true;
    }

}