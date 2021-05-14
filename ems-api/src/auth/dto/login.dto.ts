import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({description: 'Email', required: true, type: 'string', format: 'email'})
    username: string;
    @ApiProperty({description: 'Password', required: true, type: 'string', format: 'password'})
    password: string;
}