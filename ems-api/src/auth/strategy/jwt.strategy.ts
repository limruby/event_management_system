import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';
import { UsersService } from '../../users/users.service';
import { JwtAccessPayload } from '../entity/jwt-payload.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JwtAccessPayload) {
    const user = await this.usersService.find(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

// curl http://localhost:3000/profile -H "Authorization: Bearer "