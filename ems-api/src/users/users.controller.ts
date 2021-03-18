import { Controller, Get, Request, Post, UseGuards, HttpStatus, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { ThrottlerGuard } from '@nestjs/throttler';

import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from '../utils/role/roles.decorator';
import { Role } from '../utils/role/role.enum';
import { RolesGuard } from '../utils/role/role.guard';
import { User } from './entity/user.schema';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { ErrorResponse } from 'src/utils/dto/error-response.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('profile/:id')
    @ApiOperation({
        operationId: 'profile',
        description: 'API under construct...',
        summary: 'Get own profile',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'API under construct...',
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
}
