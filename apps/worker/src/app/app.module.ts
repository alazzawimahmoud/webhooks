import { HttpModule, Module } from '@nestjs/common';
import { SharedModule } from '@webhooks/shared';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SharedModule,
    HttpModule.register({
      // @TODO Sync with Retry functionality in app.utility.ts
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
