import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivarLibro } from './activarlibro.entity';
import { ActivarLibroService } from './activarlibro.service';
import { ActivarLibroController } from './activarlibro.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActivarLibro])],
  providers: [ActivarLibroService],
  controllers: [ActivarLibroController],
  exports: [ActivarLibroService],
})
export class ActivarLibroModule {}
