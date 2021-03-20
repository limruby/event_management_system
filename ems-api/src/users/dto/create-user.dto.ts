import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/role/role.enum';
import { RegisterUserDto } from './dto';

export class CreateUserDto {
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
    @ApiProperty({
        description: 'Role', 
        required: true, 
        type: 'array',
        items: {
            type: 'string',
        },
    })
    roles: Role[];

    constructor(data: Partial<CreateUserDto> = {}) {
        Object.assign(this, data);
    }

    static fromRegisterUserDto(dto: RegisterUserDto, role: Role) {
        return new CreateUserDto({
            roles: [ role ],
            email: dto.email,
            mobile: dto.mobile,
            password: dto.password,
            name: dto.name,
            ic: dto.ic,
            birthday: dto.birthday,
            organization: dto.organization,
            position: dto.position,
        });
    }
}