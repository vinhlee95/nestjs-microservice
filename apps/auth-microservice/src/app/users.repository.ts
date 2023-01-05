import { Injectable } from "@nestjs/common";
import { User } from "@nestjs-microservices/shared/entities";


@Injectable()
export class UsersRepository {
  private readonly users: User[] = []

  createUser(user: User) {
    this.users.push(user)
  }
}