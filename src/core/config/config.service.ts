import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigData } from './config.interface';

@Injectable()
export class AppConfigService {
  private config: ConfigData;

  constructor(private configService: ConfigService) {
    this.loadFromEnv();
  }

  /**
   * Retrieves the config.
   * @returns immutable view of the config data
   */
  public get(): Readonly<ConfigData> {
    return this.config;
  }
  /**
   * Loads the config from environment variables.
   */
  public loadFromEnv() {
    this.config = this.parseConfigFromEnv();
  }

  private parseConfigFromEnv(): ConfigData {
    return {
      app: this.configService.get('app'),
      database: this.configService.get('database')
    };
  }
}
