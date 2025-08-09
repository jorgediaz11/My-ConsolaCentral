import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionActividad } from './evaluacionesactividad.entity';
import { EvaluacionActividadService } from './evaluacionesactividad.service';
import { EvaluacionActividadController } from './evaluacionesactividad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluacionActividad])],
  providers: [EvaluacionActividadService],
  controllers: [EvaluacionActividadController],
})
export class EvaluacionActividadModule {}
