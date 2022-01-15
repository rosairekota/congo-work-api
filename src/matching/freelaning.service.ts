import { Injectable } from '@nestjs/common';
import { CreateFreelaningDto } from './dto/create-freelaning.dto';
import { UpdateFreelaningDto } from './dto/update-freelaning.dto';

@Injectable()
export class FreelaningService {
  create(createFreelaningDto: CreateFreelaningDto) {
    return 'This action adds a new freelaning';
  }

  findAll() {
    return `This action returns all freelaning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} freelaning`;
  }

  update(id: number, updateFreelaningDto: UpdateFreelaningDto) {
    return `This action updates a #${id} freelaning`;
  }

  remove(id: number) {
    return `This action removes a #${id} freelaning`;
  }
}
