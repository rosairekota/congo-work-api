import { Role } from './../entities/user-role.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  readonly firstName :string

  @IsNotEmpty()
  readonly lastName :string

  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  roles:[]
  

}
