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
import { EntregasService } from './entregas.service';
import { CreateEntregaDto } from './dto/CreateEntregaDto';
import { UpdateEntregaDto } from './dto/UpdateEntregaDto';

@Controller('entregas')
export class EntregasController {
  constructor(private readonly entregasService: EntregasService) {}

  @Get()
  findAll() {
    return this.entregasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.entregasService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEntregaDto) {
    return this.entregasService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEntregaDto) {
    return this.entregasService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.entregasService.remove(Number(id));
  }
}
