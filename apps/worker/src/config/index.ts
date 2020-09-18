import { Transport } from '@nestjs/microservices';

export default {
    transport: Transport.REDIS,
    options: {
        url: `redis://localhost:${process.env.REDIS_PORT}`
    }
}