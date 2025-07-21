import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ClasesDetService } from './clasesdet.service';
import { CreateClasesDetDto } from './dto/CreateClasesDetDto';
import { UpdateClasesDetDto } from './dto/UpdateClasesDetDto';

@Controller('clases-det')
export class ClasesDetController {
  constructor(private readonly clasesDetService: ClasesDetService) {}

  @Get()
  findAll() {
    return this.clasesDetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clasesDetService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateClasesDetDto) {
    return this.clasesDetService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateClasesDetDto) {
    return this.clasesDetService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clasesDetService.remove(id);
  }

  // Endpoint para filtrar por id_clases
  @Get('clases/:id_clases')
  findByClases(@Param('id_clases') id_clases: number) {
    return this.clasesDetService.findByClases(id_clases);
  }
}
