import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { product, productSchema } from './schema/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name :product.name , schema : productSchema}]),
],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
