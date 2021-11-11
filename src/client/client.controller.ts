import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { clientDto, deleteClientDto } from './dto/clientManagement.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
          
  @Post('/clientManagement')
  async create(@Body() req: clientDto) {
      try {
          const result = await this.clientService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  @Get('/clientdetails')
  async userDetails(@Query('Contact') Contact : string) {
      console.log(Contact)
      try {
          const response = await this.clientService.clientDetails(Contact)
          return response
      } catch (error) {
          return {
              StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
              Message : error
          }
      }
 
}
@Post('/delete')
async deleteUser(@Body() req: deleteClientDto) { 
  try {
    let response = await this.clientService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
}   


@Post('/update')
async clientUpdate(@Body() req: clientDto) {
    console.log(req,'update')
    try {
        const result = await this.clientService.updateClient(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
}
