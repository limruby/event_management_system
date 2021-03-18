import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
    @ApiProperty({description: 'Access Token', required: true, type: 'string'})
    access_token: string;
    @ApiProperty({description: 'Refresh Token', required: true, type: 'string'})
    refresh_token: string;

    constructor(data: Partial<TokenDto> = {}) {
        Object.assign(this, data);
    }
}