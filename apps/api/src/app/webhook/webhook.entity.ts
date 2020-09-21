import { MessageTypes } from '@webhooks/shared';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique, ManyToMany, ManyToOne } from 'typeorm';
import { Company } from '../company/company.entity';
import { IWebhook } from './webhook.interface';

@Entity()
@Unique(['company'])
export class Webhook implements IWebhook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  token: string;

  @Column()
  url: string;

  @Column('text', { array: true })
  subscriptions: MessageTypes[];

  @Column()
  company: number;

  @CreateDateColumn()
  createdAt: Date;
}