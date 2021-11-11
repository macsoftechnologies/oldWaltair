import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
//import { uuid } from "uuidv4";
import { v4 as uuidv4 } from 'uuid';

@Schema({ timestamps: true })

export class product extends Document{
    @Prop({required : true , unique:true , default : uuidv4})
    productId: string
    @Prop()
    Name: string
    @Prop()
    Weight : string
    @Prop()
    Price : string
    @Prop()
    Compostion: string
    
}
export const  productSchema = SchemaFactory.createForClass(product);