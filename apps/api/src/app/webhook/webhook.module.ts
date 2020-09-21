import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webhook } from './webhook.entity';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Webhook])
  ],
  providers: [WebhookService],
  controllers: [WebhookController],
})
export class WebhookModule { }