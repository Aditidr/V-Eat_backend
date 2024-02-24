import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './core/cors';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { AppConfigService } from './core/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    rawBody: true,
    bodyParser: false
  });
  const config = app.get(AppConfigService);
  const PORT = config.get().app.port;
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ limit: '50mb', extended: true }))
  app.use
  app.enableCors(corsOptions);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  app.setGlobalPrefix(config.get().app.rootPrefix);
  await app.listen(PORT, ()=> console.log(`running at http://localhost:${PORT}`));
}
bootstrap();
