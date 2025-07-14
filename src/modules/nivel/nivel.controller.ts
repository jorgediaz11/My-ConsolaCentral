import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { CreateNivelDto } from './dto/CreateNivelDto';
import { UpdateNivelDto } from './dto/UpdateNivelDto';

@Controller('nivel')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Get()
  findAll() {
    return this.nivelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nivelService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateNivelDto) {
    return this.nivelService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateNivelDto) {
    return this.nivelService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nivelService.remove(id);
  }
}