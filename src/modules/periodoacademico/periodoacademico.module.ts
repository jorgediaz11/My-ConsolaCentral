import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodoAcademico } from './periodoacademico.entity';
import { PeriodoAcademicoService } from './periodoacademico.service';
import { PeriodoAcademicoController } from './periodoacademico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PeriodoAcademico])],
  providers: [PeriodoAcademicoService],
  controllers: [PeriodoAcademicoController],
  exports: [PeriodoAcademicoService],
})
export class PeriodoAcademicoModule {}
