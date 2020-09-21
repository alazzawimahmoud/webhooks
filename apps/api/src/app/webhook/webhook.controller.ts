import { Controller, Post, Body, Get, Param, Delete, Put, Patch } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { IWebhook, ICreateWebhook } from './webhook.interface';

@Controller('webhooks')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService
  ) { }

  @Get()
  findAll() {
    return this.webhookService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.webhookService.findOne({ id });
  }

  @Post()
  async create(@Body() webhook: ICreateWebhook): Promise<IWebhook> {
    try {
      const results = await this.webhookService.createWebhook(webhook);
      return results.raw
    } catch (error) {
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() webhook: IWebhook
  ): Promise<IWebhook> {
    try {
      const results = await this.webhookService.updateWebhook(id, webhook);
      return results.raw;
    } catch (error) {
      
    }
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.webhookService.delete(id);
  }

}