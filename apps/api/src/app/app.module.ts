import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '@webhooks/shared';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPE_ORM_CONFIG, WEBHOOK_CONFIG } from './config';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    SharedModule,
    ClientsModule.register(WEBHOOK_CONFIG),
    TypeOrmModule.forRoot(TYPE_ORM_CONFIG),
    UserModule,
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
