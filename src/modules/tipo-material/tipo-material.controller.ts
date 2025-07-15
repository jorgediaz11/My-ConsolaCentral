import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TipoMaterialService } from './tipo-material.service';
import { TipoMaterialCreateDto } from './dto/CreateTipo-materialDto';
import { TipoMaterialUpdateDto } from './dto/UpdateTipo-materialDto';

@Controller('tipo-material')
export class TipoMaterialController {
  constructor(private readonly service: TipoMaterialService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: TipoMaterialCreateDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: TipoMaterialUpdateDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
