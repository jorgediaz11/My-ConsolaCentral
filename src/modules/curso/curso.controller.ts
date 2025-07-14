import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/CreateCursoDto';
import { UpdateCursoDto } from './dto/UpdateCursoDto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursoService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCursoDto) {
    return this.cursoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCursoDto) {
    return this.cursoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cursoService.remove(id);
  }
}
