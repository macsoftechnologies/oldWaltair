import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { clientDto, deleteClientDto } from './dto/clientManagement.dto';
import { client } from './schema/clientManagementSchema.schema';

@Injectable()
export class ClientService {
    constructor(@InjectModel(client.name) private clientModel: Model<client>) { }
   
    async Create(req: clientDto) {
        try {
            const urlData = await this.clientModel.create(req)
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
    async clientDetails(Contact: any) {
        try {

            const userResponse = await this.clientModel.findOne({ Contact: Contact })
            console.log(userResponse)
            if (userResponse) {
                return {
                    StatusCode: HttpStatus.OK,
                    Message: 'Client Details',
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
    async delete(body: deleteClientDto) {
        try {

              console.log(body)
            const deleteRes = await this.clientModel.deleteOne({Contact: body.Contact});
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
    async updateClient(body: clientDto) {
        try {
             console.log(body, "body............")
            
        const updateRes = await this.clientModel.updateOne({Contact : body.Contact} ,{$set : {Name : body.Name, Location: body.Location, Contact: body.Contact, Address: body.Address, managerName: body.managerName}})
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
