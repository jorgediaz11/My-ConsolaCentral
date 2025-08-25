import { Module } from '@nestjs/common';
import { CuestionarioDetalleService } from './cuestionariodetalle.service';
import { CuestionarioDetalleController } from './cuestionariodetalle.controller';

@Module({
  imports: [], // <-- Elimina TypeOrmModule.forFeature([CuestionarioDetalleEntity])
  providers: [CuestionarioDetalleService],
  controllers: [CuestionarioDetalleController],
})
export class CuestionarioDetalleModule {}
