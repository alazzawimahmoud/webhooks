/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import MicroserviceOptions from './config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, MicroserviceOptions);
  app.listen(() => {
    Logger.log('Worker Micro-service is listening ...');
  });
}

bootstrap();
