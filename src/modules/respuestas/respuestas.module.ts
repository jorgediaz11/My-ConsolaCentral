import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespuestaEstudiante } from './respuestas.entity';
import { RespuestaEstudianteService } from './respuestas.service';
import { RespuestaEstudianteController } from './respuestas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RespuestaEstudiante])],
  providers: [RespuestaEstudianteService],
  controllers: [RespuestaEstudianteController],
})
export class RespuestaEstudianteModule {}
