import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateEstudianteDto } from './dto/CreateEstudianteDto';
import { Param, Put, Delete } from '@nestjs/common';
import { UpdateEstudianteDto } from './dto/UpdateEstudianteDto';

@Controller('estudiantes')
@UseGuards(JwtAuthGuard)
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Get()
  list() {
    return this.estudiantesService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.estudiantesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.update(Number(id), updateEstudianteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.estudiantesService.remove(Number(id));
    return { message: 'Estudiante eliminado correctamente' };
  }
}
