import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CompanyModule } from '../company/company.module';
import { CompanyService } from '../company/company.service';
import { WEBHOOK_CONFIG } from '../config';
import { WebhookModule } from '../webhook/webhook.module';
import { EventService } from './event.service';

@Module({
  imports: [
    ClientsModule.register(WEBHOOK_CONFIG),
    CompanyModule,
    WebhookModule
  ],
  providers: [EventService],
  exports:[EventService],
  controllers: [],
})
export class EventModule { }