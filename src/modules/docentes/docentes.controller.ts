import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Param, Put, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto } from './dto/CreateDocenteDto';
import { UpdateDocenteDto } from './dto/UpdateDocenteDto';

@Controller('docentes')
@UseGuards(JwtAuthGuard)
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  list() {
    return this.docentesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.docentesService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateDocenteDto) {
    return this.docentesService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateDocenteDto) {
    return this.docentesService.update(Number(id), dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.docentesService.remove(Number(id));
    return { message: 'Docente eliminado correctamente' };
  }

  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.docentesService.findByColegio(id_colegio);
  }
}
