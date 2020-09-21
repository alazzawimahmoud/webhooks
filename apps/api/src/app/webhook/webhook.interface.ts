import { IWebhookConfig } from '@webhooks/shared';

export interface IWebhook extends IWebhookConfig {
  id: number;
  name: string;
}

export interface ICreateWebhook extends IWebhookConfig {
  name: string
}
