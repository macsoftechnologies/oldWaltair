import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
//import { uuid } from "uuidv4";
import { v4 as uuidv4 } from 'uuid';

@Schema({ timestamps: true })

export class client extends Document{
    @Prop({required : true , unique:true , default : uuidv4})
    clientId: string
    @Prop()
    Name: string
    @Prop()
    Location : string
    @Prop()
    Address : []
    @Prop()
    managerName : string
    @Prop()
    Contact: string
    
}
export const  clientSchema = SchemaFactory.createForClass(client);