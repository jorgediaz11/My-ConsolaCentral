import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ClasesColService } from './clasescol.service';
import { CreateClasesColDto } from './dto/CreateClasesColDto';
import { UpdateClasesColDto } from './dto/UpdateClasesColDto';

@Controller('clases-col')
export class ClasesColController {
  constructor(private readonly clasesColService: ClasesColService) {}

  @Get()
  findAll() {
    return this.clasesColService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clasesColService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateClasesColDto) {
    return this.clasesColService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateClasesColDto) {
    return this.clasesColService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.clasesColService.remove(id);
  }

  // Endpoint para filtrar por id_colegio
  @Get('colegio/:id_colegio')
  findByColegio(@Param('id_colegio') id_colegio: number) {
    return this.clasesColService.findByColegio(id_colegio);
  }
}
