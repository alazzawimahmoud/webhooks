import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
    IWebhookConfig, IMessageType, IWebhookMessage,
    MessageTypes, WORKER_SERVICE_NAME
} from '@webhooks/shared';
import { CompanyService } from '../company/company.service';
import { IUser } from '../user/user.interface';
import { WebhookService } from '../webhook/webhook.service';


@Injectable()
export class EventService {
    constructor(
        @Inject(WORKER_SERVICE_NAME)
        private readonly workerService: ClientProxy,
        private readonly webhookService: WebhookService,

    ) { }

    async checkIn(user: Partial<IUser>): Promise<void> {
        Logger.log(`checkIn - processing check in ...`);

        // Mock user-company relation for the sack of this assignment
        const companyId = 1

        // Get webhook config
        const {
            url, token, subscriptions
        } = await this.webhookService.findOneByCompany(companyId);

        // Check if company has subscribed to this topic
        if (!subscriptions.includes('USER_CHECKED_IN')) {
            return null;
        }
        
        // Create message
        const webhookMessage: IWebhookMessage = {
            data: user,
            config: { url, token, subscriptions },
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