import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('PAYMENTS_MICROSERVICE') private readonly client: ClientKafka
  ) {}

  createPayment(payload: any) {
    console.log(payload)
    this.client.emit('create-payment', JSON.stringify(payload));
  }
}