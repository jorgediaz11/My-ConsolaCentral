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
import { EvaluacionActividadService } from './evaluacionesactividad.service';
import { CreateEvaluacionActividadDto } from './dto/CreateEvaluacionActividadDto';
import { UpdateEvaluacionActividadDto } from './dto/UpdateEvaluacionActividadDto';

@Controller('evaluacion-actividad')
export class EvaluacionActividadController {
  constructor(private readonly evaluacionService: EvaluacionActividadService) {}

  @Get()
  findAll() {
    return this.evaluacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.evaluacionService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEvaluacionActividadDto) {
    return this.evaluacionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEvaluacionActividadDto) {
    return this.evaluacionService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.evaluacionService.remove(Number(id));
  }
}
