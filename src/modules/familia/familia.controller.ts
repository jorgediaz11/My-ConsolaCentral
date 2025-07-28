import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Param, Put, Delete } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { JwtAuthGuard } from '../../modules/auth/jwt-auth.guard';
import { CreateFamiliaDto } from './dto/CreateFamiliaDto';
import { UpdateFamiliaDto } from './dto/UpdateFamiliaDto';

@Controller('familia')
@UseGuards(JwtAuthGuard)
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Get()
  list() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.familiaService.findOne(Number(id));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateFamiliaDto) {
    return this.familiaService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateFamiliaDto) {
    return this.familiaService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.familiaService.remove(Number(id));
    return { message: 'Familia eliminada correctamente' };
  }

  // Endpoint para filtrar por colegio
  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.familiaService.findByColegio(id_colegio);
  }
}
