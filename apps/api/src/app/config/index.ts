import { ClientsModuleOptions, Transport } from "@nestjs/microservices";
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
    configuration,
    generateWorkerMicroserviceOptions,
    WORKER_SERVICE_NAME
} from '@webhooks/shared';
import { Company } from '../company/company.entity';
import { User } from '../user/user.entity';
import { Webhook } from '../webhook/webhook.entity';

export const WEBHOOK_CONFIG: ClientsModuleOptions = [
    {
        name: WORKER_SERVICE_NAME,
        transport: Transport.REDIS,
        options: {
            ...generateWorkerMicroserviceOptions().options
        }
    },
];

export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: configuration().postgres_port,
    username: configuration().postgres_user,
    password: configuration().postgres_password,
    database: configuration().postgres_db,
    synchronize: true,
    entities: [Company, User, Webhook]
};