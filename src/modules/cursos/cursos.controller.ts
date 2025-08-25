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
import { CreateCursoCompletoDto } from './dto/CreateCursoCompletoDto'; // importa el DTO

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

  @Get(':id/detalle')
  findDetalle(@Param('id') id: number) {
    return this.cursosService.findDetalleById(id);
  }

  @Post()
  create(@Body() dto: CreateCursosDto) {
    return this.cursosService.create(dto);
  }

  @Post('completo')
  crearCursoCompleto(@Body() dto: CreateCursoCompletoDto) {
    return this.cursosService.crearCursoCompleto(dto);
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
    @Param('tipo_curso') tipo_curso: string, // 'Interno' o 'Externo'
    @Param('id_colegio') id_colegio: number,
  ) {
    return this.cursosService.findByTipoYColegio(tipo_curso, id_colegio);
  }
}
