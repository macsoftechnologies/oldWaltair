import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
//import { uuid } from "uuidv4";
import { v4 as uuidv4 } from 'uuid';

@Schema({ timestamps: true })

export class order extends Document{
    @Prop({required : true , unique:true , default : uuidv4})
    orderId: string
    @Prop()
    orderProduct: string
    @Prop()
    orderAmount : string
    @Prop()
    discount : string
    @Prop()
    date: string
    
}
export const  orderSchema = SchemaFactory.createForClass(order);