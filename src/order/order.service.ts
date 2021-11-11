import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deleteOrderDto, orderDto } from './dto/order.dto';
import { order } from './schema/order.schema';

@Injectable()
export class OrderService {
    constructor(@InjectModel(order.name) private orderModel: Model<order>) { }
   
    async Create(req: orderDto) {
        try {
            const urlData = await this.orderModel.create(req)
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
    async orderDetails(orderId: any) {
        try {

            const userResponse = await this.orderModel.findOne({ orderId: orderId })
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'Order Details',
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
    async delete(body: deleteOrderDto) {
        try {

              console.log(body)
            const deleteRes = await this.orderModel.deleteOne({orderId: body.orderId});
           console.log(deleteRes, "deleteRes...")

          //  if (deleteRes.n == 1) {
                return {
                    statusCode: HttpStatus.OK,
                    message: 'Client deleted successfully',
            
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
    async updateClient(body: orderDto) {
        try {
             console.log(body, "body............")
            
        const updateRes = await this.orderModel.updateOne({orderId : body.orderId} ,{$set : {orderId : body.orderId, order: body.orderProduct, orderAmount: body.orderAmount, discount: body.discount}})
            //const updateRes = await this.userModel.updateOne({ UserId: body.UserId })
             console.log(updateRes, "update,,res")
           // if (updateRes.nModified == 1) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: "Client Updated SuccessFully"
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
