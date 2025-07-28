import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { CreateMaterialDto } from './dto/CreateMaterialDto';
import { UpdateMaterialDto } from './dto/UpdateMaterialDto';

@Controller('material')
export class MaterialController {
  constructor(private readonly service: MaterialService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id_material')
  findOne(@Param('id_material') id_material: number) {
    return this.service.findOne(id_material);
  }

  @Post()
  create(@Body() dto: CreateMaterialDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateMaterialDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
