import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const configuration = () => ({
  environment: process.env.NODE_ENV,
  api_port: parseInt(process.env.API_PORT),
  postgres_port: parseInt(process.env.POSTGRES_PORT),
  postgres_db: process.env.POSTGRES_DB,
  postgres_user: process.env.POSTGRES_USER,
  postgres_password: process.env.POSTGRES_PASSWORD,
});

export function generateWorkerMicroserviceOptions(): MicroserviceOptions {
  return {
    transport: Transport.REDIS,
    options: generateTransportOptions()
  }
}

export function generateTransportOptions() {
  return {
    url: `redis://localhost:${process.env.REDIS_PORT}`
  }
}
