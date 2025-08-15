import { Controller, Get, Param } from '@nestjs/common';
import { CuestionarioDetalleService } from './cuestionariodetalle.service';

@Controller('cuestionario-detalle')
export class CuestionarioDetalleController {
  constructor(private readonly service: CuestionarioDetalleService) {}

  @Get()
  async getAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

    @Get('detalle/:id')
    async getDetalle(@Param('id') id: number) {
      return this.service.findById(id);
    }
}
