import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deleteStockDto, stockDto } from './dto/stock.dto';
import { stock } from './schema/stock.schema';

@Injectable()
export class StockService {
  
  
    constructor(@InjectModel(stock.name) private stockModel: Model<stock>) { }
   
    async Create(req: stockDto) {
        try {
            const urlData = await this.stockModel.create(req)
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
    async stockDetails(batchId: any) {
        try {

            const userResponse = await this.stockModel.findOne({ batchId: batchId })
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
    async delete(body: deleteStockDto) {
        try {

              console.log(body)
            const deleteRes = await this.stockModel.deleteOne({batchId: body.batchId});
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
    async updateStock(body: stockDto) {
        try {
             console.log(body, "body............")
            
        const updateRes = await this.stockModel.updateOne({batchId : body.batchId} ,{$set : {batchId : body.batchId, mfgDate: body.mfgDate, products: body.products, status: body.status}})
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




