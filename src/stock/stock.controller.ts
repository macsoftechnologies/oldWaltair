import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { deleteStockDto, stockDto } from './dto/stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}
  
  @Post('/stockManagement')
  async create(@Body() req: stockDto) {
      try {
          const result = await this.stockService.Create(req)
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
  async OrderDetails(@Query('stockId') stockId : string) {
      console.log(stockId)
      try {
          const response = await this.stockService.stockDetails(stockId)
          return response
      } catch (error) {
          return {
              StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
              Message : error
          }
      }
 
}
@Post('/delete')
async deleteUser(@Body() req: deleteStockDto) { 
  try {
    let response = await this.stockService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
}   

@Post('/update')
async clientUpdate(@Body() req: stockDto) {
    console.log(req,'update')
    try {
        const result = await this.stockService.updateStock(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
}


