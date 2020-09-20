import { IMessageData, MessageTypes } from './message.type';

export interface IWebhookConfig {
    url: string;
    token: string;
    subscriptions: MessageTypes[]
}

export interface IWebhookMessage extends IMessageData, IWebhookConfig { }