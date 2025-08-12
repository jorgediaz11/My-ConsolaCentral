import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoActividad } from './tipo-actividad.entity';
import { TipoActividadService } from './tipo-actividad.service';
import { TipoActividadController } from './tipo-actividad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoActividad])],
  providers: [TipoActividadService],
  controllers: [TipoActividadController],
  exports: [TipoActividadService],
})
export class TipoActividadModule {}
