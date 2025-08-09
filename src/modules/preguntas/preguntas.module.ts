import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './preguntas.entity';
import { PreguntasService } from './preguntas.service';
import { PreguntasController } from './preguntas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pregunta])],
  providers: [PreguntasService],
  controllers: [PreguntasController],
})
export class PreguntasModule {}
