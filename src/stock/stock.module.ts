import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { stock, stockSchema } from './schema/stock.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name :stock.name , schema : stockSchema}]),
],
  controllers: [StockController],
  providers: [StockService]
})
export class StockModule {}
