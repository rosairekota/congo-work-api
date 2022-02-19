import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@ApiTags('profession')
@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @ApiOperation({summary:"Permet de créer un nouveau metier"})
  @Post()
  create(@Body() createProfessionDto: CreateProfessionDto) {
    return this.professionService.create(createProfessionDto);
  }
  
  @ApiOperation({summary:"Permet de Recupérer tous les metiers "})
  @Get()
  findAll() {
    return this.professionService.findAll();
  }

  @ApiOperation({summary:"Permet de Récupérer un metier "})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionService.findOne(+id);
  }

  @ApiOperation({summary:"Permet de modifier un metier "})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessionDto: UpdateProfessionDto) {
    return this.professionService.update(+id, updateProfessionDto);
  }

  @ApiOperation({summary:"Permet de Supprimer un metier "})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionService.remove(+id);
  }
}
