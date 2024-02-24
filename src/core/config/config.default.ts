import { User } from "src/feature/users/users.entity";
import { ConfigData } from "./config.interface";

const isDev = process.env.NODE_ENV === 'dev' ? true : false;
const isProd = process.env.NODE_ENV === 'prod' ? true : false;

export function defaultConfig(): ConfigData {
  return {
    app: {
      port: parseInt(process.env.PORT),
      env: process.env.NODE_ENV || 'development',
      name: process.env.APP_NAME,
      version: process.env.APP_VERSION,
      rootPrefix: process.env.APP_URI_PREFIX,
      isDev,
      isProd,
    },

    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(<string>process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dialect: process.env.DATABASE_DIALECT,
      entities: [User],
      logging: ['local', 'development', 'dev'].includes(process.env.NODE_ENV),
      synchronize:
        ['local', 'development', 'dev'].includes(process.env.NODE_ENV) && process.env.DATABASE_SYNCHRONIZE === 'true',
    }
  };
}
