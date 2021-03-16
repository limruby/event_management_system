import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
    @ApiProperty({description: 'Email', required: true, type: 'string', format: 'email'})
    email: string;
    @ApiProperty({description: 'Password', required: true, type: 'string', format: 'password'})
    password: string;
    @ApiProperty({description: 'Name', required: true, type: 'string'})
    name: string;
    @ApiProperty({description: 'ID Card Number', required: true, type: 'string'})
    ic: string;
    @ApiProperty({description: 'Birthday, in date format ("WWW MMM DD YYYY hh:mm:ss GMT+0800")', required: true, type: 'string', format: 'date-time'})
    birthday: Date;
    @ApiProperty({description: 'Organization', required: true, type: 'string'})
    organization: string;
    @ApiProperty({description: 'Position', required: true, type: 'string'})
    position: string;
}
  