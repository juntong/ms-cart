import { Inject, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class AppLoggerService<T> {
  constructor(private readonly logger: LoggerService) {}

  audit(object: any) {
    console.log('test');

    // this.logger.log({ ...object });
  }
}
