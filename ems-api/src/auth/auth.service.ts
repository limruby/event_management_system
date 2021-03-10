import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { randomString } from '../utils/string';
import { User } from '../users/entity/user.schema';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}
  
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.checkPassword(email, pass);
        return user;
        // return null;
    }

    async login(user: User) {
        const payload = { email: user.email, sub: user._id };
        const refresh = { key: randomString(12), sub: user._id };
        await this.usersService.setRefreshKey(refresh.sub, refresh.key);
        return {
            access_token: this.jwtService.sign(payload),
            refresh_token: this.jwtService.sign(refresh, {
                secret: jwtConstants.refreshSecret,
                expiresIn: jwtConstants.refreshExpiresIn
            })
        };
    }

    async refresh(user: any) {
        return this.login(user);
    }
    
}
