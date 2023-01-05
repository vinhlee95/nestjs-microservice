import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  createUser(payload: CreateUserDto) {
    return this.usersRepository.createUser({...payload, id: randomUUID()})
  }

  getUserById(id: string) {
    return this.usersRepository.findById(id)
  }
}
