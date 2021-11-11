import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { deleteProductDto, productDto } from './dto/product.dto';
import { product } from './schema/product.schema';

@Injectable()
export class ProductService {
    
    constructor(@InjectModel(product.name) private productModel: Model<product>) { }
   
    async Create(req: productDto) {
        try {
            const urlData = await this.productModel.create(req)
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
    async productDetails(Name: any) {
        try {

            const productResponse = await this.productModel.findOne({ Name: Name })
            console.log(productResponse)
            if (productResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'Product Details',
                    Data: {
                      productDetails  : productResponse
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
    async delete(body: deleteProductDto) {
        try {

              console.log(body)
            const deleteRes = await this.productModel.deleteOne({Name: body.Name});
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
    async updateProduct(body: productDto) {
        try {
             console.log(body, "body............")
            
        const updateRes = await this.productModel.updateOne({Name : body.Name} ,{$set : {Name : body.Name, Weight: body.Weight, Price: body.Price, Compostion: body.Compostion}})
            
             console.log(updateRes, "update,,res")
           // if (updateRes.nModified == 1) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: "Product Updated SuccessFully",
                    updateProd: "updateRes"
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
