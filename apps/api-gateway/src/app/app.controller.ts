import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {CreateUserDto} from '@nestjs-microservices/shared/dto'

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signup')
  createUser(@Body(ValidationPipe) payload: CreateUserDto) {
    this.appService.createUser(payload);
  }
}
