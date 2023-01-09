import { ClientKafka } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

jest.mock('@nestjs/microservices', () => ({
  ClientKafka: jest.fn().mockImplementation(() => ({
    emit: jest.fn(),
  })),
}));

describe('AppController', () => {
  let appService: AppService
  let appController: AppController

  const mockedKafkaClient = new ClientKafka({});

  beforeEach(() => {
    appService = new AppService(mockedKafkaClient);
    appController = new AppController(appService);
  });

  describe('getData', () => {
    it('emit create-user message to Kafka client', () => {
      const payload = {
        email: 'foo@test.com',
        name: 'foo'
      }
      appController.createUser(payload)

      expect(mockedKafkaClient.emit).toHaveBeenCalledTimes(1)
      expect(mockedKafkaClient.emit).toHaveBeenCalledWith('create-user', JSON.stringify(payload))
    });
  });
});
