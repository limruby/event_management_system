import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { Roles } from './utils/role/roles.decorator';
import { Role } from './utils/role/role.enum';
import { RolesGuard } from './utils/role/role.guard';

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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  async register(@Request() req) {
    const user = await this.usersService.create(req.body);
    return this.authService.login(user);
    return req.body;
  }
  // curl -X POST http://localhost:3000/register -d '{ "email": "waixiong@gmail.com", "password": "password", "name": "Chee Wai Xiong", "birthday": "Fri Jan 03 1997 00:00:00 GMT+0800", "gender": "M"}' -H "Content-Type: application/json"
}
