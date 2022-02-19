import { Profession } from './../../profession/entities/profession.entity';
import { UserStatusEnum } from './../../shared/enums/user-status-enum';
import { IsEnum, IsNotEmpty, IsObject, IsOptional } from 'class-validator';
import { User } from '../../auth/entities/user.entity';
export class CreateTalentDto {

  @IsOptional()
  experience: string;

  @IsNotEmpty()
  level: string;

  @IsNotEmpty()
  education?: string;

  @IsNotEmpty()
  githubLink?: string;

  @IsNotEmpty()
  websiteLink?: string;

  @IsNotEmpty()
  location?: string;

  @IsNotEmpty()
  phone: string;

  @IsOptional()
  @IsEnum(UserStatusEnum)
  availability: UserStatusEnum;

  @IsNotEmpty()
  @IsObject()
  user: User;
  
  @IsNotEmpty()
  @IsObject()
  profession: Profession;
}
