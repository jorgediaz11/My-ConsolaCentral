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
import { CreateTipoMaterialDto } from './dto/CreateTipo-materialDto';
import { UpdateTipoMaterialDto } from './dto/UpdateTipo-materialDto';

@Controller('tipo-material')
export class TipoMaterialController {
  constructor(private readonly tipoMaterialService: TipoMaterialService) {}

  @Get()
  findAll() {
    return this.tipoMaterialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoMaterialService.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateTipoMaterialDto) {
    return this.tipoMaterialService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTipoMaterialDto) {
    return this.tipoMaterialService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoMaterialService.remove(id);
  }
}
