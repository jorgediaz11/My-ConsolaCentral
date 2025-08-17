import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProfesorCursoService } from './profesor-curso.service';
import { CreateProfesorCursoDto } from './dto/CreateProfesor-CursoDto';
import { UpdateProfesorCursoDto } from './dto/UpdateProfesor-CursoDto';

@Controller('profesor-curso')
export class ProfesorCursoController {
  constructor(private readonly profesorCursoService: ProfesorCursoService) {}

  @Get()
  findAll() {
    return this.profesorCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.profesorCursoService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateProfesorCursoDto) {
    return this.profesorCursoService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateProfesorCursoDto) {
    return this.profesorCursoService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.profesorCursoService.remove(Number(id));
  }
}
