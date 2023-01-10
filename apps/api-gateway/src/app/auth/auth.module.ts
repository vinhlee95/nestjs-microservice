import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';

@Module({
  imports: [
    // Register auth microservice
    ClientsModule.register([
      {
        // Define the injection token
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            // Kafka port
            brokers: ['localhost:9092'],
          },
          // Bypass consumer group registration and only function as a producer
          producerOnlyMode: true,
          // Consumers with the same groupId will share the same queue
          consumer: {
            groupId: 'auth-consumer',
          }
        }
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
