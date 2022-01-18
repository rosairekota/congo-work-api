import { IsNotEmpty } from 'class-validator';
export class CreateProfessionDto {
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    description?: string;
}
