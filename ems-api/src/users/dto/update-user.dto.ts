import { ApiProperty } from '@nestjs/swagger';
import { Member } from '../entity/user.schema';

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
    @ApiProperty({description: 'Type', type: 'string'})
    type: string;
    @ApiProperty({description: 'Affiliation', type: 'string'})
    affiliation: string;
    @ApiProperty({description: 'Members'})
    members: Member[];
}