import { Module } from '@nestjs/common';
import { CursoDetalleService } from './cursosdetalles.service';
import { CursoDetalleController } from './cursosdetalles.controller';

@Module({
  providers: [CursoDetalleService],
  controllers: [CursoDetalleController],
})
export class CursoDetalleModule {}
