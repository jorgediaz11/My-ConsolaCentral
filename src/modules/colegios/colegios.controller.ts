import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ColegiosService } from './colegios.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateColegioDto } from './dto/CreateColegioDto';
import { Param, Put, Delete } from '@nestjs/common';
import { UpdateColegioDto } from './dto/UpdateColegioDto';

@Controller('colegios')
@UseGuards(JwtAuthGuard)
export class ColegiosController {
  constructor(private readonly colegiosService: ColegiosService) {}

  @Get()
  list() {
    // Llama al servicio para obtener todos los colegios
    return this.colegiosService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createColegioDto: CreateColegioDto) {
    // Llama al servicio para crear un colegio
    return this.colegiosService.create(createColegioDto);
  }

  @Get(':id_colegio')
  async findOne(@Param('id_colegio') id: number) {
    return this.colegiosService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id_colegio') id: number,
    @Body() updateColegioDto: UpdateColegioDto,
  ) {
    return this.colegiosService.update(Number(id), updateColegioDto);
  }

  @Delete(':id_colegio')
  async remove(@Param('id_colegio') id: number) {
    await this.colegiosService.remove(Number(id));
    return { message: 'Colegio eliminado correctamente' };
  }

  // Nuevo endpoint para filtrar por ubigeo
  @Get('ubigeo/:ubigeo')
  findByUbigeo(@Param('ubigeo') ubigeo: string) {
    return this.colegiosService.findByUbigeo(ubigeo);
  }
}
