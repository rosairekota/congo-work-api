import { Type } from 'class-transformer';
import { IsNotEmpty,IsString,IsIn, IsEnum } from 'class-validator';
import { UserRoleEnum } from '../../shared/enums/user-role.enum';

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
//  // @IsEnum(UserRoleEnum)
//   @IsIn([[UserRoleEnum.ROLE_SUPER_ADMIN,UserRoleEnum.ROLE_ADMIN,UserRoleEnum.ROLE_CLIENT,UserRoleEnum.ROLE_TALENT]])
  role:UserRoleEnum[]
  
}
