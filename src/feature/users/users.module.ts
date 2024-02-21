import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { UserRepository } from "./users.repository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class UserModule{

}