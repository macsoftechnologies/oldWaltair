import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsString, IsEmail, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { v4 as uuid } from 'uuid';
@Schema({ timestamps: true })
export class stock extends Document{
    @Prop({required : true , unique:true , default : uuid})
    stockId: string
    @Prop()
    batchId: string
    @Prop()
    mfgDate : string
    @Prop()
    products : string
    @Prop()
    status : string
    }
export const  stockSchema = SchemaFactory.createForClass(stock);