import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorCurso } from './profesor-curso.entity';
import { ProfesorCursoService } from './profesor-curso.service';
import { ProfesorCursoController } from './profesor-curso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorCurso])],
  providers: [ProfesorCursoService],
  controllers: [ProfesorCursoController],
})
export class ProfesorCursoModule {}
