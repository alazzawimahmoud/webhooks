import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '@webhooks/shared';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TYPE_ORM_CONFIG, WEBHOOK_CONFIG } from './config';

@Module({
  imports: [SharedModule,
    ClientsModule.register(WEBHOOK_CONFIG),
    TypeOrmModule.forRoot(TYPE_ORM_CONFIG)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
