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
import { EvaluacionCuestionarioService } from './evaluacionescuestionario.service';
import { CreateEvaluacionDto } from './dto/CreateEvaluacionCuestionarioDto';
import { UpdateEvaluacionDto } from './dto/UpdateEvaluacionCuestionarioDto';

@Controller('evaluacion-cuestionario')
export class EvaluacionCuestionarioController {
  constructor(
    private readonly evaluacionService: EvaluacionCuestionarioService,
  ) {}

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
  create(@Body() dto: CreateEvaluacionDto) {
    return this.evaluacionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEvaluacionDto) {
    return this.evaluacionService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.evaluacionService.remove(Number(id));
  }
}
