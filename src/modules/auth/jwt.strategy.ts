// This file is part of the NestJS Authentication module.
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constans';

interface JwtPayload {
  sub: number;
  username: string;
  // Add other properties if needed
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Constructor injection of the JwtStrategy
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: JwtPayload) {
    //NOTE: si consultamos a db podriamos obtener mas informacion del usuario
    return { userId: payload.sub, username: payload.username };
  }
}
