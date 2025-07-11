import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './docente.entity';
import { DocentesController } from './docentes.controller';
import { DocentesService } from './docentes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Docente])],
  controllers: [DocentesController],
  providers: [DocentesService],
  exports: [TypeOrmModule, DocentesService],
})
export class DocentesModule {}
