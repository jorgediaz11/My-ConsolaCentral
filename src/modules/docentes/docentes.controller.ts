import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateDocenteDto } from './dto/CreateDocenteDto';
import { Param, Put, Delete } from '@nestjs/common';
import { UpdateDocenteDto } from './dto/UpdateDocenteDto';

@Controller('docentes')
@UseGuards(JwtAuthGuard)
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  list() {
    return this.docentesService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docentesService.create(createDocenteDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.docentesService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDocenteDto: UpdateDocenteDto,
  ) {
    return this.docentesService.update(Number(id), updateDocenteDto);
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
