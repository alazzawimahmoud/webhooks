import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, FindConditions, DeleteResult, UpdateResult } from 'typeorm';
import { EventService } from '../event/event.service';
import { Webhook } from './webhook.entity';
import { IWebhook, ICreateWebhook } from './webhook.interface';


@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhook)
    private readonly webhookRepository: Repository<Webhook>
  ) { }

  findAll(): Promise<Webhook[]> {
    return this.webhookRepository.find();
  }

  findOne(query: FindConditions<Webhook>): Promise<Webhook> {
    return this.webhookRepository.findOne(query);
  }

  findOneByCompany(companyId: number): Promise<Webhook> {
    return this.webhookRepository.findOne({ company: companyId });
  }

  async createWebhook(webhook: ICreateWebhook): Promise<InsertResult> {
    try {
      const webhookEntity = this.webhookRepository.create(webhook);

      const res = await this.webhookRepository.insert(webhookEntity);

      Logger.log('createWebhook - webhook created');

      return res;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  async updateWebhook(id: number, webhook: IWebhook): Promise<UpdateResult> {
    try {
      const webhookEntity = await this.webhookRepository.findOne(id);

      if (!webhookEntity) {
        throw new NotFoundException('Item not found');
      }

      const res = await this.webhookRepository.update(id, webhook)

      Logger.log('createWebhook - webhook updated');

      return res;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  delete(id: number): Promise<DeleteResult> {
    return this.webhookRepository.delete({ id });
  }
}