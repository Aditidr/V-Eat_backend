import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './config.service';
import { defaultConfig } from './config.default';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [defaultConfig],
    }),
  ],
  controllers: [],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
