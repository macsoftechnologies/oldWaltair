import { ApiProperty } from "@nestjs/swagger"

export class usersDto

{
    @ApiProperty()
    userId: string
    @ApiProperty()
    userName : string
    @ApiProperty()
    Name : string
    @ApiProperty()
    password : string
    @ApiProperty()
    phoneNum: string
}
export class deleteUserDto{
    @ApiProperty()
    userId: string
}