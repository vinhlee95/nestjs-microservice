import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {CreateUserDto} from '@nestjs-microservices/shared/dto'

@Injectable()
export class AppService {
  constructor(
    // Inject Kafka client to this class
    // Then any instance of this class can .emit() messages to Kafka queue
    @Inject('AUTH_MICROSERVICE') private readonly client: ClientKafka
  ) {}

  createUser(payload: CreateUserDto) {
    this.client.emit('create-user', JSON.stringify(payload));
  }
}
