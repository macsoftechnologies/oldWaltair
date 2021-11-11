import { ApiProperty } from "@nestjs/swagger"


export class clientDto{
    @ApiProperty()
    clientId: string
    @ApiProperty()
    Name: string
    @ApiProperty()
    Location : string
    @ApiProperty()
    Address : []
    @ApiProperty()
    managerName : string
    @ApiProperty()
    Contact: string
    
}

export class deleteClientDto{
    @ApiProperty()
    Contact: string
}






