import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { deleteUserDto, usersDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
 
         
  @Post('/usersManagement')
  async create(@Body() req: usersDto) {
      try {
          const result = await this.userService.Create(req)
          console.log("result", result);
          
          return result
      } catch (error) {
          return {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: error.message,
          };
      }

  }
  @Get('/userdetails')
  async OrderDetails(@Query('userId') userId : string) {
      console.log(userId)
      try {
          const response = await this.userService.userDetails(userId)
          return response
      } catch (error) {
          return {
              StatusCode : HttpStatus.INTERNAL_SERVER_ERROR,
              Message : error
          }
      }
 
}
@Post('/delete')
async deleteUser(@Body() req: deleteUserDto) { 
  try {
    let response = await this.userService.delete(req);

    return response
  } catch (error) {
    return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
    };
  }
}   

@Post('/update')
async clientUpdate(@Body() req: usersDto) {
    console.log(req,'update')
    try {
        const result = await this.userService.updateuser(req)
        return result
    } catch (error) {
        return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
}


