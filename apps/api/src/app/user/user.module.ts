import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule } from '@nestjs/microservices';
import { WEBHOOK_CONFIG } from '../config';
import { EventModule } from '../event/event.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ClientsModule.register(WEBHOOK_CONFIG),
    EventModule
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }