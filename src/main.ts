import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { HttpExceptionFilter } from '@/exceptions/http-exception.filter';
import { QueryExceptionFilter } from '@/exceptions/query-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { WinstonModule } from 'nest-winston';
import { createLogger, transports, format } from 'winston';
const { combine, timestamp, prettyPrint } = format;

async function bootstrap() {
  // createLogger of Winston
  const instance = createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: [new transports.Console()],
  });

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
      // options (same as WinstonModule.forRoot() options)
    }),
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter(), new QueryExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3001);
}

bootstrap();
