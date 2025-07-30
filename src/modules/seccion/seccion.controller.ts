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
import { SeccionService } from './seccion.service';
import { CreateSeccionDto } from './dto/CreateSeccionDto';
import { UpdateSeccionDto } from './dto/UpdateSeccionDto';

@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Get()
  findAll() {
    return this.seccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.seccionService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateSeccionDto) {
    return this.seccionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateSeccionDto) {
    return this.seccionService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.seccionService.remove(Number(id));
  }
}
