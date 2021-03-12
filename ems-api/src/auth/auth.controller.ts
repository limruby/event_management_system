import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';

import { ThrottlerGuard } from '@nestjs/throttler';
import { JwtRefreshAuthGuard } from './guard/jwtr-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @UseGuards(ThrottlerGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtRefreshAuthGuard)
    @UseGuards(ThrottlerGuard)
    @Get('refresh')
    async refresh(@Request() req) {
        return this.authService.refresh(req.user);
    }
}
