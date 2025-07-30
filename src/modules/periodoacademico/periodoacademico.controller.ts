import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PeriodoAcademicoService } from './periodoacademico.service';
import { CreatePeriodoAcademicoDto } from './dto/CreatePeriodoAcademicoDto';
import { UpdatePeriodoAcademicoDto } from './dto/UpdatePeriodoAcademicoDto';

@Controller('periodo-academico')
export class PeriodoAcademicoController {
  constructor(private readonly service: PeriodoAcademicoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePeriodoAcademicoDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePeriodoAcademicoDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
