import { IUserData } from './../user.interface';
import { UserRepository } from '../repositories/user.repository';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SECRET } from '../../../config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository:UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SECRET,
    });
  }

  async validate(payload: IUserData) {
    const user = await this.userRepository.findOneOrFail({
        username: payload.username,
      });
      delete user.password;
      delete user.saltSecret;
      //Si le User exist on le retourne et automatiquement c'est ce qu'on retourne dans validate
      // est mis dans la Request
  
      //sinon, on declanche une exception
      if (!user)
        throw new UnauthorizedException(` Vous n'avez pas l'auhtorisation`);
      return user;
  }
}