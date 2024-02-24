import { Injectable } from "@nestjs/common";
import BaseRepository from "src/base/repository";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) private repository: Repository<User>) {
    super(repository);
  }
}