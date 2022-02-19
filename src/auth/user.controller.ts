import { Body, Controller, Delete, Get,Param, Post, Put } from '@nestjs/common';
import  { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User } from './user.decorator';
import { IUserRO } from './user.interface';
import { UserService } from './user.service';

import {
  ApiBearerAuth,ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User as UserEntity} from './entities/user.entity';

@ApiBearerAuth()
@ApiTags('user')
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) {}


  @ApiOperation({summary:"Permet de récuperer tous utilisateurs"})
  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @ApiOperation({summary:"Permet de récuperer un utilisateur via son email"})
  @Get(':email')
  async findMe(@User('email') email: string): Promise<IUserRO> {
    return this.userService.findByEmail(email);
  }

  @ApiOperation({summary:"Permet de créer un nouveau utilisateur"})
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    console.log(userData instanceof CreateUserDto)
    return await this.userService.create(userData);
  }

  @ApiOperation({summary:"Permet de modifier un Utilisateur"})
  @Put()
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return this.userService.update(userId, userData);
  }

  @ApiOperation({summary:"Permet de supprimer un utilisateur"})
  @Delete(':slug')
  async delete(@Param() params) {
    return this.userService.delete(params.slug);
  }

  @ApiOperation({summary:"Permet de connecter un utilisateur avec son email et password"})
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<IUserRO> {
    
    return await this.userService.authenticate(loginUserDto);
  }
}
