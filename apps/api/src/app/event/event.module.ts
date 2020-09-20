import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { WEBHOOK_CONFIG } from '../config';
import { EventService } from './event.service';

@Module({
  imports: [
    ClientsModule.register(WEBHOOK_CONFIG),
  ],
  providers: [EventService],
  exports:[EventService],
  controllers: [],
})
export class EventModule { }