import { Type } from 'class-transformer';
import { IsNotEmpty,IsString,IsIn } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  firstName :string;

  @Type(()=> String)
  @IsNotEmpty()
  lastName :string;

  @Type(()=> String)
  @IsNotEmpty()
  username: string;

  @Type(()=> String)
  @IsNotEmpty()
  email: string;

  @Type(()=> String)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role:string
  

}
