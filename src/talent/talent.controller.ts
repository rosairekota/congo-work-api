import { ApiOperation ,ApiTags} from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TalentService } from './talent.service';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';

@ApiTags('talents')
@Controller('talent')
export class TalentController {
  constructor(private readonly talentService: TalentService) {}

  @ApiOperation({summary:"Permet de créer un talent"})
  @Post()
  createProfile(@Body() createTalentDto: CreateTalentDto) {
    return this.talentService.create(createTalentDto);
  }

  @ApiOperation({summary:"Permet de récuperer tous les talents"})
  @Get()
  findAll() {
    return this.talentService.findAll();
  }

  @ApiOperation({summary:"Permet de récuperer un talent"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.talentService.findOne(+id);
  }

  @ApiOperation({summary:"Permet de modifier un talent"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTalentDto: UpdateTalentDto) {
    return this.talentService.update(+id, updateTalentDto);
  }

  @ApiOperation({summary:"Permet de supprimer un talent"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.talentService.remove(+id);
  }
}
