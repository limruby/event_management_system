import { Controller, Get, Request, Post, UseGuards, HttpStatus, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';

import { ThrottlerGuard } from '@nestjs/throttler';
import { JwtRefreshAuthGuard } from './guard/jwtr-auth.guard';

import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
  

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @UseGuards(ThrottlerGuard)
    @Post('login')
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiOperation({
        operationId: 'login',
        description: 'Login with email (username) and password',
        summary: 'Login'
    })
    async login(@Request() req, @Body() body : LoginDto) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtRefreshAuthGuard)
    @UseGuards(ThrottlerGuard)
    @Get('refresh')
    @ApiBearerAuth()
    @ApiResponse({
        status: HttpStatus.OK,
    })
    @ApiOperation({
        operationId: 'refresh',
        description: 'Refresh token when expired',
        summary: 'Refresh token'
    })
    async refresh(@Request() req) {
        return this.authService.refresh(req.user);
    }
}
