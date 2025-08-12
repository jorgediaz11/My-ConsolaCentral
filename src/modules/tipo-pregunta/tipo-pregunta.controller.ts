import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoPreguntaService } from './tipo-pregunta.service';
import { CreateTipoPreguntaDto } from './dto/CreateTipo-PreguntaDto';
import { UpdateTipoPreguntaDto } from './dto/UpdateTipo-PreguntaDto';

@Controller('tipo_pregunta')
export class TipoPreguntaController {
  constructor(private readonly tipoPreguntaService: TipoPreguntaService) {}

  @Get()
  findAll() {
    return this.tipoPreguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoPreguntaService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateTipoPreguntaDto) {
    return this.tipoPreguntaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTipoPreguntaDto) {
    return this.tipoPreguntaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoPreguntaService.remove(id);
  }
}
