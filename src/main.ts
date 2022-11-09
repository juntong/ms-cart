import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { HttpExceptionFilter } from '@/exceptions/http-exception.filter';
import { QueryExceptionFilter } from '@/exceptions/query-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter(), new QueryExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3001);
}

bootstrap();
