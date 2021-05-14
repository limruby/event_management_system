import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.refreshSecret,
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.checkRefreshKey(payload.sub, payload.key);
    if (!user) {
        throw new UnauthorizedException();
    }
    return user;
    return { _id: user._id, email: user.email };
  }
}

// curl http://localhost:3000/auth/refresh -H "Authorization: Bearer "