import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateProfessionDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;
  
    @IsOptional()
    description?: string;
}
