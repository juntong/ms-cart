import { Logger, Module } from '@nestjs/common';
import { AppLoggerService } from './app-logger.service';

@Module({
  providers: [Logger, AppLoggerService],
})
export class AppLoggerModule {}
