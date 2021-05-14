import {ApiProperty} from '@nestjs/swagger';

export class EMSPagination<T> {
  @ApiProperty({description: 'Number of Pages', required: true, type: 'number', default: 1})
  pages: number;
  @ApiProperty({
    description: 'Items Array', 
    required: true, 
    type: 'array',
    items: {
        type: 'object',
        default: {
            "id": "string",
            "name": "string",
            "ic": "string",
            "email": "string",
            "mobile": "string",
            "roles": [
              "string"
            ],
            "paymentId": "string",
            "organization": "string",
            "position": "string",
            "members": [
              "string"
            ]
          }
    },
  })
  items: T[];

  constructor(data: Partial<EMSPagination<T>> = {}) {
    Object.assign(this, data);
  }
}