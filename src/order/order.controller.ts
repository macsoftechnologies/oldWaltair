import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { deleteOrderDto, orderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

         
  @Post('/orderManagement')
  async create(@Body() req: orderDto) {
      try {
          const result = await this.orderService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  @Get('/orderdetails')
  async OrderDetails(@Query('orderId') orderId : string) {
      console.log(orderId)
      try {
          const response = await this.orderService.orderDetails(orderId)
          return response
      } catch (error) {
          return {
              StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
              Message : error
          }
      }
 
}
@Post('/delete')
async deleteUser(@Body() req: deleteOrderDto) { 
  try {
    let response = await this.orderService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
}   

@Post('/update')
async clientUpdate(@Body() req: orderDto) {
    console.log(req,'update')
    try {
        const result = await this.orderService.updateClient(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
}
