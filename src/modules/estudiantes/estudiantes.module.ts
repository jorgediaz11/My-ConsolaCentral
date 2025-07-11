import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports: [TypeOrmModule, EstudiantesService],
})
export class EstudiantesModule {}
