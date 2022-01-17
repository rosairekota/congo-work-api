import { Role } from './../entities/user-role.entity';
import { IsNotEmpty,IsString } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  firstName :string

  @IsNotEmpty()
  lastName :string

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roles:[]
  

}
