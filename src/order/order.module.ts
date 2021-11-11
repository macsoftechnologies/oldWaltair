import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { order, orderSchema } from './schema/order.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name :order.name , schema : orderSchema}])
],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
