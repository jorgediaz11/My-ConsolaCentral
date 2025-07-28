import { Controller, Get, Param } from '@nestjs/common';
import { ActivarLibroService } from './activarlibro.service';

@Controller('activar-libro')
export class ActivarLibroController {
  constructor(private readonly activarLibroService: ActivarLibroService) {}

  @Get('pendientes/:id_estudiante/:id_colegio/:id_grado')
  async getLibrosPendientes(
    @Param('id_estudiante') id_estudiante: number,
    @Param('id_colegio') id_colegio: number,
    @Param('id_grado') id_grado: number,
  ) {
    const librosPendientes = await this.activarLibroService.getLibrosPendientes(
      id_estudiante,
      id_colegio,
      id_grado,
    );
    return {
      id_estudiante,
      id_colegio,
      id_grado,
      pendientes: librosPendientes,
      total_pendientes: librosPendientes.length,
    };
  }
}
