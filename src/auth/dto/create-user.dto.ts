import { Type } from 'class-transformer';
import { IsNotEmpty,IsString,IsIn, IsEnum, IsOptional } from 'class-validator';
import { CreateProfessionDto } from '../../profession/dto/create-profession.dto';
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
  roles:UserRoleEnum[]
  
  @IsOptional()
  profession:CreateProfessionDto
  
}
