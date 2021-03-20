import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { randomString } from '../utils/string';
import { User } from '../users/entity/user.schema';
import { TokenDto } from './dto/token.dto';
import { JwtAccessPayload, JwtRefreshPayload } from './entity/jwt-payload.entity';

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
        const payload = new JwtAccessPayload({ email: user.email, sub: user._id, roles: user.roles })
        // const payload = { email: user.email, sub: user._id };
        const refresh = new JwtRefreshPayload({ key: randomString(12), sub: user._id });
        // const refresh = { key: randomString(12), sub: user._id };
        await this.usersService.setRefreshKey(refresh.sub, refresh.key);
        return new TokenDto({
            access_token: this.jwtService.sign(payload.toJson()),
            refresh_token: this.jwtService.sign(refresh.toJson(), {
                secret: jwtConstants.refreshSecret,
                expiresIn: jwtConstants.refreshExpiresIn
            })
        });
    }

    async refresh(user: any) {
        return this.login(user);
    }
    
}
