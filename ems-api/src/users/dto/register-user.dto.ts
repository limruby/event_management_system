import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/role/role.enum';
import { CreateUserDto } from './create-user.dto';

export class RegisterUserDto {
    @ApiProperty({description: 'Email', required: true, type: 'string', format: 'email'})
    email: string;
    @ApiProperty({description: 'Mobile', required: true, type: 'string', format: 'mobile'})
    mobile: string;
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

    // toCreateUserDto(role: Role) : CreateUserDto {
    //     return new CreateUserDto({
    //         roles: [ role ],
    //         email: this.email,
    //         mobile: this.mobile,
    //         password: this.password,
    //         name: this.name,
    //         ic: this.ic,
    //         birthday: this.birthday,
    //         organization: this.organization,
    //         position: this.position,
    //     });
    // }
}
  