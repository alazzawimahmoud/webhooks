/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get("api_port");
  const env = config.get("environment");
  
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  await app.listen(port, () => {
    Logger.log(`Running in ${env} mode`);
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
