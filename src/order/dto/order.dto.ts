import { ApiProperty } from "@nestjs/swagger"

export class orderDto{
    @ApiProperty()
    orderId: string
    @ApiProperty()
    orderProduct: string
    @ApiProperty()
    orderAmount : string
    @ApiProperty()
    discount : string
    @ApiProperty()
    date: string
    
}

export class deleteOrderDto{
    @ApiProperty()
    orderId: string
}