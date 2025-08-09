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
import { RespuestaEstudianteService } from './respuestas.service';
import { CreateRespuestaDto } from './dto/CreateRespuestaDto';
import { UpdateRespuestaDto } from './dto/UpdateRespuestaDto';

@Controller('respuesta-estudiante')
export class RespuestaEstudianteController {
  constructor(
    private readonly respuestaEstudianteService: RespuestaEstudianteService,
  ) {}

  @Get()
  findAll() {
    return this.respuestaEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.respuestaEstudianteService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateRespuestaDto) {
    return this.respuestaEstudianteService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateRespuestaDto) {
    return this.respuestaEstudianteService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.respuestaEstudianteService.remove(Number(id));
  }
}
