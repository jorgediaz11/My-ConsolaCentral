import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoActividadService } from './tipo-actividad.service';
import { CreateTipoActividadDto } from './dto/CreateTipo-ActividadDto';
import { UpdateTipoActividadDto } from './dto/UpdateTipo-ActividadDto';

@Controller('tipo_actividad')
export class TipoActividadController {
  constructor(private readonly tipoActividadService: TipoActividadService) {}

  @Get()
  findAll() {
    return this.tipoActividadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoActividadService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateTipoActividadDto) {
    return this.tipoActividadService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTipoActividadDto) {
    return this.tipoActividadService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoActividadService.remove(id);
  }
}
