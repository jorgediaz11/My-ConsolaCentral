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

  @Get(':id_clases')
  findOne(@Param('id_clases') id_clases: number) {
    return this.clasesColService.findOne(id_clases);
  }

  @Post()
  create(@Body() dto: CreateClasesColDto) {
    return this.clasesColService.create(dto);
  }

  @Put(':id_clases')
  update(
    @Param('id_clases') id_clases: number,
    @Body() dto: UpdateClasesColDto,
  ) {
    return this.clasesColService.update(id_clases, dto);
  }

  @Delete(':id_clases')
  remove(@Param('id_clases') id_clases: number) {
    return this.clasesColService.remove(id_clases);
  }

  // Endpoint para filtrar por id_colegio
  @Get('colegio/:id_colegio')
  findClasesByColegio(@Param('id_colegio') id_colegio: number) {
    return this.clasesColService.findByColegio(Number(id_colegio));
  }

  // Endpoint para filtrar por id_docente
  @Get('docente/:id_docente')
  findClasesByDocente(@Param('id_docente') id_docente: number) {
    return this.clasesColService.findByDocente(Number(id_docente));
  }
}
