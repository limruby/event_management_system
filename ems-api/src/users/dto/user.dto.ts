import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/utils/role/role.enum';
import { User } from '../entity/user.schema';

export class UserDto {

    @ApiProperty({description: 'User Id', required: true, type: 'string'})
    readonly id: string; // max 12 char

    @ApiProperty({description: 'Name', required: true, type: 'string'})
    name: string;

    @ApiProperty({description: 'IC number', required: true, type: 'string'})
    ic: string;

    @ApiProperty({description: 'Email', required: true, type: 'string'})
    email: string;

    @ApiProperty({description: 'Mobile number', required: true, type: 'string'})
    mobile: string;

    @ApiProperty({description: 'Birthday', required: true, type: 'string', format: 'date-time'})
    birthday: Date;

    @ApiProperty({
        description: 'Role', 
        required: true, 
        type: 'array',
        items: {
            type: 'string',
        },
    })
    roles: Role[];

    @ApiProperty({description: 'Payment Id, if any', type: 'string'})
    paymentId: string;

    @ApiProperty({description: 'Org', required: true, type: 'string'})
    organization: string;
    @ApiProperty({description: 'Position', required: true, type: 'string'})
    position: string;

    constructor(data: Partial<UserDto> = {}) {
        Object.assign(this, data);
    }

    static fromUserSchema(user: User) {
        return new UserDto({
            id: user._id,
            name: user.name,
            ic: user.ic,
            email: user.email,
            // gender: user.gender,
            mobile: user.mobile,
            birthday: user.birthday,
            roles: user.roles,
            paymentId: user.paymentId,
            organization: user.organization,
            position: user.position
        });
    }
}