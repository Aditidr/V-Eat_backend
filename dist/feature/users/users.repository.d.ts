import BaseRepository from "src/base/repository";
import { User } from "./users.entity";
import { Repository } from "typeorm";
export declare class UserRepository extends BaseRepository<User> {
    private repository;
    constructor(repository: Repository<User>);
}
