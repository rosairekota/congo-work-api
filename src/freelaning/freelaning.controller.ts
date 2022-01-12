import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FreelaningService } from './freelaning.service';
import { CreateFreelaningDto } from './dto/create-freelaning.dto';
import { UpdateFreelaningDto } from './dto/update-freelaning.dto';

@Controller('freelaning')
export class FreelaningController {
  constructor(private readonly freelaningService: FreelaningService) {}

  @Post()
  create(@Body() createFreelaningDto: CreateFreelaningDto) {
    return this.freelaningService.create(createFreelaningDto);
  }

  @Get()
  findAll() {
    return this.freelaningService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.freelaningService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFreelaningDto: UpdateFreelaningDto) {
    return this.freelaningService.update(+id, updateFreelaningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.freelaningService.remove(+id);
  }
}
