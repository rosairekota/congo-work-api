import { IUserData } from './../auth/user.interface';
import { SECRET } from './../../config';
import { JwtService } from '@nestjs/jwt';
import { HttpStatus, Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../auth/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService:UserService,private jwtService: JwtService){

  }
  async use(req: Request &  { user?: IUserData & { id?: number } }, res: Response, next:NextFunction ) {
    const authHeaders = req.headers.authorization;
    console.log("authentification")
    if (authHeaders && (authHeaders as string).split(' ')[1]) {
      const token = (authHeaders as string).split(' ')[1];
      const decoded: any = this.jwtService.verify(token, {secret:SECRET});
      const user = await this.authService.findById(decoded.id);

      if (!user) {
        throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
      }

      req.user = user.user;
      req.user.id = decoded.id;
     
      next();

    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
