/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { generateWorkerMicroserviceOptions } from '@webhooks/shared';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const options = generateWorkerMicroserviceOptions();
  console.log(options)
  const app = await NestFactory.createMicroservice(AppModule, options);
  app.listen(() => {
    Logger.log('Worker Micro-service is listening ...');
  });
}

bootstrap();
