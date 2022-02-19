import { Profession } from './entities/profession.entity';
import { Injectable } from '@nestjs/common';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ProfessionRepository } from "./repositories/profession.repository";
@Injectable()
export class ProfessionService {
  constructor(private readonly professionRepository:ProfessionRepository){}
  create(createProfessionDto: CreateProfessionDto) {
      this.professionRepository.persistAndFlush(this.professionRepository.create(createProfessionDto))
    return 'esimbi';
  }

  async findAll():Promise<Profession[]> {
    return await this.professionRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} profession`;
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
