import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursos } from './cursos.entity';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { UnidadModule } from '../unidad/unidad.module';
import { LeccionModule } from '../leccion/leccion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cursos]),
    UnidadModule, // <-- Importa el módulo de unidad
    LeccionModule, // <-- Importa el módulo de lección
  ],
  providers: [CursosService],
  controllers: [CursosController],
  exports: [CursosService],
})
export class CursosModule {}
