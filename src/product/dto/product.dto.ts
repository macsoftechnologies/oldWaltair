import { ApiProperty } from "@nestjs/swagger"


export class productDto{
    @ApiProperty()
    productId: string
    @ApiProperty()
    Name: string
    @ApiProperty()
    Weight : string
    @ApiProperty()
    Price : string
    @ApiProperty()
    Compostion: string
    
}
export class deleteProductDto{
    @ApiProperty()
    Name: string
}
