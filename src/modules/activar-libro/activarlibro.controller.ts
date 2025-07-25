import { Controller, Post, Body } from '@nestjs/common';
import { ActivarLibroService } from './activarlibro.service';

@Controller('activar-libro')
export class ActivarLibroController {
  constructor(private readonly activarLibroService: ActivarLibroService) {}

  @Post('activar')
  async activarLibro(@Body() body: { username: string; codigo_libro: string }) {
    return this.activarLibroService.activarLibroPorCodigo(
      body.username,
      body.codigo_libro,
    );
  }
}
