import { Controller, Get, Param } from '@nestjs/common';
import { AlumnoGradoService } from './alumnogrado.service';

@Controller('alumno-grado')
export class AlumnoGradoController {
  constructor(private readonly service: AlumnoGradoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Get('usuario/:id_usuario/anio/:anio_escolar')
  findByUsuarioAndAnio(
    @Param('id_usuario') id_usuario: number,
    @Param('anio_escolar') anio_escolar: number,
  ) {
    return this.service.findByUsuarioAndAnio(id_usuario, anio_escolar);
  }
}
