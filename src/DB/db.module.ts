import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/feature/users/users.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-ap-south-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.urjpeckgwbbvlyzgxxmo',
      password: 'gFgdRHR6dT1lZ1N2',
      database: 'postgres',
      entities: [User],
      synchronize: true
    })
  ]
})
export class DatabaseModule {

}