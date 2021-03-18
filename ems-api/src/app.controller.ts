import { Controller, Get, Request, Post, UseGuards, Body, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { Roles } from './utils/role/roles.decorator';
import { Role } from './utils/role/role.enum';
import { RolesGuard } from './utils/role/role.guard';

import { RegisterUserDto } from './users/dto/register-user.dto';
import { ApiBearerAuth, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User, UserSchema } from './users/entity/user.schema';
import { TokenDto } from './auth/dto/token.dto';
import { UserDto } from './users/dto/user.dto';
import { ErrorResponse } from './utils/dto/error-response.dto';

@Controller('')
@ApiTags('Base')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('profile')
  @ApiOperation({
    operationId: 'profile',
    description: 'Get own profile',
    summary: 'Get own profile',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Self profile obtain',
    type: UserDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: `Unauthorized`,
    type: ErrorResponse,
  })
  getProfile(@Request() req) {
    return UserDto.fromUserSchema(req.user);
  }

  @Post('register/participant')
  @ApiOperation({
    operationId: 'registerParticipant',
    description: 'Register participant of the competition',
    summary: 'Register participant',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successful register',
    type: TokenDto,
  })
  @ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: `Error`,
      type: ErrorResponse,
  })
  async registerParticipant(@Request() req, @Body() body: RegisterUserDto) {
    const user = await this.usersService.create(body, Role.Participant);
    return this.authService.login(user);
    return req.body;
  }

  @Post('register/visitor')
  @ApiOperation({
    operationId: 'registerVisitor',
    description: 'Register visitor of the event',
    summary: 'Register visitor',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successful register',
    type: TokenDto,
  })
  @ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: `Error`,
      type: ErrorResponse,
  })
  async registerVisitor(@Request() req, @Body() body: RegisterUserDto) {
    const user = await this.usersService.create(body, Role.Visitor);
    return this.authService.login(user);
    return req.body;
  }
  // curl -X POST http://localhost:3000/register -d '{ "email": "waixiong@gmail.com", "password": "password", "name": "Chee Wai Xiong", "birthday": "Fri Jan 03 1997 00:00:00 GMT+0800"}' -H "Content-Type: application/json"
}
