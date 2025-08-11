import { Controller, Get, Param } from '@nestjs/common';
import { CursoDetalleService } from './cursosdetalles.service';

@Controller('curso-detalle')
export class CursoDetalleController {
  constructor(private readonly cursoDetalleService: CursoDetalleService) {}

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.cursoDetalleService.findById(Number(id));
  }
}
