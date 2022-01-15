import { PartialType } from '@nestjs/swagger';
import { CreateFreelaningDto } from './create-freelaning.dto';

export class UpdateFreelaningDto extends PartialType(CreateFreelaningDto) {}
