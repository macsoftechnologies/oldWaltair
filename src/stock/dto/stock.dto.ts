import { ApiProperty } from "@nestjs/swagger"

export class stockDto {
   @ApiProperty()
    stockId: string
    @ApiProperty()
    batchId: string
    @ApiProperty()
    mfgDate : string
    @ApiProperty()
    products : string
    @ApiProperty()
    status : string
    }

export class deleteStockDto{
    @ApiProperty()
    batchId: string
}