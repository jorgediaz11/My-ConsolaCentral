import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursosDto } from './dto/CreateCursosDto';
import { UpdateCursosDto } from './dto/UpdateCursosDto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cursosService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCursosDto) {
    return this.cursosService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateCursosDto) {
    return this.cursosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cursosService.remove(id);
  }

  // Endpoint para filtrar por tipo_curso e id_colegio
  @Get('tipo/:tipo_curso/colegio/:id_colegio')
  findByTipoYColegio(
    @Param('tipo_curso') tipo_curso: string,
    @Param('id_colegio') id_colegio: number,
  ) {
    return this.cursosService.findByTipoYColegio(tipo_curso, id_colegio);
  }
}
