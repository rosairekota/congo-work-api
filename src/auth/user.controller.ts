import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../shared/pipes/validation.pipe';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User } from './user.decorator';
import { IUserRO } from './user.interface';
import { UserService } from './user.service';

import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  async findMe(@User('email') email: string): Promise<IUserRO> {
    return this.userService.findByEmail(email);
  }

  @Put()
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return this.userService.update(userId, userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Delete(':slug')
  async delete(@Param() params) {
    return this.userService.delete(params.slug);
  }

  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<IUserRO> {
    
    return await this.userService.authenticate(loginUserDto);
  }
}
