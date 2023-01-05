import { Injectable } from "@nestjs/common";
import { User } from "@nestjs-microservices/shared/entities";


@Injectable()
export class UsersRepository {
  private readonly users: User[] = []

  createUser(user: User): User {
    this.users.push(user)
    return user
  }

  findById(id: string): User {
    return this.users.find(user => user.id === id)
  }
}