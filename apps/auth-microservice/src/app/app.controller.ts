import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-user')
  handleCreateUserEvent(@Payload(ValidationPipe) payload: CreateUserDto) {
    this.appService.createUser(payload)
  }
}
