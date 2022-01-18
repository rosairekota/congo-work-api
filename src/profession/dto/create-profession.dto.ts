import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateProfessionDto {
    @IsNotEmpty()
    title: string;
  
    @IsOptional()
    description?: string;
}
