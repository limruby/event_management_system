import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    id: string;

    @ApiProperty({description: 'Email', type: 'string', format: 'email'})
    email: string;
    @ApiProperty({description: 'Mobile', type: 'string', format: 'mobile'})
    mobile: string;
    @ApiProperty({description: 'Password', type: 'string', format: 'password'})
    password: string;
    @ApiProperty({description: 'Name', type: 'string'})
    name: string;
    @ApiProperty({description: 'ID Card Number', type: 'string'})
    ic: string;
    @ApiProperty({description: 'Birthday, in date format ("WWW MMM DD YYYY hh:mm:ss GMT+0800")', required: true, type: 'string', format: 'date-time'})
    birthday: Date;
    @ApiProperty({description: 'Organization', type: 'string'})
    organization: string;
    @ApiProperty({description: 'Position', type: 'string'})
    position: string;
}