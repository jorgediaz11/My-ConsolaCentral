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
import { CalificacionService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/CreateCalificacionDto';
import { UpdateCalificacionDto } from './dto/UpdateCalificacionDto';

@Controller('calificaciones')
export class CalificacionController {
  constructor(private readonly calificacionService: CalificacionService) {}

  @Get()
  findAll() {
    return this.calificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.calificacionService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCalificacionDto) {
    return this.calificacionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCalificacionDto) {
    return this.calificacionService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.calificacionService.remove(Number(id));
  }
}
