import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacion } from './calificaciones.entity';
import { CalificacionService } from './calificaciones.service';
import { CalificacionController } from './calificaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Calificacion])],
  providers: [CalificacionService],
  controllers: [CalificacionController],
})
export class CalificacionModule {}
