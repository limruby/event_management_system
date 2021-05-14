import { Controller, Get, Request, Post, Put, Delete, UseGuards, HttpStatus, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { ThrottlerGuard } from '@nestjs/throttler';

import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from '../utils/role/roles.decorator';
import { Role } from '../utils/role/role.enum';
import { RolesGuard } from '../utils/role/role.guard';
import { User } from './entity/user.schema';
import { UsersService } from './users.service';
import { UserDto, UpdateUserDto, RegisterUserDto } from './dto/dto';
import { ErrorResponse } from 'src/utils/dto/error-response.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { isConstructorDeclaration } from 'typescript';
import { EMSPagination } from 'src/utils/dto/pagination.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}
    
    // // ------ Commented @sudo ------
    // @Post('register/sudo/admin')
    // @ApiOperation({
    //     operationId: 'sudoAdmin',
    //     description: 'Register admin',
    //     summary: 'Register visitor',
    // })
    // @ApiResponse({
    //     status: HttpStatus.OK,
    //     description: 'Successful register',
    //     type: TokenDto,
    // })
    // @ApiResponse({
    //     status: HttpStatus.INTERNAL_SERVER_ERROR,
    //     description: `Error`,
    //     type: ErrorResponse,
    // })
    // async sudoAdmin(@Request() req, @Body() body: RegisterUserDto) {
    //     const user = await this.userService.create(CreateUserDto.fromRegisterUserDto(body, Role.Admin));
    //     return {};
    // }
    // // ------ Commented @sudo ------

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('user/:id')
    @ApiOperation({
        operationId: 'getUser',
        description: 'Get user',
        summary: 'Get user',
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
    async getUser(@Request() req, @Param('id') id: string) {
        const user = await this.userService.find(id);
        return UserDto.fromUserSchema(user);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post('user')
    @Roles(Role.Admin)
    @ApiOperation({
        operationId: 'createUser',
        description: 'Create user, only admin',
        summary: 'Create user',
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
    async createUser(@Request() req, @Body() body: CreateUserDto) {
        const user = await this.userService.create(body);
        return UserDto.fromUserSchema(user);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Put('user/:id')
    @Roles(Role.Admin)
    @ApiOperation({
        operationId: 'updateUser',
        description: 'Update user, only admin',
        summary: 'Update user',
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
    async updateUser(@Request() req, @Param('id') id: string, @Body() body: UpdateUserDto) {
        body.id = id;
        const user = await this.userService.update(body);
        return UserDto.fromUserSchema(user);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete('user/:id')
    @Roles(Role.Admin)
    @ApiOperation({
        operationId: 'deleteUser',
        description: 'Delete user, only admin',
        summary: 'Delete user',
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
    async setProfile(@Request() req, @Param('id') id: string) {
        const user = await this.userService.delete(id);
        return UserDto.fromUserSchema(user);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('users')
    @Roles(Role.Admin)
    @ApiOperation({
        operationId: 'getUsers',
        description: 'Get users',
        summary: 'Get users',
    })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'API under construct...',
        type: EMSPagination,
    })
    @ApiResponse({
        status: HttpStatus.UNAUTHORIZED,
        description: `Unauthorized`,
        type: ErrorResponse,
    })
    async getUsers(@Request() req, @Query('page', ParseIntPipe) page: number = 0) {
        const users = await this.userService.getUsers(page, {});
        var rawUsers : UserDto[] = [];
        for(var i in users.items) {
            console.log(users.items[i]);
            var rawUser = UserDto.fromUserSchema(users.items[i]);
            rawUsers.push(rawUser);
        }
        let pages = new EMSPagination<UserDto>({pages: users.pages, items: rawUsers});
        return pages;
    }
}
