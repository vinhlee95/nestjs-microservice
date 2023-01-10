import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PaymentsController } from "./payments.controller";
import { PaymentsService } from "./payments.service";


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENTS_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'payments',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'payments-consumer',
          }
        }
      }
    ])
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}