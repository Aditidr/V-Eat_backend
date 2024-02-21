import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/feature/users/users.entity";

@Module({
    imports: [
      TypeOrmModule.forRoot({
        // name: 'gameChangerDB',
          type: 'postgres',
          host: process.env.HOST,
          port: parseInt(process.env.PORT),
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          database: process.env.DATABASE,
          entities: [User],
          synchronize: true
          
        })
      ]
})
export class DatabaseModule{
    
}