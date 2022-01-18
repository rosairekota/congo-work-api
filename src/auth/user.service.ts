import { Role } from './entities/user-role.entity';
import { UserRoleEnum } from './../shared/enums/user-role.enum';
import { JwtService } from '@nestjs/jwt';

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { Collection, wrap } from '@mikro-orm/core';
import { SECRET } from '../../config';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { IUserRO } from './user.interface';
import { UserRepository } from './repositories/user.repository';
import { RoleRepository } from './repositories/role.repository';
import { TalentRepository } from '../talent/repositories/talent.repository';
import { ProfessionRepository } from '../profession/repositories/profession.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
    private readonly talentRepository: TalentRepository,
    private readonly professionRepository: ProfessionRepository,
    private readonly jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(loginUserDto: LoginUserDto): Promise<User> {
    const findOneOptions = {
      email: loginUserDto.email,
      password: await this.encryptPassword(loginUserDto.password),
    };

    return this.userRepository.findOne(findOneOptions);
  }

  async create(dto: CreateUserDto): Promise<IUserRO> {
    // check uniquen,ss of username/email
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      roles,
      profession,
      
    } = dto;
    
      const userRoles = [];
      for (const item of roles) {
        userRoles.push(await this.roleRepository.findByName(item));
      }

      const exists = await this.userRepository.count({
        $or: [{ username }, { email }],
      });

      if (exists > 0) {
        throw new HttpException(
          {
            message: 'Echec de la validation des données!',
            errors: { username: 'Username et email doivent être unique.' },
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      // create new user
      const user = this.userRepository.create({
        ...{ firstName, lastName, username, email, password },
      });
      user.saltSecret = await bcrypt.genSalt();
      user.password = await this.encryptPassword(
        user.password,
        user.saltSecret,
      );
      if (roles.length > 0) {
        user.roles.add(...userRoles);
      }

      const errors = await validate(user);

      if (errors.length > 0) {
        throw new HttpException(
          {
            message: 'Echec de la validation !',
            errors: { username: 'valeur invalide.' },
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
      try 
        {
        for (const role of roles) {
          switch (role) {
            case UserRoleEnum.ROLE_TALENT:
              const professionRepo =
              await this.professionRepository.finbByTitle(profession.title);
              const talent = this.talentRepository.create({});
              talent.profession = professionRepo;
              talent.user = user;
              await this.talentRepository.persistAndFlush([user,talent]);
              console.log('esimbi', professionRepo.id);
              break;

            case UserRoleEnum.ROLE_CLIENT:
              await this.userRepository.persistAndFlush([user]);
              break;

            default:
              await this.userRepository.persistAndFlush(user);
              break;
          }
        }

        return this.buildUserRO(user);
      }
      catch (e) {
        throw new Error("Echec: Un problème a été constaté lors de la création d'un utilisateur"+e);
        
     } 
     } 
     
   
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    wrap(user).assign(dto);
    await this.userRepository.flush();

    return this.buildUserRO(user);
  }

  async delete(email: string) {
    return this.userRepository.remove({ email });
  }

  async findById(id: number): Promise<IUserRO> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      const errors = { User: ' not found' };
      throw new HttpException({ errors }, 401);
    }

    return this.buildUserRO(user);
  }

  async findByEmail(email: string): Promise<IUserRO> {
    const user = await this.userRepository.findOneOrFail({ email });
    return this.buildUserRO(user);
  }

  async authenticate(loginUserDto: LoginUserDto): Promise<IUserRO> {
    const { email: email_one, password } = loginUserDto;
    const hashPassword = await this.encryptPassword(password);
    const foundUser = await this.userRepository.findOne(loginUserDto);

    const errors = { User: " n'a pas été trouvé !" };
    if (!foundUser) {
      throw new NotFoundException({ errors }, '401');
    }
    const token = await this.generateJWT(foundUser);
    const { email, username, bio, profilePhoto } = foundUser;
    const user = { email, token, username, bio, profilePhoto };
    return { user };
  }

  generateJWT(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return this.jwtService.sign(
      {
        email: user.email,
        exp: exp.getTime() / 1000,
        id: user.id,
        username: user.username,
      },
      { secret: SECRET },
    );
  }

  private buildUserRO(user: User) {
    const userRO = {
      bio: user.bio,
      email: user.email,
      profilePhoto: user.profilePhoto,
      token: this.generateJWT(user),
      username: user.username,
      roles: user.roles,
    };

    return { user: userRO };
  }
  private async encryptPassword(
    password: string,
    salt?: string,
  ): Promise<string> {
    const saltSecret = await bcrypt.genSalt();
    let hashPassword = '';
    if (salt !== '') {
      hashPassword = await bcrypt.hash(password, salt);
    } else {
      hashPassword = await bcrypt.hash(password, saltSecret);
    }

    return hashPassword;
  }
}
