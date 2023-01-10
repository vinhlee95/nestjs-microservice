import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {CreateUserDto} from '@nestjs-microservices/shared/dto'

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('signup')
  createUser(@Body(ValidationPipe) payload: CreateUserDto) {
    this.appService.createUser(payload);
  }
}
