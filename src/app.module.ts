import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { DatabaseModule } from '@/config/database.module';
import { CartModule } from '@/modules/cart/cart.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
