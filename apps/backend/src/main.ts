import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { RecordModule } from './app/record.module';

async function bootstrap() {
  const app = await NestFactory.create(RecordModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
