import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { CreateFamiliaDto } from './dto/CreateFamiliaDto';
import { UpdateFamiliaDto } from './dto/UpdateFamiliaDto';

@Controller('familia')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  findAll() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.familiaService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateFamiliaDto) {
    return this.familiaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateFamiliaDto) {
    return this.familiaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.familiaService.remove(id);
  }

  // Endpoint para filtrar por colegio
  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.familiaService.findByColegio(id_colegio);
  }
}
