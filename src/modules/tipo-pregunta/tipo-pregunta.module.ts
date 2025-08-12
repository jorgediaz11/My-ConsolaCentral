import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPregunta } from './tipo-pregunta.entity';
import { TipoPreguntaService } from './tipo-pregunta.service';
import { TipoPreguntaController } from './tipo-pregunta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPregunta])],
  providers: [TipoPreguntaService],
  controllers: [TipoPreguntaController],
  exports: [TipoPreguntaService],
})
export class TipoPreguntaModule {}
