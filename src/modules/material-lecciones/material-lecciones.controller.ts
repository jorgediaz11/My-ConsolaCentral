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
import { MaterialLeccionService } from './material-lecciones.service';
import { CreateMaterialLeccionDto } from './dto/CreateMaterial-LeccionDto';
import { UpdateMaterialLeccionDto } from './dto/UpdateMaterial-LeccionDto';

@Controller('material-lecciones')
export class MaterialLeccionController {
  constructor(
    private readonly materialLeccionService: MaterialLeccionService,
  ) {}

  @Get()
  findAll() {
    return this.materialLeccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.materialLeccionService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateMaterialLeccionDto) {
    return this.materialLeccionService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateMaterialLeccionDto) {
    return this.materialLeccionService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.materialLeccionService.remove(Number(id));
  }
}
