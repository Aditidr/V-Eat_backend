export interface ConfigAppInfo {
  port: number;
  env: string;
  name: string;
  version: string;
  rootPrefix: string;
  isDev: boolean;
  isProd: boolean;
}
export interface ConfigDatabase {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  entities: any[];
  dialect: string;
  logging: boolean;
  synchronize: boolean;
}

export interface ConfigData {
  app: ConfigAppInfo;
  database: ConfigDatabase;
}
