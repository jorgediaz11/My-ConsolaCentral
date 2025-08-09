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
import { OpcionesService } from './opciones.service';
import { CreateOpcionDto } from './dto/CreateOpcionDto';
import { UpdateOpcionDto } from './dto/UpdateOpcionDto';

@Controller('opciones')
export class OpcionesController {
  constructor(private readonly opcionesService: OpcionesService) {}

  @Get()
  findAll() {
    return this.opcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.opcionesService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateOpcionDto) {
    return this.opcionesService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateOpcionDto) {
    return this.opcionesService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.opcionesService.remove(Number(id));
  }
}
