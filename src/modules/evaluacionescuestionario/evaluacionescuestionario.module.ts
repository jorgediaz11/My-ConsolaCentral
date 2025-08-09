import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvaluacionCuestionario } from './evaluacionescuestionario.entity';
import { EvaluacionCuestionarioService } from './evaluacionescuestionario.service';
import { EvaluacionCuestionarioController } from './evaluacionesCuestionario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EvaluacionCuestionario])],
  providers: [EvaluacionCuestionarioService],
  controllers: [EvaluacionCuestionarioController],
})
export class EvaluacionCuestionarioModule {}
