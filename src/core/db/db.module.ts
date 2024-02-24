import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfigModule } from "src/core/config/config.module";
import { AppConfigService } from "src/core/config/config.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: async (config: AppConfigService) => ({
        type: 'postgres',
        host: config.get().database.host,
        port: config.get().database.port,
        username: config.get().database.username,
        password: config.get().database.password,
        database: config.get().database.database,
        entities: config.get().database.entities,
        logging: config.get().database.logging,
        synchronize: config.get().database.synchronize
      }),
    }),
  ]
})
export class DatabaseModule {}