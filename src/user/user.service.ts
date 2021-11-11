import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deleteUserDto, usersDto } from './dto/user.dto';
import { users } from './schema/user.schema';

@Injectable()
export class UserService {
  
    constructor(@InjectModel(users.name) private userModel: Model<users>) { }
   
    async Create(req: usersDto) {
        try {
            const urlData = await this.userModel.create(req)
            if (urlData) {
                return {
                    statusCode: HttpStatus.OK,
                    message: "Thank you",
                    data: {
                        UrlResponse: {
                            
                            clientResponse: urlData
                         }
                    }
                }

            }
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                message: "Invalid Request"
            }

        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    }
    async userDetails(userId: any) {
        try {

            const userResponse = await this.userModel.findOne({ userId: userId })
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'User Details',
                    Data: {
                        UserDetails: userResponse
                    }

                }
            }
            return {
                StatusCode: HttpStatus.BAD_REQUEST,
                Message: "InValid Request"
            }

        } catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error

            }
        }
    }
    async delete(body: deleteUserDto) {
        try {

              console.log(body)
            const deleteRes = await this.userModel.deleteOne({userId: body.userId});
           console.log(deleteRes, "deleteRes...")

          //  if (deleteRes.n == 1) {
                return {
                    statusCode: HttpStatus.OK,
                    message: 'User deleted successfully',
            
                };
           // }
            // return {
            //     StatusCode: HttpStatus.BAD_REQUEST,
            //     Message: "User deletion Failed"
            // }
            
        } catch (error) {
            let error_response = {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                data: null,
                message: error,
            };
            return error_response;
        }

    }
    async updateuser(body: usersDto) {
        try {
             console.log(body, "body............")
            
        const updateRes = await this.userModel.updateOne({userId : body.userId} ,{$set : {userId : body.userId, userName: body.userName, Name: body.Name, password: body.password, phoneNum: body.phoneNum}})
            //const updateRes = await this.userModel.updateOne({ UserId: body.UserId })
             console.log(updateRes, "update,,res")
           // if (updateRes.nModified == 1) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: "User Updated SuccessFully"
                }
            }
        //     return {
        //         StatusCode: HttpStatus.BAD_REQUEST,
        //         Message: "Updated Failed"
        //     }
        // } 
        catch (error) {
            return {
                StatusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                Message: error.message
            }
        }
      }

}


