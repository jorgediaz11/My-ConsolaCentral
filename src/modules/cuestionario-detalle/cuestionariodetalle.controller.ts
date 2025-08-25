import { Controller, Get, Param } from '@nestjs/common';
import { CuestionarioDetalleService } from './cuestionariodetalle.service';

@Controller('cuestionario-detalle')
export class CuestionarioDetalleController {
  constructor(private readonly service: CuestionarioDetalleService) {}

  @Get(':id')
  getCuestionarioDetalle(@Param('id') id: number) {
    return this.service.findById(Number(id));
  }
}
