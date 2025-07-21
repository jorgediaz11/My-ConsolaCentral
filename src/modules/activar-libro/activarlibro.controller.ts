import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ActivarLibroService } from './activarlibro.service';
import { CreateActivarLibroDto } from './dto/CreateActivarLibroDto';
import { UpdateActivarLibroDto } from './dto/UpdateActivarLibroDto';

@Controller('activar-libro')
export class ActivarLibroController {
  constructor(private readonly activarLibroService: ActivarLibroService) {}

  @Get()
  findAll() {
    return this.activarLibroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.activarLibroService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateActivarLibroDto) {
    return this.activarLibroService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateActivarLibroDto) {
    return this.activarLibroService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.activarLibroService.remove(id);
  }

  // Endpoint para filtrar por id_activacion
  @Get('activacion/:id_activacion')
  findByActivacion(@Param('id_activacion') id_activacion: number) {
    return this.activarLibroService.findByActivacion(id_activacion);
  }
}
