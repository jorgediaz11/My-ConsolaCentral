import { Controller, Get, Param, Put, Body } from '@nestjs/common';
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

  @Put('estado')
  async updateEstadoByParams(
    @Body()
    body: {
      id_colegio: number;
      id_estudiante: number;
      id_curso: number;
      codigo_libro: string;
      estado: boolean;
    },
  ) {
    await this.activarLibroService.updateEstadoByParams(
      body.id_colegio,
      body.id_estudiante,
      body.id_curso,
      body.codigo_libro,
      body.estado,
    );
    return { message: 'Estado actualizado correctamente' };
  }
}
