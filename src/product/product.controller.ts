import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { deleteProductDto, productDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post('/productManagement')
  async create(@Body() req: productDto) {
      try {
          const result = await this.productService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }
    }
    @Get('/productdetails')
    async userDetails(@Query('Name') Name : string) {
        console.log(Name)
        try {
            const response = await this.productService.productDetails(Name)
            return response
        } catch (error) {
            return {
                StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
                Message : error
            }
        }
   
  }
  @Post('/delete')
async deleteUser(@Body() req: deleteProductDto ) { 
  try {
    let response = await this.productService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
}   
@Post('/update')
async clientUpdate(@Body() req: productDto) {
    console.log(req,'update')
    try {
        const result = await this.productService.updateProduct(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
}
