import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty,IsString,IsIn, IsEnum, IsOptional } from 'class-validator';
import { CreateProfessionDto } from '../../profession/dto/create-profession.dto';
import { UserRoleEnum } from '../../shared/enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName :string;

  @ApiProperty()
  @Type(()=> String)
  @IsNotEmpty()
  lastName :string;

  @ApiProperty()
  @Type(()=> String)
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @Type(()=> String)
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Type(()=> String)
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  roles:UserRoleEnum[]
  
  @ApiProperty()
  @IsOptional()
  profession:CreateProfessionDto
  
}
