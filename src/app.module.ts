import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConfigService } from './configs/mongoose.config';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { StockModule } from './stock/stock.module';


@Module({
  imports: [ MongooseModule.forRootAsync({useClass : MongooseConfigService}), ClientModule, ProductModule, OrderModule, UserModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
