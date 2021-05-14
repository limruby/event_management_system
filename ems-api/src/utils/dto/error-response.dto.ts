import {ApiProperty} from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({type: 'object'})
  readonly errors?: any;
  @ApiProperty({type: 'string', default: 'Internal Server Error'})
  readonly message?: any;
  @ApiProperty({type: 'object'})
  readonly stack?: any;
}
